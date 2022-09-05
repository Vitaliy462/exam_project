<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// переменные из нашей формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$place = $_POST['user_place'];
$date = $_POST['user_date'];

// настройка почтового ящика
$mail->isSMTP();                                // Настраиваем почту для SMTP
$mail->Host = 'smtp.ukr.net';  															// Основкой SMTP сервер
$mail->SMTPAuth = true;                         // Включить аутентификацию SMTP
//$mail->Username = 'itstepchild99@ukr.net';
$mail->Username = 'lemeshvitaliy@ukr.net';     // логин от почты с которой будут отправляться письма
//$mail->Password = 'oQoTa6f2tJRk4HN4'; 
$mail->Password = 'vs6bPJPBSiCTbZCS';            // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                      // Включить шифрование ssl
$mail->Port = 465;                                 // TCP порт для подключения / этот порт может отличаться у других провайдеров

$mail->setFrom('lemeshvitaliy@ukr.net');      // от кого будет уходить письмо для пользователя
//$mail->addAddress('lizanesen1999@gmail.com');                          // Кому будет приходить заявка
$mail->addAddress('lemeshvitaliy@gmail.com');                          // Кому будет приходить заявка
//$mail->addAddress('ellen@example.com');               // Имя не обязательно
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->isHTML(true);                                  // Установить формат электронной почты в HTML

$mail->Subject = 'Заявка с тестового сайта mysite.com';
$mail->Body    = '' . $name . ' оставил заявку, его телефон: ' . $phone . '<br> Место съемки:' . $place .'<br> Дата:' . $date;
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>
