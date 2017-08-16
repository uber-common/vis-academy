import React, {Component} from 'react';
import autobind from 'autobind-decorator';

import {
  XYPlot,
  VerticalBarSeries,
  AreaSeries,
  Crosshair,
  DiscreteColorLegend,
  Hint,
  LineSeries,
  MarkSeries,
  LineMarkSeries,
  VerticalGridLines,
  YAxis,
  XAxis
} from 'react-vis';

const data = [
  {hour: 0, pickups: 246, dropoffs: 297, fare: 3815, tip: 464.35, total: 4707.53, avgDistance: 3.41, avgDuration: 1241.39}, 
  {hour: 1, pickups: 173, dropoffs: 189, fare: 2481.5, tip: 348.01, total: 3095.03, avgDistance: 3.59, avgDuration: 680.83}, 
  {hour: 2, pickups: 98, dropoffs: 103, fare: 1109, tip: 130.99, total: 1376.33, avgDistance: 2.82, avgDuration: 564.54}, 
  {hour: 3, pickups: 59, dropoffs: 74, fare: 1028.5, tip: 102.99, total: 1232.02, avgDistance: 3.95, avgDuration: 739.12}, 
  {hour: 4, pickups: 53, dropoffs: 42, fare: 604, tip: 50.41, total: 728.34, avgDistance: 4.11, avgDuration: 685.29}, 
  {hour: 5, pickups: 102, dropoffs: 92, fare: 1353.5, tip: 167.04, total: 1717.99, avgDistance: 4.25, avgDuration: 627.84}, 
  {hour: 6, pickups: 294, dropoffs: 251, fare: 2979, tip: 423.07, total: 3706.9, avgDistance: 3.25, avgDuration: 915.3}, 
  {hour: 7, pickups: 466, dropoffs: 427, fare: 4696.5, tip: 648.11, total: 5804.76, avgDistance: 2.67, avgDuration: 654.51}, 
  {hour: 8, pickups: 574, dropoffs: 553, fare: 6006.5, tip: 843.3, total: 7395.96, avgDistance: 2.31, avgDuration: 740.33}, 
  {hour: 9, pickups: 542, dropoffs: 542, fare: 6418, tip: 919.51, total: 7901.02, avgDistance: 2.34, avgDuration: 843.92}, 
  {hour: 10, pickups: 434, dropoffs: 476, fare: 5883.5, tip: 843.46, total: 7273.23, avgDistance: 2.57, avgDuration: 883.62}, 
  {hour: 11, pickups: 510, dropoffs: 458, fare: 5123, tip: 645.59, total: 6234.75, avgDistance: 2.2, avgDuration: 790.96}, 
  {hour: 12, pickups: 468, dropoffs: 495, fare: 6029, tip: 783.06, total: 7312.93, avgDistance: 2.53, avgDuration: 849.84}, 
  {hour: 13, pickups: 435, dropoffs: 442, fare: 5355.5, tip: 679.71, total: 6553.4, avgDistance: 2.59, avgDuration: 818.49}, 
  {hour: 14, pickups: 526, dropoffs: 480, fare: 6302, tip: 806.23, total: 7686.69, avgDistance: 2.86, avgDuration: 887.62}, 
  {hour: 15, pickups: 453, dropoffs: 502, fare: 6881.5, tip: 944.8, total: 8465.67, avgDistance: 3.05, avgDuration: 994.37}, 
  {hour: 16, pickups: 400, dropoffs: 398, fare: 5339.72, tip: 678.53, total: 6807.19, avgDistance: 2.93, avgDuration: 947.21}, 
  {hour: 17, pickups: 503, dropoffs: 449, fare: 5684, tip: 844.01, total: 7524.62, avgDistance: 2.93, avgDuration: 909.31}, 
  {hour: 18, pickups: 602, dropoffs: 595, fare: 7812.01, tip: 1038.12, total: 10143.54, avgDistance: 3, avgDuration: 943.7}, 
  {hour: 19, pickups: 645, dropoffs: 678, fare: 7822, tip: 1172.88, total: 10378.9, avgDistance: 2.62, avgDuration: 779.28}, 
  {hour: 20, pickups: 647, dropoffs: 662, fare: 8087, tip: 1301.54, total: 10513.01, avgDistance: 2.93, avgDuration: 757.38}, 
  {hour: 21, pickups: 662, dropoffs: 653, fare: 7804.5, tip: 1166.3, total: 9952.56, avgDistance: 2.93, avgDuration: 864.04}, 
  {hour: 22, pickups: 609, dropoffs: 609, fare: 7516.5, tip: 1153.29, total: 9623.72, avgDistance: 3.15, avgDuration: 861.44}, 
  {hour: 23, pickups: 498, dropoffs: 532, fare: 6779.5, tip: 999.24, total: 8595.7, avgDistance: 3.32, avgDuration: 718.95}
];

