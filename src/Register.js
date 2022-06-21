import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.state = { email: "" };
    this.state = { password: "" };
    this.state = { detail_type: "" };
    this.state = { name: "" };
    this.state = { lisence: "" };
    this.state = { number: "" };
    this.state = { address: "" };

    this.state = {
      value: "distributors",      
      value: 'medstores',
      value: 'manufactures',
      hidden: true
    };

  }
 
  handleChange = (event) =>
  {
    event.preventDefault();
   this.setState({value: event.target.value});
   if(event.target.value == "medstores"){
    
    this.setState({ hidden: true });
   }
   if(event.target.value == "distributors")
   {
    this.setState({ hidden: true });
   }
   if(event.target.value == "manufactures")
   {
    this.setState({ hidden: !true });
   }
    this.setState({ detail_type: event.target.value });
    
  }

  mySubmitHandler = (event) => {
    event.preventDefault();

    var raw = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      detail_type: this.state.detail_type,
      name: this.state.name,
      lisence: this.state.lisence,
      number: parseInt(this.state.number),
      address: this.state.address
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://localhost:5001/api/Users", requestOptions)
    .then(
      this.props.history.push({
        pathname: "/Login"
      })
    )
  };
  myusernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  myemailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  mypasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  mydetail_typeHandler = (event) => {
    this.setState({ detail_type: event.target.value });
  };
  mynameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  mylicenseHandler = (event) => {
    this.setState({ lisence: event.target.value });
  };
  mynumberHandler = (event) => {
    this.setState({ number: event.target.value });
  };
  myaddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  render() {
    return (
      <Router>
        <div class="container">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-5 d-none d-lg-block">
                <img src="img/loginimg.jpeg"/>
                </div>
                <div class="col-lg-7">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form type="submit" class="user" onSubmit={this.mySubmitHandler}>
                      <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleFirstName"
                            placeholder="Username"
                            onChange={this.myusernameHandler}
                          />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="email"
                          onChange={this.myemailHandler}
                        />
                      </div>
                      {/* <div class = "d-flex flex-column"> */}
                      <div class="form-group row mb-4">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={this.mypasswordHandler}
                          />
                        </div>
                        <div class="ml-4">
                        <div class="col-sm-6 mb-3  mt-3 mb-sm-0">
                        
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="distributors">Distributor</option>
                            <option value="manufactures">Manufacture</option>
                            <option value="medstores">Medical store</option>
                          </select>
                        </div>
                        </div>
                        </div>
                        <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" onChange={this.mynameHandler} />
                    </div>
                    <div className="form-group">
                    <label>License</label>
                    <input type="text" className="form-control" placeholder="Enter License" onChange={this.mylicenseHandler} />
                    </div>
                    <div className="form-group">
                    <label>Number</label>
                    <input type="integer" className="form-control" placeholder="Enter Number" onChange={this.mynumberHandler}/>
                    </div>
                
    
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address"onChange={this.myaddressHandler} />
                </div>
                      {/* </div> */}
                      <button
                            type="submit"
                            onClick={this.check}
                            className="btn btn-dark btn-lg btn-block"
                          >
                            Sign Up
                          </button>
                        </form>
                    
                      
                      {/* <a
                        href="index.html"
                        class="btn btn-google btn-user btn-block"
                      >
                        <i class="fab fa-google fa-fw"></i> Register with Google
                      </a>
                      <a
                        href="index.html"
                        class="btn btn-facebook btn-user btn-block"
                      >
                        <i class="fab fa-facebook-f fa-fw"></i> Register with
                        Facebook
                      </a> */}
                    
                    
                    {/* <div class="text-center">
                      <a class="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="/">
                        Already have an account? Login!
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}