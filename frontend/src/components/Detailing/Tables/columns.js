const COLUMNS = [
  {
    title: 'Квартал',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '1 месяц',
    dataIndex: 'firstMonth',
    key: 'firstMonth',
    sorter: {
      compare: (a, b) => a.distance - b.distance,
    },
    showSorterTooltip: false,
  },
  {
    title: '2 месяц',
    dataIndex: 'secondMonth',
    key: 'secondMonth',
    sorter: {
      compare: (a, b) => a.distance - b.distance,
    },
    showSorterTooltip: false,
  },
  {
    title: '3 месяц',
    dataIndex: 'thirdMonth',
    key: 'thirdMonth',
    sorter: {
      compare: (a, b) => a.distance - b.distance,
    },
    showSorterTooltip: false,
  },
];

export default COLUMNS