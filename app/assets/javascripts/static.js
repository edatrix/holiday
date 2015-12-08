$(function () {
  $('.month').hover(function () {
    $(this).find('.hover-text').show();
  }, function () {
    $(this).find('.hover-text').hide();
  });
});

$(function() {
  window.keydown = {};

  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }

  $(document).bind("keydown", function(event) {
    keydown[keyName(event)] = true;
  });

  $(document).bind("keyup", function(event) {
    keydown[keyName(event)] = false;
  });
});

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

(function() {
  function LoaderProxy() {
    return {
      draw: $.noop,
      fill: $.noop,
      frame: $.noop,
      update: $.noop,
      width: null,
      height: null
    };
  }

  function Sprite(image, sourceX, sourceY, width, height) {
    sourceX = sourceX || 0;
    sourceY = sourceY || 0;
    width = width || image.width;
    height = height || image.height;

    return {
      draw: function(canvas, x, y) {
        canvas.drawImage(
          image,
          sourceX,
          sourceY,
          width,
          height,
          x,
          y,
          width,
          height
        );
      },

      fill: function(canvas, x, y, width, height, repeat) {
        repeat = repeat || "repeat";
        var pattern = canvas.createPattern(image, repeat);
        canvas.fillColor(pattern);
        canvas.fillRect(x, y, width, height);
      },

      width: width,
      height: height
    };
  };

  Sprite.load = function(url, loadedCallback) {
    var img = new Image();
    var proxy = LoaderProxy();

    img.onload = function() {
      var tile = Sprite(this);

      $.extend(proxy, tile);

      if(loadedCallback) {
        loadedCallback(proxy);
      }
    };

    img.src = url;

    return proxy;
  };

  var spriteImagePath = "assets";

  window.Sprite = function(name, callback) {
    return Sprite.load(spriteImagePath + name + ".png", callback);
  };
  window.Sprite.EMPTY = LoaderProxy();
  window.Sprite.load = Sprite.load;
}());
