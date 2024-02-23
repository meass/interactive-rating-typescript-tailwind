let result: number
const ratingStart = document.querySelector('#rating-start') as HTMLDivElement
const ratingEnd = document.querySelector('#rating-end') as HTMLDivElement
const resultText = document.querySelector('#result') as HTMLParagraphElement

const selectRating = (id: string) => {
  const element = document.querySelector(id) as HTMLUListElement
  const elementValue = element.dataset.value
  element.className = 'active'
  result = Number(elementValue)
}

const submit = () => {
  ratingStart.className = 'inactive'
  ratingEnd.className = 'active'
  resultText.textContent = `You selected ${result} out of 5`
}