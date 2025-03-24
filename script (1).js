<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Resume</title>
    <!-- Bootstrap 5 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEJ6b+MzZ2LOFzj5uOZVvhzdbTHpAa5mf32zwZP5K4XYjFi5Njz3dvvx6z3eN" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <style>
        /* Base Styles */
        body {
            font-family: 'Roboto', sans-serif;
            background: #f4f6f9;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin-top: 50px;
        }

        .resume-container {
            display: flex;
            background-color: #fff;
            border-radius: 20px;
            box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.1);
        }

        /* Sidebar Styles */
        .sidebar {
            background-color: #2c3e50;
            width: 300px;
            border-radius: 20px 0 0 20px;
            color: #fff;
            padding: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.3s ease;
        }

        .sidebar:hover {
            background-color: #34495e;
        }

        .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 5px solid #fff;
            object-fit: cover;
            box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
            transition: all 0.4s ease-in-out;
        }

        .profile-img:hover {
            transform: scale(1.1);
        }

        .sidebar h2 {
            font-size: 2.5rem;
            margin-top: 20px;
            color: #ecf0f1;
        }

        .sidebar p {
            font-size: 1rem;
            margin-top: 10px;
            color: #bdc3c7;
        }

        .contact-info i {
            color: #3498db;
            margin-right: 10px;
            transition: all 0.3s ease;
        }

        .contact-info i:hover {
            color: #9b59b6;
            transform: scale(1.2);
        }

        .sidebar .social-icons a {
            margin: 10px;
            font-size: 1.5rem;
            color: #3498db;
            transition: all 0.3s ease;
        }

        .sidebar .social-icons a:hover {
            color: #9b59b6;
            transform: scale(1.3);
        }

        .sidebar .btn-contact, .btn-download {
            background-color: #3498db;
            color: #fff;
            border-radius: 30px;
            padding: 10px 30px;
            font-weight: bold;
            margin-top: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .sidebar .btn-contact:hover {
            background-color: #9b59b6;
            transform: scale(1.05);
        }

        .sidebar .btn-download {
            background-color: #27ae60;
        }

        .sidebar .btn-download:hover {
            background-color: #2ecc71;
            transform: scale(1.05);
        }

        /* Main Content Area */
        .main-content {
            padding: 40px;
            flex-grow: 1;
            border-radius: 0 20px 20px 0;
            background: #ecf0f1;
        }

        .section-title {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            display: inline-block;
        }

        .section-content {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #555;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .resume-container {
                flex-direction: column;
            }

            .sidebar {
                width: 100%;
                border-radius: 20px;
                margin-bottom: 30px;
            }

            .main-content {
                padding: 20px;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="resume-container">
            <!-- Sidebar -->
            <div class="sidebar">
                <img src="https://assets.onecompiler.app/43cqvzde4/43cqwaa9x/1000303029.jpg" alt="Profile Image" class="profile-img">
                <h2>Pradeep Pandian.S</h2>
                <p>Full Stack Developer</p>
                <div class="contact-info">
                    <p><i class="fas fa-map-marker-alt"></i> Pudukkottai, TamilNadu</p>
                    <p><i class="fas fa-envelope"></i> spradeeppandian006@email.com</p>
                    <p><i class="fas fa-phone-alt"></i> +91 9043556920</p>
                </div>
                <div class="social-icons">
                    <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
                <a href="mailto:spradeeppandian006@email.com" class="btn-contact">Contact Me</a>
                <a href="https://assets.onecompiler.app/43cqvzde4/43cqwaa9x/1000315683.jpg" download class="btn-download">Download CV</a>
            </div>

            <!-- Main Content -->
            <div class="main-content">
                <section>
                    <h3 class="section-title">Summary</h3>
                    <p class="section-content">An innovative Full Stack Developer with extensive experience in building high-performance web applications. Passionate about delivering dynamic and responsive web experiences.</p>
                </section>

                <section>
                    <h3 class="section-title">Skills</h3>
                    <ul class="section-content">
                        <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Angular</li>
                        <li><strong>Backend:</strong> Node.js, Express, Python, Django</li>
                        <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
                        <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
</body>

</html>
