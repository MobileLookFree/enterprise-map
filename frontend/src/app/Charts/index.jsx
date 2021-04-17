import { PureComponent } from "react";
import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';
import './index.scss';

import { defaultOptions } from './const';

class Charts extends PureComponent {
  state = {
    chartInterval: null,
    options: defaultOptions,
  }

  componentDidMount() {
    const chartInterval = setInterval(() =>
      this.updateChart(), 1000);
    this.setState({ chartInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.chartInterval);
  }

  updateChart = () =>
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        series: [
          {
            name: 'Председатель',
            data: [
              Math.random() * 20,
              Math.random() * 20,
              Math.random() * 20,
              Math.random() * 20
            ]
          },
          {
            name: 'Ник Николс',
            data: [
              Math.random() * 20,
              Math.random() * 20,
              Math.random() * 20,
              Math.random() * 20
            ]
          },
          {
            name: 'Клетчатый',
            data: [
              Math.random() * 20,
              Math.random() * 20,
              Math.random() * 20,
              Math.random() * 20
            ]
          },
        ],
      }
    }));

  render() {
    const { options } = this.state;
    return (
      <div className='app-charts'>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    )
  }
}

export default Charts;