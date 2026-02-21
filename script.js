function openModal(project) {
    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    const link = document.getElementById("modalLink");

    if (project === "sign") {
        title.innerText = "Sign Language to Text & Speech Output";
        description.innerText =
            "A real-time gesture recognition system that converts sign language into text and speech using Machine Learning. Built using Python, OpenCV, and TensorFlow. The system captures hand gestures through a camera and translates them into spoken output.";
        link.href = "https://github.com/Uzmaafreen02/Sign-Language-to-Text-Speech";
    }

    if (project === "college") {
        title.innerText = "College Event Management System";
        description.innerText =
            "A full-stack Django web application designed to manage college events, registrations, and scheduling. It streamlines event coordination and improves efficiency using Python, Django, HTML, CSS, and SQL.";
        link.href = "https://github.com/Uzmaafreen02/College-Event-Management-System-DBMS";
    }

    if (project === "titanic") {
        title.innerText = "Titanic Survival Prediction";
        description.innerText =
            "A Machine Learning classification model that predicts passenger survival using data preprocessing, feature engineering, and predictive modeling techniques with Scikit-learn and Python.";
        link.href = "https://github.com/Uzmaafreen02/Decision-Tree-On-Titanic";
    }
    
    if (project === "crack") {
    title.innerText = "Automated Crack Analysis using YOLOv8";
    description.innerText =
        "An AI-powered crack detection system developed using Python and YOLOv8. The system detects structural cracks from images and highlights damaged regions.";
    link.href = "https://github.com/Uzmaafreen02/automated-crack-analysis";
    }

    if (project === "tribute") {
        title.innerText = "Tribute Page";
        description.innerText =
            "A responsive tribute webpage built using HTML and CSS focusing on layout structure, typography and mobile responsiveness.";
        link.href = "https://github.com/Uzmaafreen02/Tribute_Page";
    }

    if (project === "login") {
        title.innerText = "Login Authentication System";
        description.innerText =
            "A login authentication system with input validation and secure credential verification built using HTML, CSS and JavaScript.";
        link.href = "https://github.com/Uzmaafreen02/Login_Authentication";
    }

    if (project === "calculator") {
        title.innerText = "JavaScript Calculator";
        description.innerText =
            "An interactive calculator built using JavaScript that performs arithmetic operations with dynamic UI updates.";
        link.href = "https://github.com/Uzmaafreen02/Calculator";
    }
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}