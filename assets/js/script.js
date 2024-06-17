
document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    // Smooth scrolling for navigation links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Fade-in animations with Intersection Observer
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => observer.observe(section));

    // Modal for workout plans and guides
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-plan-title');
    const modalDetails = document.getElementById('modal-plan-details');
    window.showModal = function (day) {
        const planDetails = getPlanDetails(day);
        modalTitle.textContent = day;
        modalDetails.innerHTML = planDetails;
        modal.style.display = 'flex';
    };
    modalClose.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    function getPlanDetails(day) {
        const details = {
            // Add your plan details here
        };
        return details[day] || 'No details found for this day.';
    }

    // Typing animation initialization for hero text
    const heroText = document.querySelector('.typing-animation');
    if (heroText) {
        heroText.classList.add('typing-animation-visible');
    }

    // List of counties
    const counties = {
        "Ireland": ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"],
        "Northern Ireland": ["Antrim", "Armagh", "Derry", "Down", "Fermanagh", "Tyrone"]
    };

    // Populate counties based on country selection
    const countrySelect = document.getElementById('country');
    const countySelect = document.getElementById('county');
    countrySelect.addEventListener('change', function () {
        const selectedCountry = this.value;
        const countyOptions = counties[selectedCountry] || [];
        countySelect.innerHTML = '<option value="">Please Select</option>';
        countyOptions.forEach(county => {
            const option = document.createElement('option');
            option.value = county;
            option.textContent = county;
            countySelect.appendChild(option);
        });
    });

    // BMI Calculator functionality
    const bmiForm = document.getElementById('bmi-form');
    const bmiResult = document.getElementById('bmi-result');
    if (bmiForm) {
        bmiForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const height = parseFloat(document.getElementById('bmi-height').value);
            const weight = parseFloat(document.getElementById('bmi-weight').value);
            const heightUnit = document.getElementById('bmi-height-unit').value;
            const weightUnit = document.getElementById('bmi-weight-unit').value;

            let heightInMeters;
            if (heightUnit === 'cm') {
                heightInMeters = height / 100;
            } else if (heightUnit === 'meters') {
                heightInMeters = height;
            } else if (heightUnit === 'inches') {
                heightInMeters = height * 0.0254;
            } else {
                bmiResult.textContent = 'Please select a valid height unit.';
                return;
            }

            let weightInKg;
            if (weightUnit === 'kg') {
                weightInKg = weight;
            } else if (weightUnit === 'lbs') {
                weightInKg = weight * 0.453592;
            } else {
                bmiResult.textContent = 'Please select a valid weight unit.';
                return;
            }

            if (!isNaN(heightInMeters) && !isNaN(weightInKg) && heightInMeters > 0 && weightInKg > 0) {
                const bmi = (weightInKg / (heightInMeters ** 2)).toFixed(2);
                bmiResult.textContent = `Your BMI is ${bmi}`;
            } else {
                bmiResult.textContent = 'Please enter valid height and weight.';
            }
        });
    } else {
        console.error('BMI form not found');
    }

    document.addEventListener("DOMContentLoaded", function () {
        'use strict';

    // Blog posts data
    const blogPosts = [
        {
            title: '5 Tips to Improve Your Cardio',
            content: `
                <p>Learn the best techniques to boost your cardiovascular fitness...</p>
                <h3>HIIT It Up</h3>
                <p>High-Intensity Interval Training (HIIT) is your secret weapon for maximizing results in minimal time...</p>
                <h3>Embrace Variety</h3>
                <p>Ditch the treadmill boredom! Explore a variety of cardio exercises...</p>
                <h3>Fuel Your Fire</h3>
                <p>Discover the best pre- and post-workout nutrition strategies to fuel your cardio sessions and optimize recovery...</p>
                <h3>Listen to Your Body</h3>
                <p>Learn how to monitor your heart rate and other key metrics to gauge your effort and avoid overtraining...</p>
                <h3>Progress Gradually</h3>
                <p>Don't rush into intense workouts. Start with manageable goals and gradually increase the duration and intensity over time...</p>
            `
        },
        {
            title: 'The Benefits of Strength Training',
            content: `
                <p>Discover why strength training is crucial for your overall health...</p>
                <h3>Burn Fat, Build Muscle</h3>
                <p>Strength training isn't just about gaining muscle. It also fires up your metabolism, helping you shed unwanted fat...</p>
                <h3>Boost Bone Health</h3>
                <p>Protect yourself from osteoporosis and fractures as you age. Strength training helps build and maintain strong bones...</p>
                <h3>Enhance Mood and Energy</h3>
                <p>Get a natural mood lift and increased energy levels with regular strength workouts...</p>
                <h3>Improve Functional Fitness</h3>
                <p>Move with ease and confidence in your everyday life. Strength training enhances your ability to perform daily activities...</p>
                <h3>Reduce Chronic Disease Risk</h3>
                <p>Strength training has been shown to lower the risk of chronic conditions like heart disease, type 2 diabetes, and some types of cancer...</p>
            `
        }
    ];

    // Function to show the blog modal
    function showBlogModal(title, content) {
        const modal = document.getElementById('blog-modal'); // Get the modal element
        const modalTitle = document.getElementById('modalTitle'); // Get the modal title element
        const modalContent = document.getElementById('modalContent'); // Get the modal content element

        modalTitle.innerHTML = title; // Set the modal title
        modalContent.innerHTML = content; // Set the modal content
        modal.style.display = "block"; // Display the modal
    }

    // Add event listeners to the "Read More" buttons
    document.querySelectorAll('.read-more').forEach((button, index) => {
        button.addEventListener('click', () => {
            showBlogModal(blogPosts[index].title, blogPosts[index].content);
        });
    });

    // Close the modal when the user clicks on <span> (x)
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('blog-modal').style.display = "none";
    });

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function (event) {
        const modal = document.getElementById('blog-modal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});