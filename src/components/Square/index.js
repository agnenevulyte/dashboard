import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import './styles.css';
export default class Square extends Component {
  constructor() {
    super();
    this.state = {
      number: 100
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
    let myClassName = 'square square__';
    const number = this.state.number;
    if (number < 300) return `${myClassName}green`;
    if (number < 700) return `${myClassName}orange`;
    if (number < 1000) return `${myClassName}red`;
  };

  calculateClassNameForGraph = () => {
    let myClassName = 'bar bar__';
    const number = this.state.number;
    if (number < 300) return `${myClassName}small`;
    if (number < 700) return `${myClassName}medium`;
    if (number < 1000) return `${myClassName}large`;
  };

  render() {
    const { paragraph } = this.props;
    const { number } = this.state;

    const myAnim = keyframes`
      from {
        height: 0px;
      }
      to {
        height: ${(number * 100) / 1000}px;
      }
    `;

    const MyDiv = styled.div`
      height: ${(number * 100) / 1000}px;
      width: 100px;
      margin-left: 20px;
      position: absolute;
      z-index: 2;
      bottom: 0;
      background-color: red;
      border: 1px solid red;
      animation: ${myAnim} 0.5s ease;
    `;

    // transition: transform 300ms ease-in-out;

    return (
      <div className="squareWrapper">
        <div className={this.calculateClassName()}>
          <h1>{number}</h1>
          <p>{paragraph}</p>
        </div>

        <div className={`chart chart__${this.props.name}`}>
          <MyDiv />
        </div>
      </div>
    );
  }
}
