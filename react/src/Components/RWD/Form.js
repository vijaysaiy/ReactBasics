import React from "react";

function Form() {
  return (
    <div>
      <div className="row">
        <h2>RWD using Bootstrap :Forms</h2>
      </div>
      <div className="col-lg-4">
        <div className="jumbotron">
          <h2>User Login</h2>
          <input type="text" className="form-control" placeholder="Username" />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <br />
          <button className="btn btn-primary ">Login</button>
          &nbsp;
          <button className="btn btn-warning ">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
