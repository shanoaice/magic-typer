import createStore from 'storeon'
import persistState from '@storeon/localstorage'

const storeText = store => {
  store.on('@init', () => ({ leftText: '', rightText: '' }))
}

export const store = createStore([storeText, persistState(['leftText'])])
