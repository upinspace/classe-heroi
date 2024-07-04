let heroi = "Anueng"
let xp = 15000
let classificacao = ["Ferro" , "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if(xp <= 1000) {
        console.log("Parabéns, " + heroi + "! Você alcançou a classe " + classificacao[0])}
       else if ((xp <= 2000) && (xp > 1000)) {
            console.log("Parabéns, " + heroi + "! Você alcançou a classe " + classificacao[1])
     }
     else if ((xp <= 5000) && (xp > 2000)){
        console.log("Parabéns, " + heroi + "! Você alcançou a classe " + classificacao[2])
     }
       else if ((xp <= 7000) && (xp > 5000)){
        console.log("Parabéns, " + heroi + "! Você alcançou a classe " + classificacao[3])
     }
       else if ((xp <= 8000) && (xp > 7000)) {
        console.log("Parabéns, " + heroi + "! Você alcançou a classe " + classificacao[4])
     }
       else if ((xp <= 9000) && (xp > 8000)) {
        console.log("Parabéns, " + heroi + "! Você alcançou a classe " + classificacao[5])
     }
       else if ((xp <= 10000) && (xp > 9000)){
        console.log("Parabéns, " + heroi + "! Você alcançou a classe " + classificacao[6])
     }
       else {
        console.log("Parabéns, " + heroi + "! Você alcançou a classe " + classificacao[7])
     }
     