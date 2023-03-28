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
  let motComplet = [];
  let motComplet2 = [];
  if(args.length<2){
    console.log("Erreur")
  } else {

    for(let i=0; i<a.length;i++){
      let regex = /[\p{L}]+/gu;
      motComplet = a.match(regex)
      for(let j=0;j<b.length;j++){
        motComplet2 = b.match(regex);
        if(motComplet[i] === motComplet2[j] ){
          motComplet[i] = "\n"
          // console.log(motComplet[i])
        }
      }
      array.push(motComplet[i])
      if(array.length === motComplet.length){
        break;
      }
  
    }
  }
  // console.log(motComplet.join(" "))
  // console.log(motComplet2)
  // console.log(motComplet.length)
  // console.log(motComplet2.length)
  console.log(array.join(" "))

}

split(args[0], args[1]);