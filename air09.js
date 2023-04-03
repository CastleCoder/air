// Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

// Utilisez une fonction de ce genre (selon votre langage) :
// sorted_fusion(array1, array2) {
// 	# your algo
// 	return (new_array)
// }


// Exemples d’utilisation :
// $> ruby exo.rb 10 20 30 fusion 15 25 35
// 10 15 20 25 30 35


// Afficher error et quitter le programme en cas de problèmes d’arguments.


const args = process.argv.slice(2);

function sorted_fusion(array1, array2){
  console.log(array1)
  // array1.push(array1);
  console.log(array2)
  if(array1.length<2){
    console.log("Erreur");
  } else {
    let isError = false;
    for(let i=0; i<array1.length;i++){
      if(isNaN(array1[i])){
        console.log("Erreur");
        isError = true;
        break;
      }
    } if(!isError) {
      for(let i=0; i<array1.length-1;i++){
        for(let j=i+1;j<array1.length;j++){
          if(parseInt(array1[j])<parseInt(array1[i])){
            let temp = array1[i];
            array1[i] = array1[j];
            array1[j] = temp;
          }
        }

      }
      console.log(array1.join(" "))
    }
    }
  

}

sorted_fusion(...args);