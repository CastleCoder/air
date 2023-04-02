// Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.

// Utilisez une fonction de ce genre (selon votre langage) :
// sorted_insert(array, new_element) {
// 	# your algo
// 	return (new_array)
// }


// Exemples d’utilisation :
// $> ruby exo.rb 1 3 4 2
// 1 2 3 4

// $> ruby exo.rb 10 20 30 40 50 60 70 90 33
// 10 20 30 33 40 50 60 70 90


// Afficher error et quitter le programme en cas de problèmes d’arguments.


const args = process.argv.slice(2);

function sorted_insert(...arg){
  let array = [...arg];
  if(arg.length<2){
    console.log("Erreur");
  } else {
    for(let i=0; i<array.length-1;i++){
      for(let j=i+1;j<array.length;j++){
        if(parseInt(array[j])<parseInt(array[i])){
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }console.log(array.join(" "))
  

}

sorted_insert(...args);