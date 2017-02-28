<?php

require_once('db.php');

$data = $_POST['data'];
$obj=json_decode($data);

$name = mysqli_real_escape_string($db, $obj->name);
$email = mysqli_real_escape_string($db, $obj->email);
$message = mysqli_real_escape_string($db, $obj->message);

if($data) {
	mail("svensson.tommy@student.kyh.se", "Mail till krokben.se från " . $name, $message . " (Sent from $email)");
	echo "thank you!";
}