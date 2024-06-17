document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    window.showModal = function(day) {
        const planDetails = getPlanDetails(day);
        modalTitle.textContent = day;
        modalDetails.innerHTML = planDetails;
        modal.style.display = 'flex';
    }
    modalClose.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    function getPlanDetails(day) {
        const details = {
            "Day 3 (Beginner)": "Beginner Plan: Day 3<br>Rest day.",
            "Day 4 (Beginner)": "Beginner Plan: Day 4<br>Light Cardio - 30 minutes of walking or easy jogging.",
            "Day 5 (Beginner)": "Beginner Plan: Day 5<br>Flexibility Training - 20 minutes of stretching or yoga.",
            "Day 6 (Beginner)": "Beginner Plan: Day 6<br>Bodyweight Exercises - 20 minutes of exercises like squats, push-ups, and lunges.",
            "Day 7 (Beginner)": "Beginner Plan: Day 7<br>Rest day.",
            "Day 1 (Intermediate)": "Intermediate Plan: Day 1<br>Moderate Cardio - 45 minutes of running or cycling.",
            "Day 2 (Intermediate)": "Intermediate Plan: Day 2<br>Weightlifting - 45 minutes focusing on major muscle groups.",
            "Day 3 (Intermediate)": "Intermediate Plan: Day 3<br>Core Training - 30 minutes of exercises like planks and sit-ups.",
            "Day 4 (Intermediate)": "Intermediate Plan: Day 4<br>Moderate Cardio - 45 minutes of running or cycling.",
            "Day 5 (Intermediate)": "Intermediate Plan: Day 5<br>Weightlifting - 45 minutes focusing on major muscle groups.",
            "Day 6 (Intermediate)": "Intermediate Plan: Day 6<br>Flexibility Training - 30 minutes of stretching or yoga.",
            "Day 7 (Intermediate)": "Intermediate Plan: Day 7<br>Rest day.",
            "Day 1 (Advanced)": "Advanced Plan: Day 1<br>HIIT - 30 minutes of high-intensity interval training.",
            "Day 2 (Advanced)": "Advanced Plan: Day 2<br>Heavy Weightlifting - 60 minutes focusing on major muscle groups.",
            "Day 3 (Advanced)": "Advanced Plan: Day 3<br>Advanced Cardio - 60 minutes of intense running or cycling.",
            "Day 4 (Advanced)": "Advanced Plan: Day 4<br>HIIT - 30 minutes of high-intensity interval training.",
            "Day 5 (Advanced)": "Advanced Plan: Day 5<br>Heavy Weightlifting - 60 minutes focusing on major muscle groups.",
            "Day 6 (Advanced)": "Advanced Plan: Day 6<br>Advanced Flexibility - 45 minutes of stretching or advanced yoga.",
            "Day 7 (Advanced)": "Advanced Plan: Day 7<br>Rest day.",
            "Nutrition Week 1": "Nutrition Advice: Week 1<br>Focus on whole foods, balanced diet, plenty of hydration.",
            "Nutrition Week 2": "Nutrition Advice: Week 2<br>Include more proteins and healthy fats in your diet.",
            "Nutrition Week 3": "Nutrition Advice: Week 3<br>Monitor your calorie intake to match your activity level.",
            "Nutrition Week 4": "Nutrition Advice: Week 4<br>Incorporate more fruits and vegetables.",
            "Nutrition Week 5": "Nutrition Advice: Week 5<br>Reduce processed sugars and unhealthy snacks.",
            "Nutrition Week 6": "Nutrition Advice: Week 6<br>Maintain a balanced diet with a variety of nutrients.",
            "Rest Week 1": "Rest and Recovery: Week 1<br>Importance of sleep and rest days.",
            "Rest Week 2": "Rest and Recovery: Week 2<br>Incorporate active recovery like light walking or yoga.",
            "Rest Week 3": "Rest and Recovery: Week 3<br>Listen to your body and avoid overtraining.",
            "Rest Week 4": "Rest and Recovery: Week 4<br>Regular massage or foam rolling for muscle recovery.",
            "Rest Week 5": "Rest and Recovery: Week 5<br>Hydration and nutrition play a key role in recovery.",
            "Rest Week 6": "Rest and Recovery: Week 6<br>Balancing training intensity and rest.",
            "Strength Week 1": "Strength Training: Week 1<br>Full body workout with bodyweight exercises.",
            "Strength Week 2": "Strength Training: Week 2<br>Introduction to weightlifting, focusing on form.",
            "Strength Week 3": "Strength Training: Week 3<br>Increase intensity and weight.",
            "Strength Week 4": "Strength Training: Week 4<br>Split workouts focusing on different muscle groups.",
            "Strength Week 5": "Strength Training: Week 5<br>Higher reps and lighter weights for endurance.",
            "Strength Week 6": "Strength Training: Week 6<br>Lower reps and heavier weights for strength.",
            "Running Week 1": "Specialized Running: Week 1<br>8 x 400 meters with 3 minutes jog between runs.",
            "Running Week 2": "Specialized Running: Week 2<br>8 x 400 meters with 2:45 jog between runs.",
            "Running Week 3": "Specialized Running: Week 3<br>8 x 400 meters with 2:30 jog between runs.",
            "Running Week 4": "Specialized Running: Week 4<br>8 x 400 meters with 2:15 jog between runs.",
            "Running Week 5": "Specialized Running: Week 5<br>8 x 400 meters with 2:00 jog between runs.",
            "Running Week 6": "Specialized Running: Week 6<br>8 x 400 meters with 1:45 jog between runs."
        };

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
    countrySelect.addEventListener('change', function() {
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
        bmiForm.addEventListener('submit', function(e) {
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

    // Function to show the blog modal with the relevant content
function showBlogModal(title, content) {
    // Get the modal element
    const modal = document.getElementById('blog-modal');
    // Get the content container within the modal
    const modalContent = modal.querySelector('.modal-content');
    // Create elements for the modal title and text content
    const modalTitle = document.createElement('h2');
    const modalText = document.createElement('p');
    // Get the close button inside the modal
    const closeButton = modal.querySelector('.modal-close');

    // Set the text content for the title and text elements
    modalTitle.textContent = title;
    modalText.textContent = content;

    // Clear any existing content in the modal content container
    modalContent.innerHTML = '';
    // Append the close button, title, and text elements to the modal content container
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);

    // Display the modal by setting its display style to 'block'
    modal.style.display = 'block';

    // Event listener for the close button to hide the modal
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    // Event listener to hide the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

/ // Array holding blog posts with titles and expanded content
const blogPosts = [
    {
        title: '5 Heart-Pumping Hacks: Elevate Your Cardio Endurance and Torch Calories Faster!',
        content: `
            <p>Are you ready to take your cardio workouts to the next level? Whether you're a seasoned runner or just starting your fitness journey, these five expert tips will help you boost your cardiovascular health, burn more calories, and unlock your full potential.</p>
            <h3>HIIT It Up</h3>
            <p>High-Intensity Interval Training (HIIT) is your secret weapon for maximizing results in minimal time. By alternating between intense bursts of activity and short rest periods, you can burn more calories in a shorter amount of time. HIIT also improves your cardiovascular endurance and metabolic rate. Here's how to structure your HIIT sessions:</p>
            <ul>
                <li>Warm-up for 5-10 minutes with light cardio.</li>
                <li>Perform 30 seconds of high-intensity exercise (like sprinting) followed by 30 seconds of rest.</li>
                <li>Repeat for 20-30 minutes.</li>
                <li>Cool down for 5-10 minutes.</li>
            </ul>
            <h3>Embrace Variety</h3>
            <p>Ditch the treadmill boredom! Explore a variety of cardio exercises to keep your workouts exciting and engage different muscle groups. Some fun and effective cardio options include:</p>
            <ul>
                <li>Dancing: Great for coordination and fun.</li>
                <li>Swimming: A full-body workout that's easy on the joints.</li>
                <li>Cycling: Excellent for lower body strength and endurance.</li>
                <li>Jump Rope: Perfect for improving agility and cardiovascular health.</li>
            </ul>
            <h3>Fuel Your Fire</h3>
            <p>Discover the best pre- and post-workout nutrition strategies to fuel your cardio sessions and optimize recovery. Proper nutrition ensures you have the energy to perform and recover efficiently:</p>
            <ul>
                <li><strong>Pre-Workout:</strong> Consume a balanced meal with carbs, protein, and a little fat about 2-3 hours before exercising. Try a banana with peanut butter or a smoothie.</li>
                <li><strong>Post-Workout:</strong> Replenish glycogen stores and repair muscles with a meal high in protein and carbs within 30 minutes after your workout. Think grilled chicken with quinoa and veggies.</li>
            </ul>
            <h3>Listen to Your Body</h3>
            <p>Learn how to monitor your heart rate and other key metrics to gauge your effort and avoid overtraining. Tools like heart rate monitors and fitness trackers can provide valuable insights. Aim to keep your heart rate within your target zone to ensure you're working hard enough without risking injury. Pay attention to signs of overtraining, such as:</p>
            <ul>
                <li>Persistent fatigue</li>
                <li>Decreased performance</li>
                <li>Mood swings</li>
                <li>Trouble sleeping</li>
            </ul>
            <h3>Progress Gradually</h3>
            <p>Don't rush into intense workouts. Start with manageable goals and gradually increase the duration and intensity over time. This approach helps prevent injuries and burnout. Follow these tips for progressive training:</p>
            <ul>
                <li>Increase workout time by 5-10% each week.</li>
                <li>Introduce new exercises slowly.</li>
                <li>Incorporate rest days to allow your body to recover.</li>
            </ul>
            <p>Ready to transform your cardio workouts? Join our community for personalized guidance and support on your journey to a healthier heart and a fitter you!</p>
        `
    },
     // Array holding blog posts with titles and expanded content
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
        document.getElementById('modalTitle').innerHTML = title; // Set the modal title
        document.getElementById('modalContent').innerHTML = content; // Set the modal content
        modal.style.display = "block"; // Display the modal
    }

    // Add event listeners to the "Read More" buttons
    document.querySelectorAll('.read-more').forEach((button, index) => {
        button.addEventListener('click', () => {
            // Show the blog modal with the relevant title and content
            showBlogModal(blogPosts[index].title, blogPosts[index].content);
        });
    });

    // Close the modal when the user clicks on <span> (x)
    document.querySelectorAll('.modal-close').forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            document.getElementById('blog-modal').style.display = "none"; // Hide the modal
        });
    });

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        const modal = document.getElementById('blog-modal');
        if (event.target == modal) {
            modal.style.display = "none"; // Hide the modal
        }
    }
});