const basicStyle = {
  boxShadow: "0 1px 3px 0 rgba(0,0,0,0.20)",
  width: 280
};
const dropoffs = data.map(d => ({x: d.hour + 0.5, y: d.dropoffs}));
const pickups = data.map(d => ({x: d.hour + 0.5, y: d.pickups}));

export function BarChartBasic() {
  return (<div className="bar-chart-basic"
    style={basicStyle}>
    <XYPlot height={140} width={280}>
      <XAxis />
      <YAxis />
      <VerticalBarSeries data={pickups} />
    </XYPlot></div>);
}

export function BarChartMargins() {
  return (<div className="bar-chart-margins"
    style={basicStyle}>
    <XYPlot height={140} width={280}
      margin={{left: 40, right: 20, top: 10, bottom: 30}}>
      <XAxis />
      <YAxis />
      <VerticalBarSeries data={pickups} />
    </XYPlot></div>);
}

export function BarChartXDomain() {
  return (<div className="bar-chart-x-domain"
    style={basicStyle}>
    <XYPlot height={140} width={280}
      xDomain={[0, 24]}
      margin={{left: 40, right: 20, top: 10, bottom: 30}}>
      <XAxis />
      <YAxis />
      <VerticalBarSeries data={pickups} />
    </XYPlot></div>);
}

export function BarChartFormattedAxis() {
  return (<div className="bar-chart-formatted-axis"
    style={basicStyle}>
    <XYPlot height={140} width={280}
      xDomain={[0, 24]}
      margin={{left: 40, right: 20, top: 10, bottom: 30}}>
      <XAxis
        tickValues={[0, 6, 12, 18, 24]}
        tickFormat={(d) => (d % 24) >= 12 ? (d % 12 || 12) + 'PM' : (d % 12 || 12) + 'AM'}
      />
      <YAxis tickFormat={(d) => (d / 100).toFixed(0) + '%'}
      />
      <VerticalBarSeries data={pickups} />
    </XYPlot></div>);
}

export function BarChartYDomain() {
  return (<div className="bar-chart-y-domain"
    style={basicStyle}>
    <XYPlot height={140} width={280}
      xDomain={[0, 24]}
      yDomain={[0, 1000]}
      margin={{left: 40, right: 20, top: 10, bottom: 30}}>
      <XAxis
        tickValues={[0, 6, 12, 18, 24]}
        tickFormat={(d) => (d % 24) >= 12 ? (d % 12 || 12) + 'PM' : (d % 12 || 12) + 'AM'}
      />
      <YAxis tickFormat={(d) => (d / 100).toFixed(0) + '%'}
      />
      <VerticalBarSeries data={pickups} />
    </XYPlot></div>);
}

