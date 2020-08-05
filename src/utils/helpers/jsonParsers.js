import { lang } from '../../assets/lang'

export const parseOwnerPrivatePractise = (private_practice) => {
  if (!private_practice) {
    return lang.common.nodata
  }

  const {
    BAILIFF,
    LAWYER,
    MEDIATOR,
    NOTARY,
  } = private_practice

  if (BAILIFF) {
    return lang.ownerInfo.bailiff
  } else if (LAWYER) {
    return lang.ownerInfo.lawyer
  } else if (MEDIATOR) {
    return lang.ownerInfo.mediator
  } else if (NOTARY) {
    return lang.ownerInfo.notary
  } else {
    return lang.common.no
  }
}

export const parseGender = (gender) => {
  if (!gender) {
    return lang.common.nodata
  }

  if (gender === 'MALE') {
    return lang.gender.maleWho
  } else if (gender === 'FEMALE') {
    return lang.gender.femaleWho
  }
}

/**
 * Возвращает дату в формате DD.MM.YY, на основе входящей строки даты (date).
 * @param {string} date - строка даты.
 */
export const parseDate = (date, separator = '/') => {
  const dateObj = new Date(date)
  let day = dateObj.getUTCDate()
  let month = dateObj.getUTCMonth() + 1
  let year = dateObj.getUTCFullYear()
  
  const isNeedToAddZeroSymbolDay = (day < 10)
  const isNeedToAddZeroSymbolMonth = (month < 10)

  day = day.toString()
  month = month.toString()
  year = year.toString()

  return `${(isNeedToAddZeroSymbolDay) ? '0' : ''}${day + separator}${(isNeedToAddZeroSymbolMonth) ? '0' : ''}${month + separator + year}`
}

export const parseStatus = (status) => {
  if (!status) {
    return lang.common.nodata
  }

  if (status === 'ALIVE') {
    return lang.ownerInfo.alive
  } else if (status === 'DEAD') {
    return lang.ownerInfo.dead
  }
}