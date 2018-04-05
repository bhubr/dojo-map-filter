// Utiliser map() sur un tableau

// Tableau d'entrée : des personnes
const personnes=[
{
  nom:"Corentin",
  enfants:["Sylvain", "Thien Tam", "Thomas", "Jack", "Benoît"]
},
{
  nom:"Leila",
  enfants:["Romain", "Yassine", "Vanthika", "Alex", "Yvan"]
}
]

// Résultat qu'on veut obtenir : les enfants de chaque personne
// [
//   ["Sylvain", "Thien Tam", "Thomas", "Jack", "Benoît"],
//   ["Romain", "Yassine", "Vanthika", "Alex", "Yvan"]
// ]


// La fonction qu'on va passer en paramètre à map()
// Cette fonction va extraire les enfants d'une personne
// Il faut lire personne.enfants comme "les enfants de la personne"
function sortirEnfants(personne){
  return personne.enfants
}

// Déclaration d'une variable constante pour stocker
// les résultats, et exécution du map()
const prenoms = personnes.map(sortirEnfants)
console.log(prenoms)


// Code qu'on avait ajouté pour tester la fonction
// d'extraction des enfants sur UN élément du tableau
// const corentin = personnes[0];
// console.log(sortirEnfants(corentin))