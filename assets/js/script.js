document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.error('Element with id ' + targetId + ' not found');
                }
            } else {
                console.error('Invalid href attribute', href);
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
        if (modalTitle && modalDetails) {
            modalTitle.textContent = day;
            modalDetails.innerHTML = planDetails;
            modal.style.display = 'flex';
        } else {
            console.error('Modal elements not found');
        }
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    } else {
        console.error('Element .modal-close not found');
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    function getPlanDetails(day) {
        const details = {
            // Beginner Plan
            "Day 1 (Beginner)": "Beginner Plan: Day 1<br>Light Cardio - 30 minutes of walking or easy jogging.",
            "Day 2 (Beginner)": "Beginner Plan: Day 2<br>Bodyweight Exercises - 20 minutes of exercises like squats, push-ups, and lunges.",
            "Day 3 (Beginner)": "Beginner Plan: Day 3<br>Rest day.",
            "Day 4 (Beginner)": "Beginner Plan: Day 4<br>Light Cardio - 30 minutes of walking or easy jogging.",
            "Day 5 (Beginner)": "Beginner Plan: Day 5<br>Flexibility Training - 20 minutes of stretching or yoga.",
            "Day 6 (Beginner)": "Beginner Plan: Day 6<br>Bodyweight Exercises - 20 minutes of exercises like squats, push-ups, and lunges.",
            "Day 7 (Beginner)": "Beginner Plan: Day 7<br>Rest day.",
            // Intermediate Plan
            "Day 1 (Intermediate)": "Intermediate Plan: Day 1<br>Moderate Cardio - 45 minutes of running or cycling.",
            "Day 2 (Intermediate)": "Intermediate Plan: Day 2<br>Weightlifting - 45 minutes focusing on major muscle groups.",
            "Day 3 (Intermediate)": "Intermediate Plan: Day 3<br>Core Training - 30 minutes of exercises like planks and sit-ups.",
            "Day 4 (Intermediate)": "Intermediate Plan: Day 4<br>Moderate Cardio - 45 minutes of running or cycling.",
            "Day 5 (Intermediate)": "Intermediate Plan: Day 5<br>Weightlifting - 45 minutes focusing on major muscle groups.",
            "Day 6 (Intermediate)": "Intermediate Plan: Day 6<br>Flexibility Training - 30 minutes of stretching or yoga.",
            "Day 7 (Intermediate)": "Intermediate Plan: Day 7<br>Rest day.",
            // Advanced Plan
            "Day 1 (Advanced)": "Advanced Plan: Day 1<br>HIIT - 30 minutes of high-intensity interval training.",
            "Day 2 (Advanced)": "Advanced Plan: Day 2<br>Heavy Weightlifting - 60 minutes focusing on major muscle groups.",
            "Day 3 (Advanced)": "Advanced Plan: Day 3<br>Advanced Cardio - 60 minutes of intense running or cycling.",
            "Day 4 (Advanced)": "Advanced Plan: Day 4<br>HIIT - 30 minutes of high-intensity interval training.",
            "Day 5 (Advanced)": "Advanced Plan: Day 5<br>Heavy Weightlifting - 60 minutes focusing on major muscle groups.",
            "Day 6 (Advanced)": "Advanced Plan: Day 6<br>Advanced Flexibility - 45 minutes of stretching or advanced yoga.",
            "Day 7 (Advanced)": "Advanced Plan: Day 7<br>Rest day.",
            // Nutrition Plan
            "Nutrition Week 1": "Nutrition Advice: Week 1<br>Focus on whole foods, balanced diet, plenty of hydration.",
            "Nutrition Week 2": "Nutrition Advice: Week 2<br>Include more proteins and healthy fats in your diet.",
            "Nutrition Week 3": "Nutrition Advice: Week 3<br>Monitor your calorie intake to match your activity level.",
            "Nutrition Week 4": "Nutrition Advice: Week 4<br>Incorporate more fruits and vegetables.",
            "Nutrition Week 5": "Nutrition Advice: Week 5<br>Reduce processed sugars and unhealthy snacks.",
            "Nutrition Week 6": "Nutrition Advice: Week 6<br>Maintain a balanced diet with a variety of nutrients.",
            // Rest and Recovery Plan
            "Rest Week 1": "Rest and Recovery: Week 1<br>Importance of sleep and rest days.",
            "Rest Week 2": "Rest and Recovery: Week 2<br>Incorporate active recovery like light walking or yoga.",
            "Rest Week 3": "Rest and Recovery: Week 3<br>Listen to your body and avoid overtraining.",
            "Rest Week 4": "Rest and Recovery: Week 4<br>Regular massage or foam rolling for muscle recovery.",
            "Rest Week 5": "Rest and Recovery: Week 5<br>Hydration and nutrition play a key role in recovery.",
            "Rest Week 6": "Rest and Recovery: Week 6<br>Balancing training intensity and rest.",
            // Strength Training Plan
            "Strength Week 1": "Strength Training: Week 1<br>Full body workout with bodyweight exercises.",
            "Strength Week 2": "Strength Training: Week 2<br>Introduction to weightlifting, focusing on form.",
            "Strength Week 3": "Strength Training: Week 3<br>Increase intensity and weight.",
            "Strength Week 4": "Strength Training: Week 4<br>Split workouts focusing on different muscle groups.",
            "Strength Week 5": "Strength Training: Week 5<br>Higher reps and lighter weights for endurance.",
            "Strength Week 6": "Strength Training: Week 6<br>Lower reps and heavier weights for strength.",
            // Specialized Running Plans
            "Running Week 1": "Specialized Running: Week 1<br>8 x 400 meters with 3 minutes jog between runs.",
            "Running Week 2": "Specialized Running: Week 2<br>8 x 400 meters with 2:45 jog between runs.",
            "Running Week 3": "Specialized Running: Week 3<br>8 x 400 meters with 2:30 jog between runs.",
            "Running Week 4": "Specialized Running: Week 4<br>8 x 400 meters with 2:15 jog between runs.",
            "Running Week 5": "Specialized Running: Week 5<br>8 x 400 meters with 2:00 jog between runs.",
            "Running Week 6": "Specialized Running: Week 6<br>8 x 400 meters with 1:45 jog between runs.",
            // Additional Running Plans
            "Endurance Week 1": "Increase Endurance for 10K to Half-Marathon: Week 1<br>Run out for 40 minutes and run back in 38 minutes. Run at a slow pace for 40 minutes out, turn around and run back in progressively less time.",
            "Endurance Week 2": "Increase Endurance for 10K to Half-Marathon: Week 2<br>Run out for 40 minutes and run back in 36 minutes.",
            "Endurance Week 3": "Increase Endurance for 10K to Half-Marathon: Week 3<br>Run out for 40 minutes and run back in 34 minutes.",
            "Endurance Week 4": "Increase Endurance for 10K to Half-Marathon: Week 4<br>Run out for 40 minutes and run back in 33 minutes.",
            "Endurance Week 5": "Increase Endurance for 10K to Half-Marathon: Week 5<br>Run out for 40 minutes and run back in 32 minutes.",
            "Endurance Week 6": "Increase Endurance for 10K to Half-Marathon: Week 6<br>Run out for 40 minutes and run back in 31:30 minutes.",
            "Long Run Week 1": "Increase Long Run Time: Week 1<br>Run/Walk for 7/3 minutes for a total of 1 hour. Run at a comfortable pace for 7 minutes then walk for 3 minutes for progressive durations.",
            "Long Run Week 2": "Increase Long Run Time: Week 2<br>Run/Walk for 7/3 minutes for a total of 1 hour 20 minutes.",
            "Long Run Week 3": "Increase Long Run Time: Week 3<br>Run/Walk for 7/3 minutes for a total of 1 hour 40 minutes.",
            "Long Run Week 4": "Increase Long Run Time: Week 4<br>Run/Walk for 7/3 minutes for a total of 2 hours.",
            "Long Run Week 5": "Increase Long Run Time: Week 5<br>Run/Walk for 7/3 minutes for a total of 2 hours 20 minutes.",
            "Long Run Week 6": "Increase Long Run Time: Week 6<br>Run/Walk for 7/3 minutes for a total of 2 hours 40 minutes.",
            "Marathon Week 1": "Increase Marathon Pace: Week 1<br>Run for 1:20 hours. No 5-minute pickups. Run longer durations with progressively more 5-minute pickups at target marathon pace.",
            "Marathon Week 2": "Increase Marathon Pace: Week 2<br>Run for 1:30 hours with 1 5-minute pickup.",
            "Marathon Week 3": "Increase Marathon Pace: Week 3<br>Run for 1:40 hours with 2 5-minute pickups.",
            "Marathon Week 4": "Increase Marathon Pace: Week 4<br>Run for 1:50 hours with 3 5-minute pickups.",
            "Marathon Week 5": "Increase Marathon Pace: Week 5<br>Run for 2:00 hours with 4 5-minute pickups.",
            "Marathon Week 6": "Increase Marathon Pace: Week 6<br>Run for 2:10 hours with 5 5-minute pickups.",
            "Speed Week 1": "Increase Speed for 5-10K: Week 1<br>40 minute run with 10/20/30 second pickups. 40-minute run with increasing number of 30-second pickups (fast runs but not all-out sprints).",
            "Speed Week 2": "Increase Speed for 5-10K: Week 2<br>40 minute run with 8/16/24/32 second pickups.",
            "Speed Week 3": "Increase Speed for 5-10K: Week 3<br>40 minute run with 6/12/18/24/30/36 second pickups.",
            "Speed Week 4": "Increase Speed for 5-10K: Week 4<br>40 minute run with 5/10/15/20/25/30/35 second pickups.",
            "Speed Week 5": "Increase Speed for 5-10K: Week 5<br>40 minute run with 4/8/12/16/20/24/28/32/36 second pickups.",
            "Speed Week 6": "Increase Speed for 5-10K: Week 6<br>40 minute run with 3/6/9/12/15/18/21/24/27/30/33/36 second pickups.",
            "Power Week 1": "Increase Running Power: Week 1<br>3 Hill Runs. Warm up for 10 minutes. Run up a 50 to 100-meter hill at a fast pace then jog back down and repeat. Cool down for 10 minutes.",
            "Power Week 2": "Increase Running Power: Week 2<br>4 Hill Runs.",
            "Power Week 3": "Increase Running Power: Week 3<br>5 Hill Runs.",
            "Power Week 4": "Increase Running Power: Week 4<br>6 Hill Runs.",
            "Power Week 5": "Increase Running Power: Week 5<br>7 Hill Runs.",
            "Power Week 6": "Increase Running Power: Week 6<br>8 Hill Runs.",
            "Mile to 5K Week 1": "Improve Speed for 1 Mile to 5K: Week 1<br>7 Fast/Slow 200 meters. Warm up for 10 minutes at track. Run alternating fast with slow 200 meters runs. Cool down for 10 minutes.",
            "Mile to 5K Week 2": "Improve Speed for 1 Mile to 5K: Week 2<br>8 Fast/Slow 200 meters.",
            "Mile to 5K Week 3": "Improve Speed for 1 Mile to 5K: Week 3<br>9 Fast/Slow 200 meters.",
            "Mile to 5K Week 4": "Improve Speed for 1 Mile to 5K: Week 4<br>10 Fast/Slow 200 meters.",
            "Mile to 5K Week 5": "Improve Speed for 1 Mile to 5K: Week 5<br>11 Fast/Slow 200 meters.",
            "Mile to 5K Week 6": "Improve Speed for 1 Mile to 5K: Week 6<br>12 Fast/Slow 200 meters."
        };

        return details[day] || 'No details found for this day.';
    }

    // Typing animation initialization for hero text
    const heroText = document.querySelector('.typing-animation');
    if (heroText) {
        heroText.classList.add('typing-animation-visible');
    }
});