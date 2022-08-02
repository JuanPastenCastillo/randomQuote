function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}


function RandomHSL() {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(51);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
}


export default RandomHSL
