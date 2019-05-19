
import formatDollar from '../../../utils/format-dollar'
import { formatDate } from '../../../utils/format-date'
import formatAccount from '../../../utils/format-account'
import capitalize from 'lodash/capitalize'

const dateTime = v => v ? formatDate(v, 'DD/MM/YYYY hh:mm A') : ''
const dayMonth = v => v ? formatDate(v, 'DD/MM') : ''
const dayMonthYear = v => v ? formatDate(v, 'D MMM YYYY') : ''
const dollar = v => v ? formatDollar(v) : ''
const uppercase = v => v? v.toUpperCase() : ''
const account = v => v ? formatAccount(v) : ''
const capital = v => capitalize(v)
const httpStatus = v => Number(v[0]) < 4 ? `${v} OK` : `${v} ERR`

export default {
  date: (v, format = 'DD/MM/YYYY') => formatDate(v, format),
  dateTime,
  dollar,
  uppercase,
  dayMonth,
  account,
  dayMonthYear,
  capital,
  httpStatus,
}
