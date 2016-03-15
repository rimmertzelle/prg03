<?php
require_once('includes/settings.php');
require_once('includes/classes/Flickr.php');

//Create instance of class to use for communicating with Flickr webservice
$flickr = new Flickr(FLICKR_KEY, FLICKR_SECRET);

//First step to define the returnData to the client
$returnData = [];

//Set the header so the client will know what to expect.
header("Content-Type: application/json");

//Check to see if the server connects properly
try {
    $connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
} catch (Exception $e) {
    //Output JSON to the outside world with 501 error
    header("HTTP/1.1 500 Internal Server Error");
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit;
}

//Check to see if id from image is set
$id = isset($_GET['id']) ? $connection->real_escape_string($_GET['id']) : false;

//Build query depending on parameter state
$query = "SELECT id, name, recipe FROM dishes";
if ($id != false) {
    $query .= " WHERE id='$id'";
}

//Execute query & fetch result
$result = $connection->query($query);

//Meta information about the returnData
$returnData['meta'] = [
    "request_uri" => $_SERVER['REQUEST_URI'],
    "query" => $query,
    "row_count" => $result->num_rows
];

//Merge the data from the database with the images from flickr into the newly created returnData
while ($row = $result->fetch_assoc()) {
    $returnData['dishes'][] = [
        "id" => $row['id'],
        "name" => $row['name'],
        "recipe" => $row['recipe'],
        "images" => $flickr->getImageUrls($row['name'])
    ];
}

//Free the results and the connection
$result->close();
$connection->close();

//Output JSON to the outside world
echo json_encode($returnData);
exit;
