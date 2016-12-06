import React, { PropTypes } from 'react';
import { VictoryPie } from 'victory';

const PollChart = ({options, colorScale}) => (
  <VictoryPie
    data={options}
    x='name'
    y='votes'
    colorScale={colorScale}
    innerRadius={100}
    labels={() => {}}
  />
);
PollChart.propTypes = {
  options: PropTypes.array,
  colorScale: PropTypes.array
};

export default PollChart;
