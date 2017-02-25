<?php

$db = mysqli_connect('krokben-219508.mysql.binero.se', '219508_aq20643','crookbone' , '219508-krokben');
// $db = mysqli_connect('localhost', 'root','' , 'krokben');

$name = mysqli_real_escape_string($db, $_POST['name']);
$email = mysqli_real_escape_string($db, $_POST['email']);
$message = mysqli_real_escape_string($db, $_POST['message']);

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
	mail("svensson.tommy@student.kyh.se", "Mail till krokben.se från " . $name, $message . " (Sent from $email)");
	echo "thank you!";
}