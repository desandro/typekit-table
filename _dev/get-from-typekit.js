(function() {
  var output = 'styles : ' + $('.font-variations dt').length
    + '!!library : ' + $('.upgrade-notice strong').text()
    + '!!foundry : { name: ' + $('.font-byline a').text()
    + ', slug: ' + $('.font-byline a').attr('href').replace( '/foundries/', '') + ' }'
    + '!!tags: [ ';
  $('.tag-list').eq(2).find('li').each(function(){
    output += $(this).text() + ', '
  });
  output += ']';
  return output;
})();