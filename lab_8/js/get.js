$(document).ready(function() {
    $.getJSON('', function(jd) {
          $('#stage').html('<p>Name: ' + jd.companyName + '</p>');
          $('#stage').append('<p>beta : ' + jd.beta+ '</p>');
          $('#stage').append('<p>divident: ' + jd.ttmDividendRate+ '</p>');
       });

 });