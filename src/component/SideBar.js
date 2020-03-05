import React from 'react';
import SidebarLogo from './SideBarLogo';
import SidebarUserPanel from './SideBarUserPanel';
import NavTreeView from './NavTreeView';
import NavItem from './NavItem';


let tempSideBar = 
{
    sidebarList: [
      {
        id:'1',
        menuName: '1',
        dept: 0,
        position: 0,
        menuType: 'open',
        isPlicy: 'N',
        tableName: 'a',
        parentId: '0',
        children : null
      },
      {
        id:2,
        menuName: '2',
        dept: 1,
        position: 1,
        menuType: 'view',
        isPlicy: 'N',
        tableName: 'b',
        parentId: '1',
        children : null
      },
      {
        id:'3',
        menuName: '3',
        dept: 2,
        position: 5,
        menuType: 'view',
        isPlicy: 'N',
        tableName: 'c',
        parentId: '1',
        children : null
      },
      {
        id:'4',
        menuName: '4',
        dept: 0,
        position: 2,
        menuType: 'open',
        isPlicy: 'N',
        tableName: 'd',
        parentId: '0',
        children : null
      },
      {
        id:'5',
        menuName: '5',
        dept: 1,
        position: 3,
        menuType: 'view',
        isPlicy: 'N',
        tableName: 'e',
        parentId: '4',
        children : null
      },
      {
        id:'6',
        menuName: '6',
        dept: 0,
        position: 4,
        menuType: 'open',
        isPlicy: 'N',
        tableName: 'f',
        parentId: '0',
        children : null
      }
    ]
  };


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarList: tempSideBar.sidebarList
    }
  }

  render() {
    var copySideBarList = JSON.parse(JSON.stringify( this.state.sidebarList ));
    let copyList = list_to_tree(copySideBarList);

    // const list = this.state.sidebarList.map(
    //   info => (<NavItem key={info.position} menuName={info.menuName} />)
    // );

    const list = copyList.map(
      (info)=>{ 
        if(info.children.length==0){
          return (<NavItem key={info.id} menuName={info.menuName} />) 
        }
        else{
          return (<NavTreeView key={info.id} menuName={info.menuName} children={info.children}></NavTreeView>)
        }
        
      }
    );
    // const list = (<NavItem key={1} menuName='test' />);
    console.log(copySideBarList.length);
    console.log(copyList.length);
    console.log(copyList);

    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <SidebarLogo></SidebarLogo>
        {/* <!-- Sidebar --> */}
        <div className="sidebar">
          <SidebarUserPanel></SidebarUserPanel>
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* <NavTreeView></NavTreeView> */}
              {list}
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}
      </aside>
    );
  }
};

function list_to_tree(list) {
  var map = {}, node, roots = [], i;
  for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
  }
  for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== "0") {
          // if you have dangling branches check that map[node.parentId] exists
          list[map[node.parentId]].children.push(node);
      } else {
          roots.push(node);
      }
  }
  return roots;
}

export default SideBar;
