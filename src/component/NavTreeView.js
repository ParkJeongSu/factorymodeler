import React from 'react';
import NavItem from './NavItem';

class NavTreeView extends React.Component {
  render() {
    if(this.props.children.length==0){
      return (
        <NavItem key={this.props.id} menuName={this.props.menuName}></NavItem>
      );
    }
    else{
      
      let childrenList = JSON.parse(JSON.stringify(this.props.children));
      const list = childrenList.map(
        (info)=>{ 
          if(info.children.length==0){
            return (<NavItem key={info.id} menuName={info.menuName} />) 
          }
          else{
            return (<NavTreeView key={info.id} menuName={info.menuName} children={info.children}></NavTreeView>)
          }
          
        }
      );

      return (
        <>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-chart-pie"></i>
              <p>{this.props.menuName}<i className="right fas fa-angle-left"></i></p>
            </a>
            <ul className="nav nav-treeview">
              {list}
            </ul>
          </li>
        </>
      );
    }
    
  }
};


export default NavTreeView;
