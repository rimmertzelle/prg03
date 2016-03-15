<?php
$returnData = [];

//Setup specific metadata for front-end
$returnData['meta'] = [
    "request_uri" => $_SERVER['REQUEST_URI'],
    "message" => 'Request is done well'
];

//Data (to be decided later)
$returnData['data'] = [];

//Set the header so the client will know what to expect.
header("Content-Type: application/json");

//Echo JSON for client & exit script
echo json_encode($returnData);
exit;
