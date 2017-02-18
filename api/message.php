<?php

$db = mysqli_connect('localhost', 'root','' , 'krokben');

$name = mysqli_real_escape_string($db, $_POST['name']);
$email = mysqli_real_escape_string($db, $_POST['email']);
$message = mysqli_real_escape_string($db, $_POST['message']);

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
	mail("svensson.tommy@student.kyh.se", "Mail till krokben.se från " . $name . " " . $email, $message);
	echo "thank you!";
}