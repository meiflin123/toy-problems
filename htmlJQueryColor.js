

 /*Write a function that wraps every word in its own <span> tag.
 Make each word change color once per second to a random color.*/


 $(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  $('p').each(function(index, element) {
    let $el = $(element);
    let words = $el.text().split(' ');
    $el.html('');
    words.forEach(function(word) {
      let newSpan = $('<span>').text(word + ' ');
      $el.append(newSpan)
    })
  })

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  setInterval(function() {
    $('span').each(function(index, elem) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      $(elem).css('color', 'rgb(' + r + ',' + g + ',' + b + ')');
    });

  }, Math.random() * 1000);
});