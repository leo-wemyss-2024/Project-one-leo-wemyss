// JavaScript (script.js)

// Function to show the modal with plan details
function showModal(planName, planDetails) {
    const modal = document.getElementById('planModal');
    modal.style.display = "block"; // Show the modal

    const modalTitle = modal.querySelector('#modal-plan-title');
    modalTitle.textContent = planName;
    const modalDetails = modal.querySelector('#modal-plan-details');
    modalDetails.innerHTML = planDetails;
}

window.onload = function () {
    document.addEventListener("DOMContentLoaded", function () {
        'use strict';

        // Modal for workout plans and guides (Corrected)
        const planDetails = {
            "Day 1 (Beginner)": "Beginner Plan: Day 1<br>Light Cardio - 30 minutes of walking or easy jogging.",
            "Day 2 (Beginner)": "Beginner Plan: Day 2<br>Bodyweight Exercises - 20 minutes of exercises like squats, push-ups, and lunges.",
            // ... (Add more plan details here) ...
        };

        window.showModal = function (day) {
            showModal(day, planDetails[day]); // Call showModal to display the plan details
        };

        const modal = document.getElementById('planModal');
        const modalClose = modal.querySelector('.modal-close');
        modalClose.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // ... (Your other JavaScript code)
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

        // Blog posts data
        const blogPosts = [
            {
                title: '5 Tips to Improve Your Cardio',
                content: `
                    <p>Learn the best techniques to boost your cardiovascular fitness...</p>
                    <h3>HIIT It Up</h3>
                    <p>High-Intensity Interval Training (HIIT) is your secret weapon for maximizing results in minimal time...</p>
                    // ... (more content for this blog post)
                `
            },
            {
                title: 'The Benefits of Strength Training',
                content: `
                    <p>Discover why strength training is crucial for your overall health...</p>
                    <h3>Burn Fat, Build Muscle</h3>
                    <p>Strength training isn't just about gaining muscle. It also fires up your metabolism, helping you shed unwanted fat...</p>
                    // ... (more content for this blog post)
                `
            }
        ];

        // Function to show the blog modal
        function showBlogModal(title, content) {
            const modal = document.getElementById('blog-modal');
            const modalTitle = document.getElementById('modalTitle');
            const modalContent = document.getElementById('modalContent');

            modalTitle.innerHTML = title;
            modalContent.innerHTML = content;
            modal.style.display = "block";
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

        // Typing animation initialization for hero text
        const heroText = document.querySelector('.typing-animation');
        if (heroText) {
            heroText.classList.add('typing-animation-visible');
        }

        const hbForm = document.getElementById('harris-benedict-form');
        const hbResult = document.getElementById('calorie-needs-result');

        if (hbForm) {
            hbForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const gender = document.getElementById('hb-gender').value;
                const age = parseInt(document.getElementById('hb-age').value);
                const height = parseInt(document.getElementById('hb-height').value);
                const weight = parseInt(document.getElementById('hb-weight').value);
                const activity = parseFloat(document.getElementById('hb-activity').value);

                let bmr;
                if (gender === 'male') {
                    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
                } else {
                    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
                }

                const tdee = bmr * activity;
                hbResult.textContent = `Your daily calorie needs: ${Math.round(tdee)} calories`;
            });
        }

        const bmiForm = document.getElementById('bmi-form');
        const bmiResult = document.getElementById('bmi-result');

        if (bmiForm) {
            bmiForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const heightInput = document.getElementById('bmi-height');
                const weightInput = document.getElementById('bmi-weight');
                const heightUnit = document.getElementById('bmi-height-unit').value;
                const weightUnit = document.getElementById('bmi-weight-unit').value;

                const height = parseFloat(heightInput.value);
                const weight = parseFloat(weightInput.value);

                if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                    alert('Please enter valid height and weight values.');
                    return;
                }

                let bmi;

                if (heightUnit === 'cm' && weightUnit === 'kg') {
                    bmi = weight / Math.pow(height / 100, 2); // height in meters
                } else if (heightUnit === 'meters' && weightUnit === 'kg') {
                    bmi = weight / Math.pow(height, 2);
                } else if (heightUnit === 'inches' && weightUnit === 'lbs') {
                    bmi = (weight * 703) / Math.pow(height, 2);
                } else {
                    alert('Please select valid units for height and weight.');
                    return;
                }

                bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
            });
        }
    });
};
