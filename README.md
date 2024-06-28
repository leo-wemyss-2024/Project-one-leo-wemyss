# Fitness with Wemyss Workouts

## Project Overview

Welcome to the Fitness with Wemyss Workouts website! This project is dedicated to providing users with a comprehensive fitness experience, including information about fitness classes, workout plans, contact details, and more. The site is designed with accessibility and responsiveness in mind to ensure a smooth user experience across various devices.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Responsive Design:** The site is fully responsive and optimized for various screen sizes.
- **Interactive Calculators:** Includes body fat percentage calculator, waist-to-hip ratio calculator, protein requirement calculator, water intake calculator, and heart rate zone calculator.
- **Dynamic Content:** FAQs, workout plans, and class schedules are dynamically loaded.
- **Interactive Maps:** Integration with OpenStreetMap to show location.
- **Accessibility:** Ensures accessibility for all users, including those with disabilities.
- **Social Media Integration:** Links to social media profiles for broader reach.

## Technologies Used

- **HTML5 & CSS3:** For structuring and styling the web pages.
- **JavaScript & jQuery:** For adding interactivity and dynamic content.
- **Chart.js:** For creating interactive charts in the calculators.
- **Font Awesome:** For icons.
- **Google Fonts:** For custom fonts.
- **OpenStreetMap & Leaflet.js:** For interactive maps.
- **LocalStorage:** For storing user preferences (e.g., disclaimer acceptance).

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repo:**
   ```sh
   git clone https://github.com/leo-wemyss-2024/Project-one.git
Navigate to the project directory:

sh
Copy code
cd Project-one
Open index.html in your preferred web browser:

sh
Copy code
open index.html
Usage
Home Page: Provides an overview of the services offered and a welcoming hero section.
Classes Page: Lists the various fitness classes available, along with descriptions and images.
Workout Plans Page: Details different workout plans tailored for beginners, intermediate, and advanced users.
Contact Page: Provides contact information and a form for users to get in touch.
About Page: Shares information about the founder and the mission of the fitness program.
Screenshots
Home Page

Classes Page

Workout Plans Page

Contact Page

Calculators

File Structure
plaintext
Copy code
fitness-with-wemyss-workouts/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── (image files)
│   └── videos/
│       └── (video files)
├── index.html
├── about.html
├── classes.html
├── contact.html
├── README:md
└── workout.html
Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch: (git checkout -b feature/AmazingFeature)
Commit your Changes: (git commit -m 'Add some AmazingFeature')
Push to the Branch: (git push origin feature/AmazingFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.

Acknowledgements
Font Awesome: Font Awesome
Google Fonts: Google Fonts
Chart.js: Chart.js
Leaflet.js: Leaflet.js
OpenStreetMap: OpenStreetMap
Thank you for using the Fitness with Wemyss Workouts website! For any inquiries, please contact Leo Wemyss at leo@example.com.

Instructions for Adding Screenshots
Take Screenshots: Capture screenshots of different pages and features of your website.
Save Screenshots: Save the screenshots in the assets/images/screenshots/ directory.
Update Paths: Ensure the image paths in the README.md file correctly point to the saved screenshots.
HTML Corrections
Ensure proper HTML structure with matching opening and closing tags.
Add the missing main closing tag.
Correct the meta image URLs for social sharing.
Verify that all external resource links are correct and accessible.
JavaScript Corrections
Disclaimer Functionality: Ensure the disclaimer is correctly shown/hidden based on localStorage.
Calculators: Fix the logic for calculating body fat percentage and other metrics. Ensure charts are rendered correctly using Chart.js.
Modal and Interaction Functionality: Correct any modal logic to ensure a smooth user experience. Verify event listeners for dynamic content loading.
