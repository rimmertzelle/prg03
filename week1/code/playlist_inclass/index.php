<?php
//Load file contents in PHP var
$playlist = file_get_contents("playlist.json");
//print_r($playlist);
//exit;

//Decode JSON to PHP object
$playlist_json = json_decode($playlist);

echo "<pre>";
print_r($playlist_json);
echo "</pre>";

//Echo properties directly
echo $playlist_json->author . "<br/>";
echo $playlist_json->nummers[0]->album . "<br/>";

//Loop through list of nummers
foreach ($playlist_json->nummers as $nummer) {
    echo 'Title is ' . $nummer->title . "<br/>";
}
