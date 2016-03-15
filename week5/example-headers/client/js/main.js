var contentTypeRequest = $.ajax({
      headers: {
          Accept : "application/json; charset=utf-8"
      },
     url: "../server/getData.php",
     //contentType: 'application/x-www-form-urlencoded; charset=UTF-8' //default
     contentType: 'application/json' //JSON
});

contentTypeRequest.done(function(data)
{
     console.log(data);
});

contentTypeRequest.fail(function(jqXHR, textStatus)
{
     console.log( "Ajax request failed... (" + textStatus + ' - ' + jqXHR.responseText + ")." );
});
