function Link (linkTitle, linkAddress, linkOwnerId) {

  if (typeof linkTitle === 'undefined' || typeof linkAddress === 'undefined' || typeof linkOwnerId === 'undefined' ) {
    throw new Error('Some args are missing!')
  }

  if (typeof linkTitle !== 'string' || typeof linkAddress !== 'string' || typeof linkOwnerId !== 'number' ) {
    throw new TypeError('The wrong type was passed!')
  }

  let link = {
    'linkTitle': linkTitle,
    'linkAddress': linkAddress,
    'linkOwnerId': linkOwnerId
  }

  return link

}

module.exports = Link