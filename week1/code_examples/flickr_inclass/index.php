<?php
require_once('includes/settings.php');
require_once('includes/classes/Flickr.php');

$flickr = new Flickr(FLICKR_KEY, FLICKR_SECRET);
$data = $flickr->search('sun');

