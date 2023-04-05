// Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.


// Exemples d’utilisation :
// $> ruby exo.rb O 5
//     O
//    OOO
//   OOOOO
//  OOOOOOO
// OOOOOOOOO


// Afficher error et quitter le programme en cas de problèmes d’arguments.


const args = process.argv.slice(2);

function pyramid(arg1,arg2){

  if(args.length!==2){
    console.log("Erreur");
    process.exit(1);
  }
  let result = "";
  let calcul = (arg2*2)-1;
  console.log(calcul)
  for(let i=1; i<=calcul;i+=2){
    let space = (calcul-i)/2;
    result = " ".repeat(space) + arg1.repeat(i);
    console.log(result);
  }
}

pyramid(args[0], args[1]);