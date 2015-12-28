  // dynamically make carousel idicators on NPS homepage
  var myCarousel = $(".carousel");
  myCarousel.append("<ol class='carousel-indicators'></ol>");
  var indicators = $(".carousel-indicators");
  myCarousel.find(".carousel-inner").children(".item").each(function(index) {
    (index === 0) ?
    indicators.append("<li data-target='#feature_carousel' data-slide-to='"+index+"' class='active'></li>") :
    indicators.append("<li data-target='#feature_carousel' data-slide-to='"+index+"'></li>");
  });