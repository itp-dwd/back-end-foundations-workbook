const feelings = ["happy", "despondent", "hungry", "excited", "embarrassed"];

function randomFeeling() {
  const feeling = feelings[Math.floor(Math.random()*feelings.length)];
  return `Today I'm feeling ${feeling}.`;
}

console.log(randomFeeling());
