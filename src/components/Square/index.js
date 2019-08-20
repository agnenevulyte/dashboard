import React, { Component } from "react";
import styled, { keyframes } from 'styled-components';
// import CanvasJSReact from './canvasjs.react';
import "./styles.css";
// import "./canvasjs.min.js";

// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Square extends Component {
  constructor() {
    super();
    this.state = {
      number: null
    };
  }

  componentWillMount() {
    this.fetchNumbers();
    this.setState({ number: 0 });
  }


  fetchNumbers = () => {
    let number = 0;

    setInterval(() => {
      number = Math.floor(Math.random() * 1000);

      this.setState({
        number
      });

    }, 5000);
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


		// const options = {
    //   animationEnabled: true,
    //   // animationDuration: 1000,
		// 	exportEnabled: true,
		// 	theme: "light2", //"light1", "dark1", "dark2"
		// 	title:{
		// 		text: ""
    //   },
    //   axisX:{
    //     gridThickness: 0,
    //     tickLength: 0,
    //     lineThickness: 0,
    //     labelFormatter: function(){
    //       return " ";
    //     }
    //   },
    //   axisY:{
    //     interval: 250,
    //     maximum: 1000
    //   },
		// 	data: [{
		// 		type: "column", //change type to bar, line, area, pie, etc
		// 		dataPoints: [
		// 			{ y: number }
		// 		]
    //   }]
    // }

    const myAnim = keyframes`
    from {
      height: 0px;
    }
    to {
      height: ${(number * 100) / 1000}px
    }
    `;

    const MyDiv = styled.div`
      height: ${(number * 100) / 1000}px;
      width: 100px;
      marging-left: 20px;
      position: absolute;
      z-index: 2;
      bottom: 0;
      animation: ${myAnim} 0.5s ease;
    `;

    return (
      <div className="squareWrapper">
        <div className={this.calculateClassName()}>
          <h1>{number}</h1>
          <p>{paragraph}</p>
        </div>
        <div className={`chart chart__${this.props.name}`}>
            {/* <div style={{ height: ((number/1000)*100) }} className={this.calculateClassNameForGraph()}></div> */}
            {/* <CanvasJSChart options = {options} onRef={ref => this.chart = ref}	/> */}
              <MyDiv className={this.calculateClassNameForGraph()}/>
        </div>
      </div>
    );
  }
}
