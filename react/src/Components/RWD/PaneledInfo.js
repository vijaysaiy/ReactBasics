import React from "react";
import image from "./modi.webp";

function PaneledInfo() {
  return (
    <div>
      <h1>RWD using Bootstrap, Ex-08</h1>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Kiran Kumar</h3>
        </div>
        <div class="panel-body">
          <div class="col-lg-10">
            <div class="row vertical-align">
              <div class="col-lg-4">
                <img class="imageClass" src={image} height="150" width="150" />
              </div>
            
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-6"> Gender </div>
                <div class="col-lg-6"> : Male </div>
              </div>
              <div class="row">
                <div class="col-lg-6"> Date of Birth </div>
                <div class="col-lg-6"> : 19-Sept-1979 </div>
              </div>
              <div class="row">
                <div class="col-lg-6"> Contact Preference </div>
                <div class="col-lg-6"> : Mobile </div>
              </div>
              <div class="row">
                <div class="col-lg-6"> Phone </div>
                <div class="col-lg-6"> : 9010894993 </div>
              </div>
              <div class="row">
                <div class="col-lg-6"> Email </div>
                <div class="col-lg-6"> : kiranpvn@gmail.com </div>
              </div>
              <div class="row">
                <div class="col-lg-6"> Department </div>
                <div class="col-lg-6"> : Software Training </div>
              </div>
              <div class="row">
                <div class="col-lg-6"> Is Active </div>
                <div class="col-lg-6"> : Yes </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaneledInfo;
