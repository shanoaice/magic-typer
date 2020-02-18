import { store } from '../store'

export const rightInput = document.createElement('textarea')

rightInput.value = store.get().rightText

store.on('left change', ({ leftText, rightText }) => {
  rightInput.value = leftText.slice(0, rightText.length)
})

store.on('right change', (_, rightText) => ({ rightText }))

rightInput.className = 'right-input'

rightInput.addEventListener('input', function() {
  store.dispatch('right change', this.value)
  this.value = store.get().leftText.slice(0, store.get().rightText.length)
})
