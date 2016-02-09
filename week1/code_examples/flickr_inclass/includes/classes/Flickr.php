<?php

/**
 * @class       Flickr
 * @version     1.0
 * @author      http://www.web-development-blog.com/archives/flickr-photo-search-api/
 * @description Class to connect with Flickr & retrieve data
 */
class Flickr
{
    private $endpoint = 'https://api.flickr.com/services/rest/?';
    private $apiKey;
    private $apiSecret;

    /**
     * Initialize object with desired client settings
     *
     * @param $apiKey
     * @param $apiSecret
     */
    public function __construct($apiKey, $apiSecret)
    {
        $this->apiKey = $apiKey;
        $this->apiSecret = $apiSecret;
    }

    /**
     * Setting up a request for flickr
     *
     * @param $keyword
     * @param $userId
     * @param $perPage
     * @param $format
     * @return mixed|null
     */
    public function search($keyword = null, $userId = null, $perPage = 50, $format = 'php_serial')
    {
        $params = [
            'method' => 'flickr.photos.search',
            'api_key' => $this->apiKey,
            'text' => urlencode($keyword),
            'user_id' => $userId,
            'per_page' => $perPage,
            'format' => $format
        ];

        $url = $this->endpoint . http_build_query($params);
        $result = $this->curlRequest($url);
        return $result;
    }

    /**
     * Getting the data from the flickr api
     *
     * @param $url
     * @return mixed|null
     */
    private function curlRequest($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

        $data = curl_exec($ch);
        $returnCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return $returnCode == 200 ? unserialize($data) : null;
    }
}
