import React from "react";

function Panels() {
  return (
    <div>
      <div className="row">
        <h2>RWD using Bootstrap :Panels</h2>
      </div>
      <div className="row">
        <div className="panel panel-success">
          <div className="panel-heading">Panel heading</div>
          <div className="panel-body">Panel Content</div>
          <div className="panel-footer">Panel Footer</div>
        </div>
      </div>
    </div>
  );
}

export default Panels;
