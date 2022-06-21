//import "./Manufactures.css"
import React, { Component } from "react";
import axios from "axios";

export default class Manufactures extends Component {
  state = {
    manufactures: []
  }

  componentDidMount() {
    axios.get(`https://localhost:5001/api/Manufactures`)
      .then(res => {
        const manufactures = res.data;
        console.log(manufactures)
        this.setState({ manufactures });
      })
  }

  render() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Orders</h3>
      
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Manufactures Name</th>
          <th className="widgetLgTh">Manufactures Address</th>
          <th className="widgetLgTh">Manufactures Lisence</th>
        </tr>
        {
        this.state.manufactures
            .map(manufactures =>
              <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">{manufactures.manufactures_name}</span>
              </td>
              <td className="widgetLgDate">{manufactures.manufactures_lisence}</td>
              <td className="widgetLgAmount">{manufactures.manufactures_address}</td>
            </tr>
        )
      }
      </table>
    </div>
  );
}
}