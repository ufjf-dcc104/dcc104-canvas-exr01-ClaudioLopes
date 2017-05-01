function Sprite(){
  this.x = 50;
  this.y = 50;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 15;
  this.height = 15;
  this.color = "blue";
  this.gravidade = 10;
  this.vento = 25;
}

Sprite.prototype.desenhar = function(ctx){
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y, this.width, this.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x,this.y, this.width, this.height);
};

Sprite.prototype.mover = function(dt){
  this.vx = this.vx + (this.ax-this.vento)*dt;
  this.vy = this.vy + (this.ay+this.gravidade)*dt;
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
};

Sprite.prototype.win = function(x,y){
      this.x = x;
      this.y = y;
      this.vx = 0;
      this.vy = 0;
      this.ax = 0;
      this.ay = 0;
};
