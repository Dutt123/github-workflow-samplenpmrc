const TABLE_FILTERS = [
  {
    attribute: 'createdAt',
    type: 'date',
    icon: 'el-icon-date',
  },
  {
    attribute: 'description',
    type: 'string',
    icon: 'el-icon-document',
  },
  {
    attribute: 'status',
    type: 'string',
    icon: 'el-icon-document',
  },
]

const TABLE_COLUMNS = [
  {
    name: 'createdAt',
    label: 'Date',
    icon: 'el-icon-document',
    format: 'dateTime',
  },
  {
    name: 'description',
    label: 'Description',
    icon: 'el-icon-document',
  },
  {
    name: 'status',
    label: 'Status',
    format: {
      name: 'httpStatus',
    },
    icon: 'el-icon-document',
    align: 'right',
    component: {
      is: 'cell-http-status',
    },
  },
]

export default {
  filters: TABLE_FILTERS,
  columns: TABLE_COLUMNS,
}
