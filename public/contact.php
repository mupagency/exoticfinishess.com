<?php
  // Import PHPMailer classes into the global namespace
  // These must be at the top of your script, not inside a function
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  // Load Composer's autoloader
  require "vendor/autoload.php";

  header('Content-Type: application/json');
  // set Access-Control-Allow-Origin to allow cross-origin requests
  header('Access-Control-Allow-Origin: *');

  // Instantiation and passing `true` enables exceptions
  $mail = new PHPMailer(true);

  $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
  $dotenv->load();

  $from = $_ENV['EMAIL_FROM'];
  $to = $_ENV['EMAIL_TO'];

  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->SMTPAuth    = false;
    $mail->SMTPSecure  = false;
    $mail->SMTPAutoTLS = false;
    $mail->Port        = 25;

    //Recipients
    $mail->setFrom("$from", "Website Visitor");
    // TODO: back to gmail
    $mail->addAddress("$to", "$name");
    // $mail->addReplyTo("$email", "$name");


    // Content
    // $mail->isHTML(true);
    $mail->Subject = "Exotic Finishess $subject";
    $mail->Body    = "$mail - $message";

    $mail->send();
    echo json_encode(Array("success" => true));
  } catch (Exception $e) {
    echo json_encode(Array("error" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"));
  }

  exit;