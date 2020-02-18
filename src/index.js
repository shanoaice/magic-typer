import { leftInput } from './components/leftInput'
import { rightInput } from './components/rightInput'
import './style.scss'

const titleArea = document.createElement('div')
titleArea.className = 'title-area'

const title = document.createElement('h1')
title.textContent = 'Magic Typer'

titleArea.appendChild(title)

const leftSubtitleArea = document.createElement('div')
leftSubtitleArea.className = 'left-subtitle-area'

const leftSubtitle = document.createElement('h2')
leftSubtitle.textContent = 'Type something here ↓'

leftSubtitleArea.appendChild(leftSubtitle)

const rightSubtitleArea = document.createElement('div')
rightSubtitleArea.className = 'right-subtitle-area'

const rightSubtitle = document.createElement('h2')
rightSubtitle.textContent =
  'Then, type something here ↓ and see the magic happen'

rightSubtitleArea.appendChild(rightSubtitle)

const app = document.getElementById('app')
app.className = 'parent'

if (app) {
  app.appendChild(titleArea)
  app.appendChild(leftSubtitleArea)
  app.appendChild(rightSubtitleArea)
  app.appendChild(leftInput)
  app.appendChild(rightInput)
}
