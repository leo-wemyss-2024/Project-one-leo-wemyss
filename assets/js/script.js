document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.intro, .bio, .gallery, .classes-overview, .video-section, .plans, .guides')
        .forEach(section => observer.observe(section));

    // Modal for plans and guides
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-plan-title');
    const modalDetails = document.getElementById('modal-plan-details');

    document.querySelectorAll('.day-box').forEach(box => {
        box.addEventListener('click', () => {
            const planDetails = getPlanDetails(box.textContent);
            modalTitle.textContent = box.textContent;
            modalDetails.innerHTML = planDetails;
            modal.style.display = 'flex';
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    function getPlanDetails(day) {
        const details = {
            "Day 1": `
                <h4>Light Cardio</h4>
                <p>Start your week with a light cardio session to get your heart rate up and prepare your body for the upcoming workouts.</p>
                <ul>
                    <li>5-minute warm-up: brisk walk or light jog</li>
                    <li>20-minute steady-state cardio: cycling, walking, or light jogging</li>
                    <li>5-minute cool-down: slow walk and stretching</li>
                </ul>
            `,
            "Day 2": `
                <h4>Bodyweight Exercises</h4>
                <p>Focus on building strength using your body weight. Perform each exercise for 3 sets of 12-15 reps.</p>
                <ul>
                    <li>Push-ups</li>
                    <li>Bodyweight squats</li>
                    <li>Plank (hold for 30-60 seconds)</li>
                    <li>Burpees</li>
                    <li>Mountain climbers</li>
                </ul>
            `,
            "Day 3": `
                <h4>Rest</h4>
                <p>Take a rest day to allow your muscles to recover. Hydrate well and consider doing some light stretching or yoga.</p>
            `,
            "Day 4": `
                <h4>Light Cardio</h4>
                <p>Another light cardio session to keep your cardiovascular system active without putting too much strain on your muscles.</p>
                <ul>
                    <li>5-minute warm-up: brisk walk or light jog</li>
                    <li>20-minute steady-state cardio: cycling, walking, or light jogging</li>
                    <li>5-minute cool-down: slow walk and stretching</li>
                </ul>
            `,
            "Day 5": `
                <h4>Flexibility Training</h4>
                <p>Enhance your flexibility and reduce muscle tension with these stretching exercises.</p>
                <ul>
                    <li>Hamstring stretch (hold for 30 seconds on each side)</li>
                    <li>Quad stretch (hold for 30 seconds on each side)</li>
                    <li>Shoulder stretch (hold for 30 seconds on each side)</li>
                    <li>Triceps stretch (hold for 30 seconds on each side)</li>
                    <li>Lower back stretch (hold for 30 seconds)</li>
                </ul>
            `,
            "Day 6": `
                <h4>Bodyweight Exercises</h4>
                <p>Repeat the bodyweight exercises from Day 2 to continue building strength.</p>
                <ul>
                    <li>Push-ups</li>
                    <li>Bodyweight squats</li>
                    <li>Plank (hold for 30-60 seconds)</li>
                    <li>Burpees</li>
                    <li>Mountain climbers</li>
                </ul>
            `,
            "Day 7": `
                <h4>Rest</h4>
                <p>Take another rest day to complete your week. Use this time to reflect on your progress and plan for the next week.</p>
            `,
            "Day 1: Moderate Cardio": `
                <h4>Moderate Cardio</h4>
                <p>Kick off the week with a moderate cardio session to boost your endurance and cardiovascular health.</p>
                <ul>
                    <li>5-minute warm-up: brisk walk or light jog</li>
                    <li>30-minute moderate cardio: running, swimming, or cycling</li>
                    <li>5-minute cool-down: slow walk and stretching</li>
                </ul>
            `,
            "Day 2: Weightlifting": `
                <h4>Weightlifting</h4>
                <p>Focus on strength training with weightlifting exercises. Perform 3 sets of 8-10 reps for each exercise.</p>
                <ul>
                    <li>Bench press</li>
                    <li>Deadlift</li>
                    <li>Barbell row</li>
                    <li>Shoulder press</li>
                    <li>Bicep curls</li>
                </ul>
            `,
            "Day 3: Core Training": `
                <h4>Core Training</h4>
                <p>Strengthen your core muscles with these exercises. Perform each exercise for 3 sets of 15 reps.</p>
                <ul>
                    <li>Crunches</li>
                    <li>Russian twists</li>
                    <li>Leg raises</li>
                    <li>Plank (hold for 1 minute)</li>
                    <li>Bicycle crunches</li>
                </ul>
            `,
            "Day 4: Moderate Cardio": `
                <h4>Moderate Cardio</h4>
                <p>Repeat the moderate cardio session to maintain your cardiovascular fitness.</p>
                <ul>
                    <li>5-minute warm-up: brisk walk or light jog</li>
                    <li>30-minute moderate cardio: running, swimming, or cycling</li>
                    <li>5-minute cool-down: slow walk and stretching</li>
                </ul>
            `,
            "Day 5: Weightlifting": `
                <h4>Weightlifting</h4>
                <p>Continue building strength with another weightlifting session.</p>
                <ul>
                    <li>Bench press</li>
                    <li>Deadlift</li>
                    <li>Barbell row</li>
                    <li>Shoulder press</li>
                    <li>Bicep curls</li>
                </ul>
            `,
            "Day 6: Flexibility Training": `
                <h4>Flexibility Training</h4>
                <p>Enhance your flexibility and reduce muscle tension with these stretching exercises.</p>
                <ul>
                    <li>Hamstring stretch (hold for 30 seconds on each side)</li>
                    <li>Quad stretch (hold for 30 seconds on each side)</li>
                    <li>Shoulder stretch (hold for 30 seconds on each side)</li>
                    <li>Triceps stretch (hold for 30 seconds on each side)</li>
                    <li>Lower back stretch (hold for 30 seconds)</li>
                </ul>
            `,
            "Day 7: Rest": `
                <h4>Rest</h4>
                <p>Take a rest day to allow your muscles to recover. Hydrate well and consider doing some light stretching or yoga.</p>
            `,
            "Day 1: HIIT": `
                <h4>HIIT</h4>
                <p>High-Intensity Interval Training to maximize calorie burn and improve cardiovascular fitness.</p>
                <ul>
                    <li>5-minute warm-up: light jog</li>
                    <li>20-minute HIIT: alternate 1 minute of sprinting with 1 minute of walking</li>
                    <li>5-minute cool-down: slow walk and stretching</li>
                </ul>
            `,
            "Day 2: Heavy Weightlifting": `
                <h4>Heavy Weightlifting</h4>
                <p>Advanced strength training with heavy weights. Perform 4 sets of 6-8 reps for each exercise.</p>
                <ul>
                    <li>Squats</li>
                    <li>Deadlift</li>
                    <li>Bench press</li>
                    <li>Shoulder press</li>
                    <li>Pull-ups</li>
                </ul>
            `,
            "Day 3: Advanced Cardio": `
                <h4>Advanced Cardio</h4>
                <p>High-intensity cardio session to improve endurance and cardiovascular health.</p>
                <ul>
                    <li>5-minute warm-up: brisk walk or light jog</li>
                    <li>30-minute advanced cardio: running, rowing, or cycling at a high intensity</li>
                    <li>5-minute cool-down: slow walk and stretching</li>
                </ul>
            `,
            "Day 4: HIIT": `
                <h4>HIIT</h4>
                <p>Repeat the HIIT session for continued cardiovascular and metabolic benefits.</p>
                <ul>
                    <li>5-minute warm-up: light jog</li>
                    <li>20-minute HIIT: alternate 1 minute of sprinting with 1 minute of walking</li>
                    <li>5-minute cool-down: slow walk and stretching</li>
                </ul>
            `,
            "Day 5: Heavy Weightlifting": `
                <h4>Heavy Weightlifting</h4>
                <p>Continue building strength with another heavy weightlifting session.</p>
                <ul>
                    <li>Squats</li>
                    <li>Deadlift</li>
                    <li>Bench press</li>
                    <li>Shoulder press</li>
                    <li>Pull-ups</li>
                </ul>
            `,
            "Day 6: Advanced Flexibility": `
                <h4>Advanced Flexibility</h4>
                <p>Enhance your flexibility and reduce muscle tension with these advanced stretching exercises.</p>
                <ul>
                    <li>Hamstring stretch (hold for 30 seconds on each side)</li>
                    <li>Quad stretch (hold for 30 seconds on each side)</li>
                    <li>Shoulder stretch (hold for 30 seconds on each side)</li>
                    <li>Triceps stretch (hold for 30 seconds on each side)</li>
                    <li>Lower back stretch (hold for 30 seconds)</li>
                </ul>
            `,
            "Day 7: Rest": `
                <h4>Rest</h4>
                <p>Take another rest day to complete your week. Use this time to reflect on your progress and plan for the next week.</p>
            `
        };
        return details[day];
    }
});
