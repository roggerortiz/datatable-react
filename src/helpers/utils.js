// export const comparisonByDateField = (field, dir = 'desc') => {
//   return (a, b) => {
//     const dirValue = dir === 'asc' ? 1 : -1

//     const defaultDate = moment('1900-01-01')
//     const aDate = a[field] ? moment(a[field]) : defaultDate
//     const bDate = b[field] ? moment(b[field]) : defaultDate

//     return dirValue * (aDate.diff(bDate, 'days') > 0 ? 1 : -1)
//   }
// }

export const compareByField = (field, dir = 1) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1) * dir
}
