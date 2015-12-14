function getThoseFlakes() {

  var CANVAS_WIDTH = 527;
  var CANVAS_HEIGHT = 320;

  var canvasElement = $("<canvas id='myCanvas' width='" + CANVAS_WIDTH +
                        "' height='" + CANVAS_HEIGHT + "'></canvas>");
  var canvas = canvasElement.get(0).getContext("2d");
  canvasElement.appendTo('#game');

  var FPS = 30;
  setInterval(function() {
    update();
    draw();
  }, 1000/FPS);

  var textX = 50;
  var textY = 50;

  function update() {
    if (keydown.left) {
      player.x -= 5;
    }

    if (keydown.right) {
      player.x += 5;
    }

    player.x = player.x.clamp(0, CANVAS_WIDTH - player.width);

    enemies.forEach(function(enemy) {
      enemy.update();
    });

    enemies = enemies.filter(function(enemy) {
      return enemy.active;
    });

    if(Math.random() < 0.1) {
      enemies.push(Enemy());
    }

    handleCollisions();
  }

  function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if (keydown.left) {
      player.drawLeft();
    }
    else if (keydown.right) {
      player.drawRight();
    } else {
      player.drawLips();
    }
    enemies.forEach(function(enemy) {
      enemy.draw();
    });
  }

  var player = {
    color: "#000",
    x: 220,
    y: 270,
    width: 32,
    height: 32,
    drawLeft: function() {
      this.sprite1.draw(canvas, this.x, this.y);
      // canvas.fillStyle = this.color;
      // canvas.fillRect(this.x, this.y, this.width, this.height);
    },
    drawRight: function() {
      this.sprite2.draw(canvas, this.x, this.y);
    },
    drawLips: function() {
      this.sprite3.draw(canvas, this.x, this.y);
    }
  }

  enemies = [];

  function Enemy(I) {
    I = I || {};

    I.active = true;
    I.age = Math.floor(Math.random() * 128);

    I.color = "#A2B";

    I.x = CANVAS_WIDTH / 4 + Math.random() * CANVAS_WIDTH / 2;
    I.y = 0;
    I.xVelocity = 0
    I.yVelocity = 2;

    I.width = 32;
    I.height = 32;

    I.inBounds = function() {
      return I.x >= 0 && I.x <= CANVAS_WIDTH &&
        I.y >= 0 && I.y <= CANVAS_HEIGHT;
    };

    I.sprite = Sprite("snowflake");

    I.draw = function() {
      this.sprite.draw(canvas, this.x, this.y);
      // canvas.fillStyle = this.color;
      // canvas.fillRect(this.x, this.y, this.width, this.height);
    };

    I.update = function() {
      I.x += I.xVelocity;
      I.y += I.yVelocity;

      I.xVelocity = 3 * Math.sin(I.age * Math.PI / 64);

      I.age++;

      I.active = I.active && I.inBounds();
    };

    I.explode = function() {
      this.active = false;
    };

    return I;
  };

  function collides(a, b) {
    return a.x < b.x + b.width &&
       a.x + a.width > b.x &&
       a.y < b.y + b.height &&
       a.y + a.height > b.y;
  }

  function handleCollisions() {
    // playerBullets.forEach(function(bullet) {
    //   enemies.forEach(function(enemy) {
    //     if (collides(bullet, enemy)) {
    //       enemy.explode();
    //       bullet.active = false;
    //     }
    //   });
    // });

    enemies.forEach(function(enemy) {
      if (collides(enemy, player)) {
        enemy.explode();
        player.explode();
      }
    });
  }

  player.explode = function() {
    console.log("1");
  };

  player.sprite1 = Sprite("tongue1");
  player.sprite2 = Sprite("tongue2");
  player.sprite3 = Sprite("lips9");

}