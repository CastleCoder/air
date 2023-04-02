// Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.


// Exemples d’utilisation :
// $> ruby exo.rb 1 2 3 4 5 “+2”
// 3 4 5 6 7

// $> ruby exo.rb 10 11 12 20 “-5”
// 5 6 7 15


// L’opération à appliquer sera toujours le dernier élément.


// Afficher error et quitter le programme en cas de problèmes d’arguments.


const args = process.argv.slice(2);

function concat(...arg){
// console.log(arg[1])
let array = [];
let calcul;
let arrayCalcul=[];
if(arg.length<2){
  console.log("Erreur");
} else {

  for(let i=0; i<arg.length-1;i++){
    
    array.push(arg[i]);
    
    console.log(arg[arg.length-1])
    
    calcul = parseInt(array[i])+parseInt(arg[arg.length-1]);
    arrayCalcul.push(calcul)
      // console.log(array[array.length-1])
    // } 
  }
  console.log(arrayCalcul.join(" "))
}

}

concat(...args);