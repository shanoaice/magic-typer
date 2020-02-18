import { store } from '../store'

store.on('left change', (_, leftText) => ({ leftText }))

export const leftInput = document.createElement('textarea')

leftInput.value = store.get().leftText

leftInput.className = 'left-input'

leftInput.autofocus = true

leftInput.addEventListener('input', function() {
  store.dispatch('left change', this.value)
})
