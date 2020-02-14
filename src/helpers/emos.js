const heroes = [
  'Mike Kinsella',
  'Davey Havok',
  'Gerard Way',
  'Matt Pyror',
  'Kory Gregory',
  'Brendan Lukens',
  'Jake Ewald',
  'Sean Huber',
  'Kelly-Dawn',
  'Frank Iero',
  'Sarah "Thomo" Thompson',
  'Ian Farmer',
  'Amy Hoffman',
  'Evan M. Weiss',
  'Britty Drake',
  'Maya Mortman',
  'Georgia McDonald',
  'Phoebe Bridgers',
  'Julien Baker 😭'
]

export const getAspect = (sign) => {
  return heroes[Math.floor(Math.random() * (heroes.length))]
}
