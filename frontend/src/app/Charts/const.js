export const defaultOptions = {
  title: {
    text: 'Статистика преступности'
  },
  yAxis: {
    title: {
      text: 'Преступления'
    }
  },
  series: [
    {
      name: 'Председатель',
      data: [1, 2, 3]
    },
    {
      name: 'Ник Николс',
      data: [1, 2, 3].reverse(),
    },
    {
      name: 'Клетчатый',
      data: [2, 2, 2],
    }
  ]
}