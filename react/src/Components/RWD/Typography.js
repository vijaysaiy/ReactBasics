import React from "react";

function RWDEx02() {
  return (
    <div>
      <h2>RWD using Bootstrap</h2>
      <span className="h4">
        About HTML
        <span className="small">
          Hypertext Markup Language (HTML) is the standard markup language for
          creating web pages and web applications. With Cascading Style Sheets
          (CSS) and JavaScript it forms a triad of cornerstone technologies for
          the World Wide Web.[3] Web browsers receive HTML documents from a web
          server or from local storage and render them into multimedia web
          pages. HTML describes the structure of a web page semantically and
          originally included cues for the appearance of the document.
        </span>
        Concepts
      </span>
      <div className="row">
        <h1>BootStrap, Text alignment classes</h1>
        <p className="text-left">Left Side Text</p>
        <p className="text-right">Right Side Text</p>
        <p className="text-center">Center Text</p>
        <p className="text-justify">Justify Text</p>
      </div>
      <div className="row">
          <h1>BootStrap,text case classes</h1>
          <p className="text-lowercase">see the TEXT CASE</p>
          <p className="text-uppercase">see the TEXT CASE</p>
          <p className="text-capitalise">see the TEXT CASE</p>
      </div>
     
    </div>
  );
}

export default RWDEx02;
