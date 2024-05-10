let nomeHeroi = "thorzinho"
let xpHeroi = 10

if (xpHeroi < 1000){
    console.log("O herói " + nomeHeroi+" está no nível é ferro ");
}else if (xpHeroi >= 1001 && xpHeroi <=2000){
    console.log("O herói " + nomeHeroi+" está no nível é bronze ");
}else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    console.log("O herói " + nomeHeroi+" está no nível é Prata ");
}else if (xpHeroi >= 5001 && xpHeroi <=7000){
    console.log("O herói " + nomeHeroi+" está no nível é Ouro ");
}else if (xpHeroi >= 7001 && xpHeroi <=8000){
    console.log("O herói " + nomeHeroi+" está no nível é Platina ")
}else if (xpHeroi >= 8001 && xpHeroi <=9000){
    console.log("O herói " + nomeHeroi+ " está no nível é Ascendente ");
}else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    console.log("O herói " + nomeHeroi+" está no nível é Imortal ");
}else {
    console.log("O herói " + nomeHeroi + " está no nível é Radiante ")
}