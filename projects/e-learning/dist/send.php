<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$company = $_POST['company'];
$task = $_POST['task'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();


try {
  //Server settings
  $mail->SMTPDebug = 0;                                       // Enable verbose debug output
  $mail->isSMTP();                                            // Send using SMTP
  $mail->Host       = "smtp.yandex.ru";                         // Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = 'site@digital-lab.ru';               // SMTP username
  $mail->Password   = 'fnqaau73';                         // SMTP password
  $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
  $mail->Port       = 465;                                    // TCP port to connect to

  //Recipients
  $mail->setFrom('site@digital-lab.ru', 'E-learning');
  $mail->addAddress('info@digital-lab.ru');                  // Add a recipient

  // Content
  $mail->CharSet = "UTF-8";
  $mail->isHTML(true);                                        // Set email format to HTML
  
  $mail->Subject = "Проект";
  $mail->Body    = "<b>Имя Клиента:</b>                ${name}<br>
                    <b>Телефон:</b>                    ${tel}<br>
                    <b>Компания:</b>                   ${company}<br>
                    <b>Несколько слов о задаче:</b>    ${task}<br>
                  ";

  if ($mail->send()) {
    echo "OK";
  } else {
    echo "ERROR";
  }
} catch (Exception $e) {
  echo "ERROR";
}
