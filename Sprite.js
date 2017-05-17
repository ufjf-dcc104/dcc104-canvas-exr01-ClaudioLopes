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
  this.vento = 20;
}

Sprite.prototype.desenhar = function(ctx){
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.fillStyle = this.color;
  ctx.fillRect(-this.width/2, -this.height/2,this.width,this.height);
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.strokeStyle = "grey";
  ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height);
  ctx.restore();
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
      this.gravidade = 0;
      this.vento = 0;
};
