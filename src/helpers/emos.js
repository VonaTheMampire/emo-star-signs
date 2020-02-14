const heroes = [
  'Mike Kinsella',
  'Davey Havok',
  'Gerard Way',
  'Matt Pyror',
  'Kory Gregory',
  'Brendan Lukens',
  'Jake Ewald',
  'Sean Huber',
  'Ian Farmer',
  'Britty Drake',
  'Phoebe Bridgers',
  'Julien Baker 😭'
]

export const getAspect = (sign) => {
  return heroes[Math.floor(Math.random() * (heroes.length))]
}
