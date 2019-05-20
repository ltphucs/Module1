function Hero(image, top, left, size,speedX,speedY){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speedx = speedX;
    this.speedY = speedY;
  
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  
    this.moveRight = function(){
      this.left += this.speedX;
      //console.log('ok: ' + this.left);
    }
    this.moveDown = function(){
        this.top += this.speedY;
        //console.log('ok: ' + this.top);  
  
  }
}
  var hero = new Hero('bong.jpg', 20, 30, 100,10,10);
  
  function start(){
      hero.moveRight();
      hero.moveDown();
      if(hero.left + hero.speedX > window.innerWidth - hero.size ||
          hero.left + hero.speedX < 0){
          hero.speedX = -hero.speedX;
      }
      if(hero.top + hero.speedY> window.innerHeight - hero.size ||
          hero.top + hero.speedY < 0){
          hero.speedY = -hero.speedY;
      }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
  }

  
  start();