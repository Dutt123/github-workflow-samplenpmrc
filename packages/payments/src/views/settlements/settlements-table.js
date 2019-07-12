import ElasticProcessor from '@lib/processors/elastic-processor'

const TABLE_FILTERS = [
  {
    attribute: 'createdAt',
    label: 'Date Created',
    icon: 'el-icon-date',
    type: 'date',
  },
  {
    attribute: 'amount.subtotal',
    label: 'NET',
    type: 'numeric',
    icon: 'el-icon-tickets',
  },
  {
    attribute: 'fundingSource',
    label: 'Settlement Account',
    type: 'string',
    icon: 'el-icon-document',
  },
  {
    attribute: 'id',
    label: 'Order ID',
    type: 'string',
    icon: 'el-icon-document',
  },
  {
    attribute: 'status',
    type: 'select',
    icon: 'el-icon-document',
    values: [
      {
        label: 'Successfull',
        value: 'Successfull',
      },
      {
        label: 'Pending',
        value: 'Pending',
      },
      {
        label: 'Refunded',
        value: 'Refunded',
      },
      {
        label: 'Failed',
        value: 'Failed',
      },
    ],
  },
  {
    attribute: 'dateFinalised',
    type: 'date',
    icon: 'el-icon-document',
  },
]

const TABLE_COLUMNS = [
  {
    name: 'createdAt',
    label: 'Date Created',
    icon: 'el-icon-document',
    width: 140,
    format: 'dateTime',
  },
  {
    name: 'amount.subtotal',
    label: 'NET',
    icon: 'el-icon-document',
    format: 'dollar',
    width: 70,
    component: {
      props: {
        styleObj(val) {
          if (val < 0) {
            return { color: '#fc7168' }
          }

          return {}
        },
      },
    },
  },
  {
    name: 'fundingSource',
    label: 'Settlement Account',
    width: 100,
    format: 'account',
  },
  {
    name: 'orderId',
    label: 'Order ID',
    width: 70,
    type: 'string',
  },
  {
    name: 'status',
    label: 'Status',
    icon: 'el-icon-document',
    width: 100,
    component: {
      props: {
        styleObj(val) {
          switch (val) {
            case 'Pending': return { color: '#fbb241' }
            case 'Successfull': return { color: '#29d737' }
            case 'Failed': return { color: '#fc7168' }
            case 'Refunded': return { color: '#fc7168' }
            default: return {}
          }
        },
        badge(val) {
          switch (val) {
            case 'Pending': return {
              name: 'el-icon-time',
              pos: 'left',
            }
            case 'Successfull': return {
              name: 'el-icon-check',
              pos: 'left',
            }
            case 'Failed': return {
              name: 'el-icon-close',
              pos: 'left',
            }
            case 'Refunded': return {
              name: 'el-icon-refresh',
              pos: 'left',
            }
            default: return {}
          }
        },
      },
    },
  },
  {
    name: 'dateFinalised',
    label: 'Date Finalised',
    icon: 'el-icon-document',
    width: 100,
    format: 'dateTime',
  },

]

export default function(component) {
  return {
    processor: new ElasticProcessor({
      component,
      index: 'transactions',
      staticQuery: {
        filters: [
          {
            attribute: 'type',
            comparison: 'eq',
            value: 'settlement',
          },
        ],
      },
    }),
    filters: TABLE_FILTERS,
    columns: TABLE_COLUMNS,
  }
}
