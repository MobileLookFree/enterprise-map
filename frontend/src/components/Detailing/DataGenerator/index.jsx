import { PureComponent } from 'react';
import { defaultData } from './const';

class DataGenerator extends PureComponent {
  state = {
    interval: null,
  }

  componentDidMount() {
    const { onChange } = this.props
    onChange && onChange(defaultData);
    const interval = setInterval(() =>
      this.generateData(), 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval); // only direct link
  }

  getRandomData = () => [
    +(Math.random() * 20 * 10000).toFixed(2),
    +(Math.random() * 20 * 10000).toFixed(2),
    +(Math.random() * 20 * 10000).toFixed(2),
  ]

  generateData = () => {
    const { onChange } = this.props
    const data = [
      {
        name: '1 кватал',
        data: this.getRandomData(),
      },
      {
        name: '2 квартал',
        data: this.getRandomData(),
      },
      {
        name: '3 квартал',
        data: this.getRandomData(),
      },
      {
        name: '4 квартал',
        data: this.getRandomData(),
      }
    ];
    onChange && onChange(data);
  }
  
  render() {
    return null;
  }
}

export default DataGenerator;