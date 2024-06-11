document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (anchors) {
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Intersection Observer for animations
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
    if (sections) {
        sections.forEach(section => observer.observe(section));
    }

    // Modal for plans and guides
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-plan-title');
    const modalDetails = document.getElementById('modal-plan-details');

    const dayBoxes = document.querySelectorAll('.day-box');
    if (dayBoxes) {
        dayBoxes.forEach(box => {
            box.addEventListener('click', () => {
                const planDetails = getPlanDetails(box.textContent);
                if (modal && modalTitle && modalDetails) {
                    modalTitle.textContent = box.textContent;
                    modalDetails.innerHTML = planDetails;
                    modal.style.display = 'flex';
                }
            });
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }

    window.addEventListener('click', (e) => {
        if (modal && e.target === modal) {
            modal.style.display = 'none';
        }
    });

    function getPlanDetails(day) {
        const details = {
            "Day 1": "Day 1: Light Cardio - 30 minutes of light cardio exercises including walking, jogging, or cycling.",
            "Day 2": "Day 2: Bodyweight Exercises - 30 minutes of bodyweight exercises including push-ups, squats, and lunges.",
            "Day 3": "Day 3: Rest - Take a rest day to allow your muscles to recover.",
            "Day 4": "Day 4: Light Cardio - 30 minutes of light cardio exercises including walking, jogging, or cycling.",
            "Day 5": "Day 5: Flexibility Training - 30 minutes of flexibility exercises including stretching and yoga.",
            "Day 6": "Day 6: Bodyweight Exercises - 30 minutes of bodyweight exercises including push-ups, squats, and lunges.",
            "Day 7": "Day 7: Rest - Take a rest day to allow your muscles to recover.",
            "Day 1": "Day 1: Moderate Cardio - 45 minutes of moderate cardio exercises including running, swimming, or rowing.",
            "Day 2": "Day 2: Weightlifting - 45 minutes of weightlifting exercises targeting major muscle groups.",
            "Day 3": "Day 3: Core Training - 30 minutes of core training exercises including planks and sit-ups.",
            "Day 4": "Day 4: Moderate Cardio - 45 minutes of moderate cardio exercises including running, swimming, or rowing.",
            "Day 5": "Day 5: Weightlifting - 45 minutes of weightlifting exercises targeting major muscle groups.",
            "Day 6": "Day 6: Flexibility Training - 45 minutes of flexibility exercises including stretching and yoga.",
            "Day 7": "Day 7: Rest - Take a rest day to allow your muscles to recover.",
            "Day 1": "Day 1: HIIT - 30 minutes of high-intensity interval training.",
            "Day 2": "Day 2: Heavy Weightlifting - 60 minutes of heavy weightlifting exercises targeting major muscle groups.",
            "Day 3": "Day 3: Advanced Cardio - 60 minutes of advanced cardio exercises.",
            "Day 4": "Day 4: HIIT - 30 minutes of high-intensity interval training.",
            "Day 5": "Day 5: Heavy Weightlifting - 60 minutes of heavy weightlifting exercises targeting major muscle groups.",
            "Day 6": "Day 6: Advanced Flexibility - 60 minutes of advanced flexibility exercises including advanced yoga poses.",
            "Day 7": "Day 7: Rest - Take a rest day to allow your muscles to recover."
        };
        return details[day];
    }
});
