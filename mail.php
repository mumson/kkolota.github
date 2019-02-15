<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'tazzziom123@gmail.com';
$email_subject = 'Zgłoszenie z formularza kontaktowego';
$email_body = "User Name: $name. \n".
                "User Email: $email. \n".
                "User Message: $message. \n";

$to = "konradkolota@gmail.com";

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html")
?>