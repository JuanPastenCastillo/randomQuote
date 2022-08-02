const getRandomQuote = (min = 0, arrToPick) => {
  let arrLength = arrToPick.length
  let rand = min + Math.random() * (arrLength + 1 - min)
  return Math.round(rand)

}

export default getRandomQuote