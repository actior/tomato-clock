import './style.css'
import { setupCounter } from './counter.ts'
import { setupHearts }from'./snippets/hearts/index.ts'

setupHearts(document.querySelector<HTMLSpanElement>('#hearts')!)

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
