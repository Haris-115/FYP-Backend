import "./WidgetLg.css";
import React, { Component } from "react";
import axios from "axios";

export default class WidgetLg extends Component {
  state = {
    distributors: []
  }

  componentDidMount() {
    axios.get(`https://localhost:5001/api/Distributors`)
      .then(res => {
        const distributors = res.data;
        console.log(distributors)
        this.setState({ distributors });
      })
  }

  state = {
    orders: []
  }

  componentDidMount() {
    axios.get(`https://localhost:5001/api/Orders/OrderDetails/1`)
      .then(res => {
        const orders = res.data;
        console.log(orders)
        this.setState({ orders });
      })
  }

  render() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Orders</h3>
      
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Medicine Name</th>
          <th className="widgetLgTh">Quantity</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Total Price</th>
        </tr>
        {
        this.state.orders
            .map(orders =>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.clipartmax.com/png/middle/28-280979_medical-logo-medical-cross-symbol-png.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{orders.medicines_name}</span>
          </td>
          <td className="widgetLgDate">{orders.quantity}</td>
          <td className="widgetLgAmount">{orders.medicines_price} Pkr</td>
          <td className="widgetLgStatus">{orders.quantity*orders.medicines_price}</td>
        </tr>
        )
      }
      </table>
    </div>
  );
}
}