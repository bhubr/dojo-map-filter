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
}

const parents = personnes.filter(aDesEnfants)
console.log(parents)

function nomDuParent(individu) {
  return individu.nom
}

const nomsDesParents = parents.map(nomDuParent)

console.log(nomsDesParents)

// [ 'Corentin', 'Leila' ]