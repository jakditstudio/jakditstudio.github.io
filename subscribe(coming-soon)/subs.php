<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudfare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.jcss" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- icon for navbar -->
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    <!-- CSS -->
    <link rel="stylesheet" href="/subscribe/subs.css" />
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/img/favicon-02.jpg" />
    <title>Subscribe | Jakdit Studio</title>
</head>
<!-- TUTOR YT CodingNepal & CODE WITH YOUSAF  -->

<body>
    <input type="checkbox" id="toggle" />
    <label for="toggle" class="show-btn">Show Modal</label>
    <div class="wrapper">
        <label for="toggle" class="cancel-btn"><i class="fas fa-times"></i></label>
        <div class="icon"><i class="far fa-envelope"></i></div>
        <div class="content">
            <header>Become a Subscriber</header>
            <p>
                Subscribe our blog and get the latest updates straight to your email.
            </p>
        </div>
        <form action="subs.php" method="POST">
            <?php
      if (isset($_POST['subscribe'])) { //if subscribe button is clicked
        $userEmail = $_POST['email']; //getting user email
        if (filter_var($userEmail, FILTER_VALIDATE_EMAIL)) { //validating user entered email
          echo "Email is correct";
        } else {
          echo "Invalid Email";
        }
      }
      ?>
            <div class="field">
                <input type="text" name="email" placeholder="Email Address" required />
            </div>
            <div class="field btn">
                <input type="submit" name="subscribe" value="Subscribe" />
            </div>
        </form>
        <div class="text">We don't share your information.</div>
    </div>
</body>

</html>