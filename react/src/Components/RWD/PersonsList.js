import React from "react";

function PersonsList() {
  let people = [
    { id: 1, name: "Kiran", job: "engineer", salary: "100000" },
    { id: 2, name: "Vijay", job: "engineer", salary: "100000" },
    { id: 3, name: "Suraj", job: "engineer", salary: "100000" },
    { id: 4, name: "Ankit", job: "engineer", salary: "100000" },
    { id: 5, name: "Bharath", job: "engineer", salary: "100000" },
  ];
  return (
    <div>
      <h1>List of People</h1>
            
      <table className="table table-bordered table-striped table-hover col-lg-">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {people.map((x) => (
            <tr>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.job}</td>
              <td>{x.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
       
    </div>
  );
}

export default PersonsList;
