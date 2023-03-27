// Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

// Votre programme devra utiliser une fonction prototypée comme ceci :
// ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
// 	# votre algorithme
// 	return (tableau)
// }


// Exemples d’utilisation :
// $> python exo.py “Bonjour les gars”
// Bonjour
// les
// gars

// Afficher error et quitter le programme en cas de problèmes d’arguments.


const args = process.argv.slice(2);

function split(a,b){
  let array = [];
  b = "\n";
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