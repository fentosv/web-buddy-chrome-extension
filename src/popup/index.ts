import '../styles/app.css'
import Popup from './Popup.svelte'
import { STORAGE_KEYS } from './../DEFAULTS'
import { getStorage } from '../utils/storage'
import { getRelativeTime } from '../utils/relativeDate'

const target = document.getElementById('app')

async function render() {
  const installDate = await getStorage(STORAGE_KEYS.installDate)
  const relativeTime = getRelativeTime(installDate)

  new Popup({ target, props: { relativeTime } })
}

document.addEventListener('DOMContentLoaded', render)
