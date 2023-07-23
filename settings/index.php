<!DOCTYPE html>
<?php
$config = include('../config.php');
if (!isset($_COOKIE['token'])) setcookie("token", $config['token'], time() + 604800);
?>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Xorin - Ustawienia</title>
        <link rel="stylesheet" href="../css/style.css" type="text/css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/35b2d55dba.js" crossorigin="anonymous"></script>
    </head>
    <body>
    <nav class="main-header">
            <div class="brand">
                <h1><a href="../">Xorin</a></h1>
                <span id="brand-version">v<?php echo $config['version']; ?></span>
            </div>
            <div class="navigation-button">
                <i class="fa-solid fa-bars menu-button nav-button"></i>
            </div>
        </nav>
        <nav class="menu-header">
            <ul>
                <li>
                    <a href="" id="menu-settings">
                        <i class="fa-solid fa-gear"></i>
                    </a>
                </li>
                <li><a href="../console" id="menu-console">
                    <i class="fa-solid fa-terminal"></i>
                </a></li>
            </ul>
            <div class="navigation-button">
                <i class="fa-solid fa-xmark menu-back-button nav-button"></i>
            </div>
        </nav>
        <section id="settings">
            <div class="status">
                <h3>Sprawdź status połączenia z serwerem:</h3>
                <div class="online-pulse">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    </body>
    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="https://unpkg.com/tippy.js@6"></script>
    <script src="../js/script.js"></script>
</html>