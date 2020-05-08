class Bird extends BaseClass {
    constructor(x,y){
     
      super(x,y,50,50);
      this.image = loadImage("sprites/angry bird.png");
    }
  
    display() {
           super.display();
    }
  }