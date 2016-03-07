<?php
require_once("settings.php");
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);

if ($mysqli->connect_errno) {
    printf("DB connect failed: %s\n", $mysqli->connect_error);
    exit;
}

//Retrieve all players
$query	= '';

if (isset($_GET['club'])) {

}

$res	= $mysqli->query($query);
$players= array();

while ($player = $res->fetch_array(MYSQLI_ASSOC)) {
	$players[]	= $player;
}

header('Content-type: application/json');
echo json_encode($players);
