$(document).ready(function() {
    $.getJSON('https://cloud.iexapis.com/stable/stock/aapl/stats/latestPrice?', function(jd) {
          $('#stage').html('<p>Name: ' + jd.companyName + '</p>');
          $('#stage').append('<p>beta : ' + jd.beta+ '</p>');
          $('#stage').append('<p>divident: ' + jd.ttmDividendRate+ '</p>');
       });

 });