const randomReadings = [
  "Does a leader cease being a leader when no one is following? That's a good question for you to ponder today when your group's attitude might be bordering on mutinous. Instead of joining in on the grumbling about how no one knows what the heck is really going on, be more productive. Take over some of the leadership role and give people something—anything—to believe in. Just having a good attitude is a good start.",
  "There is a huge risk of overreaction today, either on your part or on the part of the people you're talking to. You can't anticipate how other people will react, so don't try to censor yourself in anticipation of a blowout. You'll only end up confusing yourself and diluting your message. It's a much better strategy to carry on as you normally would, and deal with any emotional outbursts as they come. Roll with the punches and you might even have fun coming up with a solution.",
  "Your loving home planet Venus moves into aggressive Aries on February 7, causing you to be more selfish than usual. You’re more focused on your own needs now, and you might become angry when you don’t get your way. This isn’t typical of you, Libra, so close friends and colleagues will wonder what’s up.",
  "You are well within your rights to put your own agenda first today, even if it means you cause conflict in a group setting. Getting along well with others should be a secondary goal today. After all, you can't always be everyone's friend, and debate can't always be fun. Don't compromise what you believe just to get along with the group more easily. Other people might give you grief for not just going along with the plan, but deep down they'll respect you for sticking to your guns.",
  "Your relationships are not all exclusive. Sometimes, like it or not, you have to share the people you love. You should have plenty of confidence in the value you bring to your closest friends, and don't worry that anyone else can change that personal connection. If you get too possessive about your relationship, you send a message that the assurance you need is more important than the other person's independence. It's a clear power play, and it won't be well received.",
  "It's very important for you to be around opinionated people every once in a while. Not only does it help exercise your verbal sparring skills, but it also helps keep you on your toes. It reminds you that not everyone agrees with you all the time. You need to seek out people who feel differently than you today. Start up some discussions, keep things light and friendly, and you will be able to learn a lot about the strength of your convictions and how you come to your conclusions.",
  "Sometimes, when you're granted a wish, you don't always realize it right away. Something you've been waiting for could be coming your way, so you'd better open your eyes to see it. Dressed up in camouflage, it probably won't fit your physical ideal, but it's perfect for you. Any adjustments you need to make to accept it are worth making. Choices you made in a work or school environment are paying off now, and you'll soon be given a chance to enjoy an extended stay in luxurious surroundings.",
  "If you're in the mood to meet lots of people, you're in luck! There should be many opportunities to expand your social circle right now, and if you're feeling ready for some engaging small talk, you'll get more than your share. Don't be surprised if a random encounter turns out to be a reunion. People have connections to you that you aren't aware of yet. Enjoy the laughter of recognition. It's a small world after all.",
  "If you've been experiencing any problems with your health lately, follow up with a doctor's appointment. This isn't necessarily an emergency situation. It's probably your subconscious reminding you that you need to take care of yourself! On that note, how are you doing as far as taking care of your emotional needs? There is no crime in saying no to a friend's invitation because you would rather spend some time alone, you know. Make you your number one priority.",
  "You have a lot confidence in your ideas, and that confidence is well founded, but that doesn't mean that everyone else needs to know all the ins and outs of what you believe! Don't get carried away about what you think about current events, and don't inflict your opinions on others right now. Your opinions are valid, but everyone has valid opinions, and many of them may clash with yours. Stay open to compromise. A fiercely dogmatic outlook could send the wrong message.",
  "The day could have its share of drama, but luckily it will all be more of the spilled-coffee variety and not anything more serious. These petty issues will all have obvious solutions, but they still may take up a fair bit of your energy. To get away from all the hassles that may haunt you right now, try to get some time by yourself. People around you are getting closer to crisis mode and their anxiety could rub off on you. Quiet time alone will keep you calm."
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
  return randomReadings[Math.floor(Math.random() * (randomReadings.length))]
}