const MIN_MILLISECONDS = 1000 * 60
const HOUR_MILLISECONDS = 1000 * 60 * 60
const DAY_MILLISECONDS = 1000 * 60 * 60 * 24
const MONTH_MILLISECONDS = 1000 * 60 * 60 * 24 * 30

enum FORMATS {
  second = 'second',
  minute = 'minute',
  hour = 'hour',
  day = 'day',
  month = 'month',
}

const rtf = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
  style: 'long',
})

const RELATIVE_FORMAT = {
  minute: (timestamp: number) => {
    console.log({ timestamp })
    const difference = Math.round(timestamp / MIN_MILLISECONDS)
    console.log({ difference })
    return rtf.format(difference, FORMATS.minute)
  },
  hour: (timestamp: number) => {
    const difference = Math.round(timestamp / HOUR_MILLISECONDS)
    return rtf.format(difference, FORMATS.hour)
  },
  day: (timestamp: number) => {
    const difference = Math.round(timestamp / DAY_MILLISECONDS)
    return rtf.format(difference, FORMATS.day)
  },
  month: (timestamp: number) => {
    const difference = Math.round(timestamp / MONTH_MILLISECONDS)
    return rtf.format(difference, FORMATS.month)
  },
}

const getMsDifferenceFromToday = (timestamp: number) => {
  const todayTimestamp = new Date().getTime()
  const difference = timestamp - todayTimestamp
  return difference
}

export function getRelativeTime(timestamp: number) {
  const difference = getMsDifferenceFromToday(timestamp)
  console.log({ difference })
  const positiveDifference = Math.abs(difference)

  if (positiveDifference >= MONTH_MILLISECONDS) {
    return RELATIVE_FORMAT.month(difference)
  } else if (positiveDifference >= DAY_MILLISECONDS) {
    return RELATIVE_FORMAT.day(difference)
  } else if (positiveDifference >= HOUR_MILLISECONDS) {
    return RELATIVE_FORMAT.hour(difference)
  } else {
    return RELATIVE_FORMAT.minute(difference)
  }
}
