const NP = 100;
let pelotas = [];                                                                         

function setup(){
    createCanvas(windowWidth, windowHeight);

    for(let i=0; i < NP; i++){
        let nuevaPelota = new Pelota();
        pelotas[i] = nuevaPelota;
    }
}

function draw(){
    background(150);

    for(let i=0; i < NP; i++){
        pelotas[i].actualizar();
        pelotas[i].visualizar();
    }

}