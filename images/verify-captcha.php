<?php
$token = $_POST['h-captcha-response'];
$secretKey = 'ES_31ce0eab4eef41318a4a335bfb740e16';
$response = file_get_contents("https://hcaptcha.com/siteverify?secret=$secretKey&response=$token");
$responseKeys = json_decode($response, true);

if(intval($responseKeys["success"]) !== 1) {
    echo json_encode(array('success' => false, 'message' => 'Captcha verification failed.'));
} else {
    echo json_encode(array('success' => true, 'message' => 'Captcha verification successful.'));
}
?>