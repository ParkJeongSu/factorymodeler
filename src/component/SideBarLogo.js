import React from 'react';
import image from './../dist/img/AdminLTELogo.png';

class SideBarLogo extends React.Component {
  render() {
    return (
        <div>
          <a href="index3.html" className="brand-link">
            {/* <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style= {{opacity: .8}}/> */}
            <img src={image} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style= {{opacity: .8}}/>
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>
        </div>
    );
  }
};


export default SideBarLogo;
