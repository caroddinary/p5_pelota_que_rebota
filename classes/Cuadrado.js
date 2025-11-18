class Cuadrado{
    
    constructor(){
  
    this.lado = random(10, 20);
    this.mitad = this.lado /2;

    this.posx=random(this.mitad, width - this.mitad);
    this.posy=random(this.mitad, height - this.mitad);

    this.velx= random(0, 0);
    this.vely= random(-3, -1);

    this.nuevoColor = color(random(100,170), random(180,240), random(220,255), 255);

    }
    actualizar(){
    
        if(this.posx > width - this.mitad || this.posx < this.mitad){
        this.velx *= -1;
        }
         if(this.posy > height - this.mitad || this.posy < this.mitad){
        this.vely *= -1;
        }

        this.posx += this.velx;
        this.posy += this.vely;
    }
    visualizar(){

        fill(this.nuevoColor);
        stroke("#38f1f4ff");   // ← corregido
        strokeWeight(2);
        rectMode(CENTER);
        square(this.posx, this.posy, this.lado);
    }
}
