import React, { Component } from "react";
import CanvasJSReact from './canvasjs.react';
import "./styles.css";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Square extends Component {
  constructor() {
    super();
    this.state = {
      number: null
    };
  }

  componentWillMount() {
    this.fetchNumbers();
  }


  fetchNumbers = () => {
    let number = 0;

    setInterval(() => {
      number = Math.floor(Math.random() * 1000);

      this.setState({
        number
      });

    }, 1000);
  };

  calculateClassName = () => {
    let myClassName = "square square__";
    const number = this.state.number;
    if (number < 300) return `${myClassName}green`;
    if (number < 700) return `${myClassName}orange`;
    if (number < 1000) return `${myClassName}red`;
  };

  calculateClassNameForGraph = () => {
    let myClassName = "bar bar__";
    const number = this.state.number;
    if (number < 300) return `${myClassName}small`;
    if (number < 700) return `${myClassName}medium`;
    if (number < 1000) return `${myClassName}large`;
  };


//   drawChart = (number) => {
//     var max = 1000;
//     var chart = document.querySelector(`.chart__${this.props.name}`);
//     console.log(chart)
//     var barwidth = 50;
// 	var left = 0;
// 	  var newbar = document.createElement('div');
// 	  newbar.setAttribute("class", 'bar');
// 	  newbar.style.width=barwidth+"px";
//       newbar.style.height=((number/max)*100)+"px";
//       console.log('=========' + newbar.style.height)
// 	  newbar.style.left=left+"px";
// 	  chart.appendChild(newbar);
// 	  left += (barwidth+10);
//   };


  render() {
    const { paragraph } = this.props;
    const { number } = this.state;

    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: ""
			},
			data: [{
				type: "column",	
				dataPoints: [
					{ x: 0, y: number }
				]
      }]
    }

    return (
      <div className="squareWrapper">
        <div className={this.calculateClassName()}>
          <h1>{number}</h1>
          <p>{paragraph}</p>
        </div>
        <div className={`chart chart__${this.props.name}`}>
            <div style={{ height: ((number/1000)*100) }} className={this.calculateClassNameForGraph()}></div>
            {/* <CanvasJSChart options = {options}	/> */}
        </div>
      </div>
    );
  }
}
