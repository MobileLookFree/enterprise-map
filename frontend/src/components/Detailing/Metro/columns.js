const COLUMNS = [
  {
    title: 'Станция',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Линия',
    dataIndex: 'line',
    key: 'line',
  },
  {
    title: 'Расстояние, км',
    dataIndex: 'distance',
    key: 'distance',
    sorter: {
      compare: (a, b) => a.distance - b.distance,
      multiple: 2,
    },
    showSorterTooltip: false,
  },
];

export default COLUMNS