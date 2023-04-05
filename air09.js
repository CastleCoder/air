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

function sorted_fusion(...arg){

if(args.length<3){
  console.log("Erreur");
  process.exit(1);
}

let fusionArgument = false;
for(let i=0; i<args.length;i++){
  if(args[i]==="fusion"){
    fusionArgument = true;
  }
}
if(!fusionArgument){
  console.log("Erreur");
    process.exit(1)
}

  let result = [];
  let array = arg;
  let indexOfSeparation = array.indexOf("fusion");
  let array1 = array.slice(0, indexOfSeparation);
  let array2 = array.slice(indexOfSeparation+1);
  console.log(array);
  console.log(array1);
  console.log(array2);
  result.push(...array1,...array2);

  for(let i=0;i<result.length-1;i++){
    for(let j=i+1; j<result.length;j++){
      let temp;
      if(parseInt(result[j])<parseInt(result[i])){
        temp = result[j];
        result[j] = result[i];
        result[i] = temp;
      }
      
    }
  }
  console.log(result);
  


  
  

}

sorted_fusion(...args);

