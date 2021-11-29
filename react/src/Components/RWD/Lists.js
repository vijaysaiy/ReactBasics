import React from "react";

function RWDEx04() {
  return (
    <div>
      <div className="row">
        <h2>RWD using Bootstrap</h2>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <ul className="list-group">
            <li className="list-group-item">Telugu</li>
            <li className="list-group-item">Hindi</li>
            <li className="list-group-item">English</li>
            <li className="list-group-item">
              Tamil
              <span className="badge">Optional</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RWDEx04;
