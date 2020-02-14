const before = [ 
  "Past mistakes or missteps are all water under the bridge",
  "When embarking upon a new project, romance, or job, you might think you have to have an open mind",
  "All things need to be attempted in life even if they can't always be mastered",
  "Not every day can be a great day",
  "Treat this day as simmer time on a stew that will eventually be quite delicious",
  "Be patient and trust that when things are meant to be, they'll be",
  "Despite what some control freaks might tell you, there's real freedom in letting other people take over",
  "Explore your more passive side today by handing the reins over",
  "In a romantic relationship, let your partner choose your next date",
  "Letting go will take a weight off your shoulders and make you feel lighter overall",
  "Today's energy is focused on completion",
  "As things get wrapped up, you'll discover that your upcoming social calendar has a lot of holes in it",
  "Your relationships are not all exclusive",
  "Sometimes, like it or not, you have to share the people you love",
  "You should have plenty of confidence in the value you bring to your closest friends",
  "You are well within your rights to put your own agenda first today",
  "Getting along well with others should be a secondary goal today",
  "There's a right time and a right place for being stingy with your money",
  "There's nothing wrong with being giving and generous",
  "Your energy is extremely attractive today",
  "You're like a flame that attracts many moths",
  "Your power is your own, so don't be too eager to give it up",
  "You’ve got the cosmic greenlight to indulge",
  "Self-care is the name of the game"
]

const after = [
  "you might find yourself walking Scott Street feeling like a stranger.",
  "that's bullshit, you fucking miss them.",
  "don't bother trying to explain, angel.",
  "how 'bout I'm outside of your window?",
  "you should just keep hoping for the best and just hoping nothing happens.",
  "maybe all that you had was just good kissing chemistry?",
  "maybe you should cut yourself some slack, you're just trying to get back on your feet.",
  "you're just trying to do the things you thought you'd have done by 19.",
  "if that's just bad news, you're a liar.",
  "your a marathon runner and both your ankles are sprained.",
  "don't learn the drums, it's too much shit to carry.",
  "all your friends are getting married.",
  "you'll meet again when both your cars collide.",
  "did you really think I’d let you kill this chorus?",
  "trust me, you aren't ok.",
  "it's January 27th, 2032.",
  "be careful with that mixtape you are working on, it could burn a hole in anyone.",
  "you might find a story at the bottom of a bottle.",
  "maybe there is someone you should thank for being a part of your forget-me-nots and marigolds.",
  "haven't you ever heard of closing the god damn door?",
  "you should let their waves crash down on you and take you away.",
  "you want to be dressed in poetry, but imagery doesn't fit",
  "you might be the last good thing about this part of town",
  "you've got a smile that could light this town, and your friends might need it",
  "that's just according to the moon I guess.",
  "maybe this is more than you bargained for.",
  "why not just join the black parade.",
  "you might think maybe it was never meant.",
  "you might feel like your friends are up in mountains and your drowning in lakes",
  "you should teach the 7th grade.",
  "you should get a heart tatoo. You need a dumb one, like really bad",
  "you're just in the middle of the ride, everything, everything will be alight."
]

const link = [
  " though ",
  " but don't let this distract you and ",
  " so make sure you save your energy since ",
  " but ",
  " although ",
  " however ",
  " on the other hand ",
  " yet ",
  " nevertheless "
]

export const signs = [
  'Aries', 
  'Taurus', 
  'Gemini', 
  'Cancer', 
  'Leo', 
  'Virgo', 
  'Libra', 
  'Scorpio', 
  'Sagittarius', 
  'Capricorn', 
  'Aquarius', 
  'Pieces'
]

export const getReading = (sign) => {
  const start = [...before]
  const end = [...after]

  return Array(4).fill(0).map(sentance => {
    const a = start[Math.floor(Math.random() * (start.length))]
    const b = end[Math.floor(Math.random() * (end.length))]
    const l = link[Math.floor(Math.random() * (link.length))]
    start.splice(start.indexOf(a), 1)
    end.splice(end.indexOf(b), 1)
    return a + l + b
  }).join(' ')
}