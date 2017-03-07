$('span').each(function (index, element) {
  if (index % 2){
    $(element).css('color', 'red');
  }
});
$('span:even').css('color', 'blue');

var paragraphs = $('p:even');
paragraphs.each(function(index, element) {

var button = '<button class="btn" data-tmp="' + (index+1) + '">Click me</button>'
$(element).append(button); 

});

$("button").click(function(){
  alert($(this).attr("data-tmp"));
});