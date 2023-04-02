// Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

// Utilisez une fonction de ce genre (selon votre langage) :
// ma_fonction(array_de_strings, string) {
// 	# votre algorithme
// 	return (nouvel_array_de_strings)
// }


// Exemples d’utilisation :
// $> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
// Michel

// $> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
// Michel, Thérèse, Benoit



// Afficher error et quitter le programme en cas de problèmes d’arguments.

const args = process.argv.slice(2);

function deleteFromArray(...arg){
let array = [];
let array2 = [];
if(arg.length<2){
  console.log("Erreur");
} else {

  for(let i=0; i<arg.length-1;i++){
    array.push(arg[i]);
    // console.log(array[i])
    
    // console.log(array)
    array.forEach(element=>{
      // console.log(element)
      let character = element.split("");
      // console.log(character)
      for(let j=0; j<character.length;j++){
  
        // console.log(element[j] + " caractères")
        if(element[j]===arg[arg.length-1]){
          // console.log(element[j] + " comparaison 1");
          // console.log(arg[arg.length-1] + " comparaison 2");
          // console.log(element + " comparaison 3");
          if(element === arg[i]){
  
            array2.push(element)
          }
        }
      }
  
    }
    )
    
  }
  for(let i=0;i<array.length;i++){
    for (let j=0; j<array2.length;j++){
      if(array[i]===array2[j]){
        array.splice(i,1);
      }
    }
  }
  console.log(array.join(" "))
  // console.log(array2.join(" "))
}


}

deleteFromArray(...args);