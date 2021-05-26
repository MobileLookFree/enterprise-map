import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';
import './index.scss';

import { defaultOptions } from './const';

const Graphs = ({ series }) => {
  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => setOptions(prevOptions => ({
    ...prevOptions,
    series,
  })), [series]);

  return (
    <div className='app-ui-graphs'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default Graphs;