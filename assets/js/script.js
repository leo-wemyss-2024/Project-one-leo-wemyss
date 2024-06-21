document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    // Modal for workout plans and guides (Corrected)
    const planDetails = {
        "Day 1 (Beginner)": "Beginner Plan: Day 1<br>Light Cardio - 30 minutes of walking or easy jogging.",
        "Day 2 (Beginner)": "Beginner Plan: Day 2<br>Bodyweight Exercises - 20 minutes of exercises like squats, push-ups, and lunges.",
        "Day 3 (Beginner)": "Beginner Plan: Day 3<br>Rest day or light stretching.",
        "Day 4 (Beginner)": "Beginner Plan: Day 4<br>Light Cardio - 30 minutes of walking or easy jogging.",
        "Day 5 (Beginner)": "Beginner Plan: Day 5<br>Bodyweight Exercises - 20 minutes of exercises like squats, push-ups, and lunges.",
        "Day 6 (Beginner)": "Beginner Plan: Day 6<br>Rest day or light stretching.",
        "Day 7 (Beginner)": "Beginner Plan: Day 7<br>Light Cardio - 30 minutes of walking or easy jogging.",
        "Day 1 (Intermediate)": "Intermediate Plan: Day 1<br>Cardio - 45 minutes of running or cycling.",
        "Day 2 (Intermediate)": "Intermediate Plan: Day 2<br>Strength Training - Full body workout with weights.",
        "Day 3 (Intermediate)": "Intermediate Plan: Day 3<br>Cardio - 45 minutes of running or cycling.",
        "Day 4 (Intermediate)": "Intermediate Plan: Day 4<br>Strength Training - Upper body workout with weights.",
        "Day 5 (Intermediate)": "Intermediate Plan: Day 5<br>Cardio - 45 minutes of running or cycling.",
        "Day 6 (Intermediate)": "Intermediate Plan: Day 6<br>Strength Training - Lower body workout with weights.",
        "Day 7 (Intermediate)": "Intermediate Plan: Day 7<br>Rest day or light stretching.",
        "Day 1 (Advanced)": "Advanced Plan: Day 1<br>High-Intensity Interval Training (HIIT) - 30 minutes.",
        "Day 2 (Advanced)": "Advanced Plan: Day 2<br>Strength Training - Push day (chest, shoulders, triceps).",
        "Day 3 (Advanced)": "Advanced Plan: Day 3<br>Cardio - 60 minutes of running or cycling.",
        "Day 4 (Advanced)": "Advanced Plan: Day 4<br>Strength Training - Pull day (back, biceps).",
        "Day 5 (Advanced)": "Advanced Plan: Day 5<br>High-Intensity Interval Training (HIIT) - 30 minutes.",
        "Day 6 (Advanced)": "Advanced Plan: Day 6<br>Strength Training - Leg day.",
        "Day 7 (Advanced)": "Advanced Plan: Day 7<br>Rest day or light stretching.",
        "Nutrition Week 1": "Nutrition Plan: Week 1<br>Focus on balanced diet with a mix of proteins, carbs, and fats.",
        "Nutrition Week 2": "Nutrition Plan: Week 2<br>Increase protein intake to support muscle growth.",
        "Nutrition Week 3": "Nutrition Plan: Week 3<br>Incorporate more vegetables and fruits for vitamins and minerals.",
        "Nutrition Week 4": "Nutrition Plan: Week 4<br>Monitor portion sizes to manage calorie intake.",
        "Nutrition Week 5": "Nutrition Plan: Week 5<br>Stay hydrated - Drink at least 8 cups of water a day.",
        "Nutrition Week 6": "Nutrition Plan: Week 6<br>Review and adjust diet based on progress and goals.",
        "Rest Week 1": "Rest Plan: Week 1<br>Focus on getting 7-8 hours of sleep each night.",
        "Rest Week 2": "Rest Plan: Week 2<br>Incorporate light stretching or yoga to aid recovery.",
        "Rest Week 3": "Rest Plan: Week 3<br>Schedule regular rest days to prevent overtraining.",
        "Rest Week 4": "Rest Plan: Week 4<br>Listen to your body and rest when needed.",
        "Rest Week 5": "Rest Plan: Week 5<br>Maintain a consistent sleep schedule.",
        "Rest Week 6": "Rest Plan: Week 6<br>Evaluate your rest and recovery plan and make adjustments."
    };

    window.showModal = function (day) {
        displayPlanModal(day, planDetails[day]); // Call displayPlanModal to display the plan details
    };

    const modal = document.getElementById('planModal');
    const modalClose = modal.querySelector('.modal-close');
    modalClose.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Typing animation initialization for hero text
    const heroText = document.querySelector('.typing-animation');
    if (heroText) {
        heroText.classList.add('typing-animation-visible');
    }

    // Intersection observer for fade-in effect
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
                <!-- ... (more content for this blog post) -->
            `
        },
        {
            title: 'The Benefits of Strength Training',
            content: `
                <p>Discover why strength training is crucial for your overall health...</p>
                <h3>Burn Fat, Build Muscle</h3>
                <p>Strength training isn't just about gaining muscle. It also fires up your metabolism, helping you shed unwanted fat...</p>
                <!-- ... (more content for this blog post) -->
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

    // Close the blog modal when the user clicks on <span> (x)
    document.querySelectorAll('.modal-close').forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            closeButton.closest('.modal').style.display = "none";
        });
    });

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function (event) {
        document.querySelectorAll('.modal').forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    };

    // Harris-Benedict Calorie Needs Calculator
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

            console.log('Gender:', gender, 'Age:', age, 'Height:', height, 'Weight:', weight, 'Activity:', activity);

            let bmr;
            if (gender === 'male') {
                bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }

            const tdee = bmr * activity;
            console.log('BMR:', bmr, 'TDEE:', tdee);

            hbResult.querySelector('#hb-result-text').textContent = `Your daily calorie needs: ${Math.round(tdee)} calories`;
        });
    }

    // BMI Calculator
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

            console.log('Height:', height, 'Weight:', weight, 'Height Unit:', heightUnit, 'Weight Unit:', weightUnit);

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

            console.log('BMI:', bmi);

            bmiResult.querySelector('#bmi-result-text').textContent = `Your BMI is: ${bmi.toFixed(2)}`;
        });
    }
});