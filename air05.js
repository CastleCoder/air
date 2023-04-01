// Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.


// Exemples d’utilisation :
// $> python exo.py “Hello milady,   bien ou quoi ??”
// Helo milady, bien ou quoi ?


// Afficher error et quitter le programme en cas de problèmes d’arguments.


const args = process.argv.slice(2);

function deleteDouble(arg){
  let result = [];
  let string = arg.join("");
  console.log(string);
  for(let i = 0; i < string.length; i++){
      if(string[i] !== string[i+1]){
        result.push(string[i])
      
    }
  }
  console.log(result.join(""))
}

deleteDouble(args);


