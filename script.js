$(function(){
  //var li = $('li').;
  //console.log(li);
  var carouselList = $('#carousel ul');
  var interval = null;

  interval = setInterval(changeSlides, 3000);

  function changeSlides(){
    carouselList.animate({"marginLeft": -400}, 1500, moveFirstSlide);
  }
  function moveFirstSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }
  function moveLastSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.after(lastItem);
    carouselList.css({marginLeft:0});
  }
  
  carouselList.mouseover(function() {
    clearInterval(interval);
  })
    .mouseout(function() {
      interval = setInterval(changeSlides, 3000);
    });

  $('.leftButton, .rightButton').mouseover(function(){
    $(this).css('font-size', '2em');
  })
  $('.leftButton, .rightButton').mouseout(function(){
    $(this).css('font-size', '1em');
  })
  $('.leftButton').click(function(){
    var li = carouselList.find("li");
    carouselList.css("margin-left", "-400");
    li.first().before(li.last());
    carouselList.animate({"marginLeft": 0}, 1500, function(){

    });
    clearInterval(interval);
  })
  $('.rightButton').click(function(){
    var li = carouselList.find("li");
    carouselList.animate({"marginLeft": -400}, 1500, function(){
    li.last().after(li.first());
    carouselList.css("margin-left", "0");
    });
    clearInterval(interval);
  })
  
});