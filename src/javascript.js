
function Quote(callback) 
{
  $.getJSON('quotes.json',function(data) 
  {
    var rN=Math.round(Math.random()*(data.length-1));
    var author=data[rN][0];
    var quote=data[rN][1];
    callback(quote,author);
  });
};
function changeQuote() 
{
  callback=function(quote, author) 
  {
    $("p#quote,cite#author").fadeOut(function() 
    {
      $("p#quote").text(quote).fadeIn(function() 
      {
        $("cite#author").text(author).fadeIn();
      });
    });
  };
  Quote(callback);
};
$(window).load(function() 
{
  changeQuote();
  setInterval(changeQuote,60000);
});