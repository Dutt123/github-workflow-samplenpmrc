const TABLE_FILTERS = [
  {
    attribute: 'name',
    type: 'string',
    icon: 'el-icon-document',
  },
  {
    attribute: 'email',
    type: 'string',
    icon: 'el-icon-document',
  },
]

const TABLE_COLUMNS = [
  {
    name: 'picture',
    icon: 'el-icon-document',
    label: '#',
    align: 'center',
    sortable: false,
    width: 10,
    component: {
      is: 'cell-user-avatar',
    },
  },
  {
    name: 'user_id',
    label: 'ID',
    icon: 'el-icon-document',
    width: 50,
  },
  {
    name: 'name',
    label: 'Name',
    icon: 'el-icon-document',
    width: 50,
  },
  {
    name: 'email',
    label: 'email',
    icon: 'el-icon-document',
  },
]

export default {
  filters: TABLE_FILTERS,
  columns: TABLE_COLUMNS,
}
