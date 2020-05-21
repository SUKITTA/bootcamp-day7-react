import React, { Component } from "react";

class RoaMaiTingKan extends Component {
  state = {
    name: "",
    job: null
  };
  render() {
    return (
      <div>
        <h1>เราไม่ทิ้งกัน</h1>
        <form>
          <label>
            Name:
            <input
              placeholder={"your name"}
              onChange={e => {
                this.setState({
                  name: e.target.value
                });
              }}
            />
          </label>
          <br />
          <label>
            Job:
            <select
              value="default"
              onChange={event => {
                this.setState({
                  job: event.target.value
                });
              }}
            >
              <option value="default" disabled>
                Select Your Job
              </option>
              <option value="farmer">Farmer</option>
              <option value="driver">Driver</option>
              <option value="programer">Programer</option>
            </select>
          </label>
          <br />
          <h3>We're using AI to check</h3>
          <button>submit</button>
        </form>
        <hr />
        <div>
          <h1>Result</h1>
          <p>Name: {this.state.name} </p>
          <p>Job: {this.state.job}</p>
          <p>
            คุณจะได้เงิน 5000 มั้ย: {this.state.job === "farmer" ? "yes" : "No"}{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default function() {
  return <RoaMaiTingKan />;
}
