// Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

// Votre programme devra intégrer une fonction prototypée comme ceci :
// ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
// 	# votre algorithme
// 	return (tableau)
// }


// Exemples d’utilisation :
// $> python exo.py “Crevette magique dans la mer des étoiles” “la”
// Crevette magique dans 
//  mer des étoiles

// Afficher error et quitter le programme en cas de problèmes d’arguments.


const args = process.argv.slice(2);

function split(a,b){
  let array = [];
  for(let i=0; i<a.length;i++){
    if(a[i].match(/[a-zA-Z]/g)){
      array.push(a[i])
    } else {
      array.push(b)
    }
  }
  console.log(array.join(""))

}

split(args[0], args[1]);