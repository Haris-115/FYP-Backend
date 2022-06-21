import React, { Component } from "react";


export default class WidgetLg extends Component {
  componentDidMount(){
    const fs = require('fs');
const [A, B, C] = JSON.parse(fs.readFileSync('input'));
function getA(){
return A;
}
function getB(callback) {
setTimeout(() => {
callback(B);
}, 10);}
function getC() {
return Promise.resolve().then( () => C);
}
function getABC(){
  return A;
}
getABC().then( (arr) => console. log(arr));
}
  render() {
    return (
      <></>
      );
    }
    }