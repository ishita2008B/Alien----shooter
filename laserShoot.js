class laserShoot {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 30;
      this.body = Bodies.rectangle(x, y, this.r, options);
      this.image = loadImage("Daco_4084688.png");
      this.trajectory = [];
      World.add(world, this.body);
    }
  
    shoot(player) {
      player += 90;
      this.velocity = p5.Vector.fromAngle(player.angle * (3.14 / 180));
  
      this.velocity.mult(0.5);
  
      Matter.Body.setVelocity(this.body, {
        x: this.velocity.x * (180 / 3.14),
        y: this.velocity.y * (180 / 3.14)
      });
  
      Matter.Body.setStatic(this.body, false);
    }
  
  
    display() {
      var tmpAngle;
      if (this.body.velocity.y === 0) {
        tmpAngle = this.player + 90;
      } else {
        tmpAngle =
          Math.atan(this.body.velocity.y / this.body.velocity.x) * (180 / 3.14);
      }
  
      Matter.Body.setAngle(this.body, tmpAngle);
  
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      
      pop();
    }
  }  