let peca = 'Torre'.toUpperCase()
    
    if (peca == 'PEAO'){
         console.log("move uma casa adiante.");
        }
    else if (peca == 'TORRE') {
        console.log("Pode mover varias casas somento  em uma linha reta.");
        }
    else if (peca == 'BISPO') { 
        console.log("Pode mover varias casas somente nas diagonais");
        }   
    else if (peca == 'RAINHA') {
        console.log("Pode se mover em varias casas pra todos os lados.");
        }
    else if (peca == 'CAVALO') {
        console.log("Pode se mover em qualquer direção porem em formato de L.");
        
        }
    else if (peca == 'REI') {
        console.log("Pode se mover pra todos os lados porem somente uma casa.");
        
    }
    else {
        console.log("Nenhuma peça valida foi escolhida.");
}