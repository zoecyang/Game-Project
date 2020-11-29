function setup() {
  createCanvas(400, 400);
}

drawBall(){
    	   stroke(0);
    	   fill(this.color);
         ellipse(this.x,this.y,10,10);
	}

moveBall(){
	   this.x = this.x+2;
	   this.y = this.y+.5;
	}
