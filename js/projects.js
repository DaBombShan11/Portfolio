const projects = {
    academic: [
        {
            title_card: "Medical Database",
            title: "Golden Prime Care",
            description: `
            The Elderly Assistance App, developed from March to May 2024 for a Software and OS Security course, addresses the critical need for secure, real-time assistance for elderly individuals. The app features a user-friendly interface that allows users to request help at the touch of a button, with alerts sent to designated staff members. Administrators have access to a comprehensive dashboard for monitoring help requests and managing user profiles, with access control policies ensuring sensitive data is protected and operational commands are segregated. 
            
            Security was a top priority, with the app incorporating rigorous IEEE security requirements. It employs robust Google authentication for user verification, and access rights are carefully managed based on user roles. The backend, built with MySQL and phpMyAdmin, ensures data integrity and protection, while the frontend uses HTML and CSS to deliver a seamless user experience. The project received an A grade upon presentation in May 2024, demonstrating a successful integration of security best practices and practical design considerations.
        `,
            techStack: "phpMyAdmin, MySQL, HTML, CSS, JavaScript",
            screenshots: ["images/projects/med_data.jpeg", "images/projects/med_data.jpeg"],
            link: "https://github.com/DaBombShan11/COSC-402---Team-4",
            challenges: `One of the main challenges faced during the development of the Elderly Assistance App was the complexity of backend integration, particularly since I had no prior experience creating servers. To manage this, I relied on phpMyAdmin to simplify database management and streamline the backend process. Additionally, my teammates encountered difficulties with the frontend, which required me to bridge the gap between the backend and frontend to ensure smooth connectivity. Adhering to cybersecurity protocols added another layer of complexity, as it necessitated careful consideration in both the design of the database and the overall application to ensure robust security.
            `
        }
    ],
    personal: [
        {
            title_card: "Stock/Crypto Analysis",
            title: "Stock Alert!",
            description: "Description of Personal Project 1",
            techStack: "HTML, CSS, JavaScript",
            screenshots: ["screenshot2.jpg"],
            link: "https://github.com/username/project2",
            challenges: "Challenges faced during Personal Project 1"
        },
        {
            title_card: "Book Club App",
            title: "Read With Me",
            description: "Description of Personal Project 2",
            techStack: "HTML, CSS, JavaScript",
            screenshots: ["screenshot3.jpg"],
            link: "https://github.com/username/project3",
            challenges: "Challenges faced during Personal Project 2"
        }
    ],
    competitions: [
        {
            title_card: "No Code Mobile App",
            title: "Bulldog Grub",
            description: `Bulldog Grub is a mobile application designed to streamline the food ordering process for students and staff on campus. Developed using the no-code platform Adalo, the app allows users to browse menus, place orders, and schedule pickups from various on-campus restaurants. With real-time menu updates, order customization options, scheduled pickups, and secure payment methods, Bulldog Grub offers a user-friendly interface that enhances the dining experience. Notifications keep users informed when their order is being prepared and ready for pickup, ensuring a convenient and efficient process.

            Created by a team of five dedicated students for a competition hosted by Verizon at our university, Bulldog Grub was developed from December 2022 to April 2023. The competition challenged participants to create a functional and impactful mobile app. Our team presented Bulldog Grub in April 2023 and was awarded first place out of ten competing teams, recognizing our innovative solution and its potential positive impact on campus life. This accomplishment showcases the power of collaboration, creativity, and technology in solving everyday problems, and we look forward to the continued success and growth of Bulldog Grub.`,
            techStack: "Adalo",
            screenshots: ["images/projects/bulldog_logo.png", "images/projects/bulldog_group.jpeg"],
            link: "https://studentsbowiestate-my.sharepoint.com/:p:/g/personal/bishopa1111_students_bowiestate_edu/EV77iNJzKa5Hl89gVF9-F4cBumypXt5zU7HVixGjRKC4xw?e=qAAI9s",
            challenges: `Initially, I was part of a different team, but we encountered significant difficulties that halted our progress. Fortunately, I was able to join my friends' team, which already had a clear idea and template for their project. Despite struggling initially to find my place and contribute ideas effectively, I eventually took on the role of team lead. In this capacity, I handled most of the manual input for food listings and configured several key functionalities for the app, which allowed us to move forward successfully.`
        },
        {
            title_card: "MorganHacks",
            title: "GluScope",
            description: "In April 2024, as part of the Morgan Hacks hackathon, I collaborated with three teammates to develop GluScope, an innovative app designed to assist school nurses, parents, and diabetic students in grades K-12 in monitoring blood sugar levels. Our solution included a smartwatch called GluScope, which is worn by the student to provide real-time data and notifications about their blood sugar levels. The app categorizes alerts based on severity, ensuring that school nurses and parents receive timely and appropriate notifications to manage the student's health effectively. This project aimed to create a comprehensive and user-friendly tool to improve the daily management of diabetes in school settings, enhancing the safety and well-being of diabetic students.",
            techStack: "HTML, CSS, JavaScript, Python",
            screenshots: ["images/projects/gluscope_logo.png", "images/projects/gluscope_group.jpg"],
            link: "https://github.com/DaBombShan11/MorganHacks24",
            challenges: "During the Morgan Hacks hackathon, we faced significant challenges due to the limited time available to implement our project. Much of our initial time was spent brainstorming and refining the idea for GluScope, which left us with only about six hours to execute the actual coding. Despite the time constraints, we worked diligently and managed to complete 95% of the project. We developed a nearly functional website capable of monitoring blood sugar levels using simulated data from a sensor device, demonstrating our ability to rapidly prototype and approach a viable solution under intense pressure."
        },
        {
            title_card: "NASA MITTIC Competition",
            title: "Tiny Track",
            description: "Description of Competition Project 3",
            techStack: "HTML, CSS, JavaScript",
            screenshots: ["screenshot6.jpg"],
            link: ["https://github.com/username/project6", "https://github.com/username/project6"] ,
            challenges: "Challenges faced during Competition Project 3"
        }
    ]
};

function toggleDropdown(category) {
    const dropdown = document.getElementById(`${category}-dropdown`);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    // Load project links into the dropdown menu
    dropdown.innerHTML = projects[category].map((project, index) => `
        <li><a href="#" onclick="showProjectDetails('${category}', ${index}); return false;">${project.title_card}</a></li>
    `).join('');
}

function showProjectDetails(category, index) {
    const project = projects[category][index];
    document.querySelector('.project-details h2').innerText = project.title;
    document.querySelector('.project-details .description').innerText = project.description.trim();
    document.querySelector('.project-details .tech-stack').innerText = project.techStack;
    document.querySelector('.project-details .screenshots').innerHTML = project.screenshots.map(src => `<img src="${src}" alt="${project.title}">`).join('');
    document.querySelector('.project-details .link-to-code').href = project.link;
    document.querySelector('.project-details .challenges').innerText = project.challenges.trim();
    updateCarousel(projects[category]);
}

function updateCarousel(projects) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = projects.map(project => `
        <div class="title-card">
            <img src="${project.screenshots[0]}" alt="${project.title}">
            <h3>${project.title_card}</h3>
        </div>
    `).join('');
    let offset = 0;
    const cardWidth = document.querySelector('.title-card').offsetWidth;

    function scrollCarousel() {
        offset -= 1; // Adjust speed by changing the offset value
        if (Math.abs(offset) >= cardWidth) {
            offset = 0;
        }
        carouselInner.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(scrollCarousel);
    }
    scrollCarousel();
}

// Initialize with the first category
document.addEventListener('DOMContentLoaded', () => showProjectDetails('academic', 0));
