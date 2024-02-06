/* eslint-disable @typescript-eslint/no-unused-vars */
import { setBlockRules } from '../utils/rules'
import { STORAGE_KEYS } from './../DEFAULTS'

export default async function onStorageChanged() {
  chrome.storage.onChanged.addListener(async (changes, namespace) => {
    for (const [key, { oldValue, newValue }] of Object.entries(changes)) {
      if (key !== STORAGE_KEYS.blockedDomains) return
      const sortedNewRules = newValue?.sort()
      await setBlockRules(sortedNewRules)
    }
  })
}
