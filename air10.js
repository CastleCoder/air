// Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.

// Utilisez une fonction de ce genre (selon votre langage) :
// ma_rotation(array) {
// 	# votre algorithme
// 	return (new_array)
// }


// Exemples d’utilisation :
// $> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
// Albert, Thérèse, Benoit, Michel


// Afficher error et quitter le programme en cas de problèmes d’arguments.


const args = process.argv.slice(2);

function ma_rotation(...arg){
let array = [];
let counter = 1;

if(arg.length<2){
  console.log("Erreur");
} else {

  for(let i=0; i<arg.length;i++){
    if(i===counter){
      array.push(arg[i]);
      counter++
    }
    if(array.length === arg.length-1){
      array.push(arg[0])
    }
      console.log(array.join(" "))
    }
    
  }
}



ma_rotation(...args);