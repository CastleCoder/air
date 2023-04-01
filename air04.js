// Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.


// Exemples d’utilisation :
// $> python exo.py 1 2 3 4 5 4 3 2 1
// 5

// $> python exo.py bonjour monsieur bonjour
// monsieur


// Afficher error et quitter le programme en cas de problèmes d’arguments.






const args = process.argv.slice(2);

function unknow(...arg){
  let result = [];
  let toDelete = [];
  
  if(arg.length < 2) {
    console.log("Erreur");
  } else {
    for(let i = 0; i < arg.length - 1; i++) {
      for(let j = i + 1; j < arg.length; j++) {
        if(arg[j] === arg[i]) {
          toDelete.push(arg[i]);
        }
      }
    }
    
    for(let i = 0; i < arg.length; i++) {
      let found = false;
      for(let j = 0; j < toDelete.length; j++) {
        if(arg[i] === toDelete[j]) {
          found = true;
          break;
        }
      }
      if(!found) {
        result.push(arg[i]);
      }
    }
  }
  
  console.log(result.join(", "));
}

unknow(...args);