export function BarChartCustomColor() {
  return (<div className="bar-chart-custom-color"
    style={basicStyle}>
    <XYPlot height={140} width={280}
      xDomain={[0, 24]}
      yDomain={[0, 1000]}
      margin={{left: 40, right: 20, top: 10, bottom: 30}}>
      <XAxis
        tickValues={[0, 6, 12, 18, 24]}
        tickFormat={(d) => (d % 24) >= 12 ? (d % 12 || 12) + 'PM' : (d % 12 || 12) + 'AM'}
      />
      <YAxis tickFormat={(d) => (d / 100).toFixed(0) + '%'}
      />
      <VerticalBarSeries
        color='#0080FF'
        data={pickups} />
    </XYPlot></div>);
}

export function LineChartsBasic() {
  return (<div className="line-chart-basic"
    style={basicStyle}>
    <XYPlot height={140} width={280}
      xDomain={[0, 24]}
      yDomain={[0, 1000]}
      margin={{left: 40, right: 20, top: 10, bottom: 30}}>
      <XAxis
        tickValues={[0, 6, 12, 18, 24]}
        tickFormat={(d) => (d % 24) >= 12 ? (d % 12 || 12) + 'PM' : (d % 12 || 12) + 'AM'}
      />
      <YAxis tickFormat={(d) => (d / 100).toFixed(0) + '%'}
      />
      <LineSeries data={pickups} color='#0080FF'/>
      <LineSeries data={dropoffs} color='#FF0080'/>
    </XYPlot>
  </div>);
}

export function LineChartsInteraction() {
  class LineChart extends Component {
    constructor(props) {
      super(props);
      this.state = {hour: null};
    }

    render() {
      const {hour} = this.state;
   
      return (<XYPlot
        margin={{left: 40, right: 20, top: 10, bottom: 30}}
        height={140}
        onMouseLeave={()=> {this.setState({hour: null});}}
        width={280}
        xDomain={[0, 24]}
        yDomain={[0, 1000]}
      >
      <XAxis
        tickValues={[0, 6, 12, 18, 24]}
        tickFormat={(d) => (d % 24) >= 12 ? (d % 12 || 12) + 'PM' : (d % 12 || 12) + 'AM'}
      />
      <YAxis tickFormat={(d) => (d / 100).toFixed(0) + '%'}
      />
      <LineSeries onNearestX={(d) => this.setState({hour: d.x})} data={pickups} color='#0080FF'/>
      <LineSeries data={dropoffs} color='#FF0080'/>
      </XYPlot>);
    }
  }

  return (<div className="line-chart-interaction" style={basicStyle}>
    <LineChart />
  </div>);
}

export function LineChartsDynamicMark() {
  class LineChart extends Component {
    constructor(props) {
      super(props);
      this.state = {hour: null};
    }

    render() {
      const {hour} = this.state;
      const marks = hour === null ? [] :
        [pickups, dropoffs].map((d, i) => ({
          ...d.find(e => e.x === hour),
          color: i ? '#FF0080' : '#0080FF'}))
      return (<XYPlot
        margin={{left: 40, right: 20, top: 10, bottom: 30}}
        height={140}
        onMouseLeave={()=> {this.setState({hour: null});}}
        width={280}
        xDomain={[0, 24]}
        yDomain={[0, 1000]}
      >
      <XAxis
        tickValues={[0, 6, 12, 18, 24]}
        tickFormat={(d) => (d % 24) >= 12 ? (d % 12 || 12) + 'PM' : (d % 12 || 12) + 'AM'}
      />
      <YAxis tickFormat={(d) => (d / 100).toFixed(0) + '%'}
      />
      <LineSeries onNearestX={(d) => {console.log(d);this.setState({hour: d.x})}} data={pickups} color='#0080FF'/>
      <LineSeries data={dropoffs} color='#FF0080'/>
      <MarkSeries data={marks} colorType='literal' size='3'/>
      </XYPlot>);
    }
  }

  return (<div className="line-chart-dynamic-mark" style={basicStyle}>
    <LineChart />
  </div>);
}