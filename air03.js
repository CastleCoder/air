// Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.

// Utilisez une fonction de ce genre (selon votre langage) :
// ma_fonction(array_de_strings, separateur) {
// 	# votre algorithme
// 	return (string)
// }


// Exemples d’utilisation :
// $> python exo.py “je” “teste” “des” “trucs” “ “
// Je teste des trucs


// Afficher error et quitter le programme en cas de problèmes d’arguments.

const args = process.argv.slice(2);

function split(...arg){
// console.log(arg[1])
let array = [];
  for(let i=0; i<arg.length-1;i++){
    // console.log(arg[i])
    // if(i<arg.length-1){

      array.push(arg[i]);
      console.log(array[array.length-1])
    // } 
    console.log(array.join(arg[arg.length-1]))
  }

}

split(...args);