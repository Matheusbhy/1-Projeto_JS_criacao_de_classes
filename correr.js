class pessoa { 
    constructor(nome, velocidade, resistencia){
    this.nome = nome;
    this.velocidade = velocidade;
    this.resistencia = resistencia;
 }
}
class dados { 
    mostrardados(corredor){
        console.log("nome : " +corredor.nome);
        console.log("velocidade : " +corredor.velocidade);
        console.log("Resistencia :" +corredor.resistencia);
    }
}
let roger = new pessoa ("Roger", 3, 5);
let evanilson = new pessoa ("Evanilson", 7, 6);
let leandro = new pessoa ("Leandro", 4, 10);       

let d = new dados ();
d.mostrardados (roger)
d.mostrardados (evanilson)
d.mostrardados (leandro)




