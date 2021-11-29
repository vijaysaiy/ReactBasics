import React from 'react'

function RWDEx01() {
    return (
        <div>
            <h2>RWD using Bootstrap</h2>
            <h3>Screen Size</h3>
            <div className="visible-lg" >
               <h2 style={{color:"red"}}> Large Screen Display</h2>
            </div>
            
            <div className="visible-md">
            <h2 style={{color:"green"}}> Medium Screen Display</h2>
            </div>
            
            <div className="visible-sm">
            <h2 style={{color:"blue"}}> Small Screen Display</h2>
            </div>
            <div className="visible-xs">
            <h2 style={{color:"orange"}}> Extra Small Screen Display</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="greenBorderClass">
                    <h3>Div1:First column</h3>
                </div>                        
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="greenBorderClass">
                    <h3>Div2:Second column</h3>
                </div>                        
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="greenBorderClass">
                    <h3>Div3:Third column</h3>
                </div>                        
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="greenBorderClass">
                    <h3>Div4:Fourth column</h3>
                </div>                        
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="greenBorderClass">
                    <h3>Div5:Fifth column</h3>
                </div>                        
                </div>
            
            </div>
            
            
        </div>
    )
}

export default RWDEx01
