import "./WidgetSm.css";
import axios from 'axios';
import React, { Component } from "react";

import { Visibility } from "@material-ui/icons";

export default class WidgetSm extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://localhost:5001/api/Medstores`)
      .then(res => {
        const persons = res.data;
        console.log(persons)
        this.setState({ persons });
      })
  }
  render() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {
          this.state.persons
            .map(person =>
        <li className="widgetSmListItem" key={person.medstores_id}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{person.medstores_name}</span>
            <span className="widgetSmUserTitle">{person.medstores_address}</span>
          </div>
        </li>
            )
      }
      </ul>
    </div>
  );
}
}
