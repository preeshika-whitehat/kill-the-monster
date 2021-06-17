class Monster {
  constructor(x,y,width,height) {
            var options = {
				isStatic: true,
				restitution: 0.5,
				friction:1.0
			}
			this.width = width;
			this.height = height;
			this.image=loadImage("image/Monster-02.png");
			this.body=Bodies.rectangle(x, y, width, height, options);
			World.add(world, this.body);
  }

	
	display() {
			push();
			translate(this.body.position.x, this.body.position.y);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			pop();
	}
}
