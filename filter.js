const personnes=[
{
  nom:"Corentin",
  enfants:["Sylvain", "Thien Tam", "Thomas", "Jack", "Benoît"]
},
{
  nom:"Leila",
  enfants:["Romain", "Yassine", "Vanthika", "Alex", "Yvan"]
},
{
  nom:"Justine",
  enfants:[]
}
]

function aDesEnfants(individu) {

  return individu.enfants.length > 0
  // if (individu.enfants.length > 0) {
    // return true 
  // }

  // else {
  //   return false 
  // }
}

function naPasDenfants(individu){
  return individu.enfants.length === 0

}

const parents = personnes.filter(aDesEnfants)
console.log(parents)
console.log()

const personnesSansEnfants = personnes.filter(naPasDenfants)
console.log(personnesSansEnfants)

