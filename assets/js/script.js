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
    const modal = document.getElementById('planModal');
    const modalClose = modal.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-plan-title');
    const modalDetails = document.getElementById('modal-plan-details');

    window.showModal = function (day) {
        const planDetails = getPlanDetails(day);
        modalTitle.textContent = day;
        modalDetails.innerHTML = planDetails;
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
    };

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    });

    function getPlanDetails(day) {
        const details = {
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
    
    
       
        return details[day] || 'No details found for this day.';
    }

    // Typing animation initialization for hero text
    const heroText = document.querySelector('.typing-animation');
    if (heroText) {
        heroText.classList.add('typing-animation-visible');
    }

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

    // Harris-Benedict Calculator functionality
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
        modal.setAttribute('aria-hidden', 'false');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
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
        document.getElementById('blog-modal').setAttribute('aria-hidden', 'true');
    });

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function (event) {
        const modal = document.getElementById('blog-modal');
        if (event.target == modal) {
            modal.style.display = "none";
            modal.setAttribute('aria-hidden', 'true');
        }
    };

  
        });
 
