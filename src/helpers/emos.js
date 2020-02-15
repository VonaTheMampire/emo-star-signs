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
  'Julien Baker 😭',
  'Yvette Young',
  'Stefan Babcock',
  'Justin Pierre',
  'Christian Holden',
  'The whole Future Teens Gang',
  "The boiz from P'daddy",
  "The whole (t-t)b gang 🤙",
]

export const getAspect = (sign) => {
  return heroes[Math.floor(Math.random() * (heroes.length))]
}
