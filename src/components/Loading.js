import React from 'react';

const LoadingArray = [1,2,3,4,5];
const Loader = (props) => (
    LoadingArray.map( (i,index) => ( 
        <div key={index} className="card">
            <div className="content-placeholder">
                <div className="animated-background content-placeholder-header"></div>
                <div className="animated-background content-placeholder-subheader"></div>
                <div className="animated-background content-placeholder-header"></div>
                <div className="animated-background content-placeholder-subheader"></div>
                <div className="animated-background content-placeholder-header"></div>
            </div>
            <div className="image-placeholder animated-background"></div>
        </div>
    ))
);    

export default Loader;