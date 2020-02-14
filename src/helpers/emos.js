const heroes = [
  'Mike Kinsella',
  'Davey Havok',
  'Gerard Way',
  'Matt Pyror'
]

export const getAspect = (sign) => {
  return heroes[Math.floor(Math.random() * (heroes.length))]
}
