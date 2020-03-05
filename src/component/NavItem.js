import React from 'react';

class NavItem extends React.Component {
  render() {
    return (
      <li className="nav-item">
      <a href="#" className="nav-link">
        <i className="far fa-dot-circle nav-icon"></i>
        <p>{this.props.menuName}</p>
      </a>
    </li>
    );
  }
};


export default NavItem;
