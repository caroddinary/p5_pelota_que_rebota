const NP = 500;
let pelotas = [];  

const NC = 50;
let cuadrados =[];

function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);

    for(let i=0; i < NP; i++){
        let nuevaPelota = new Pelota();
        pelotas[i] = nuevaPelota;
    }

     for(let i=0; i < NC; i++){
        let nuevoCuadrado = new Cuadrado();
        cuadrados[i] = nuevoCuadrado;
    }
}


function draw(){
    background(150);

    for(let i=0; i < NP; i++){
        pelotas[i].actualizar();
        pelotas[i].visualizar();
    }

     for(let i=0; i < NC; i++){
        cuadrados[i].actualizar();
        cuadrados[i].visualizar();
    }

}

