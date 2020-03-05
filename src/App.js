import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './component/Nav';
import SideBar from './component/SideBar';
import Content from './component/Content';
import Footer from './component/Footer'
import ErrorBoundary from './component/ErrorBoundary';
import RightSideBar from './component/RightSideBar';
function App() {
  return (
    <div>
      <ErrorBoundary>
        <Nav></Nav>
      </ErrorBoundary>
      <ErrorBoundary>
        <SideBar></SideBar>
      </ErrorBoundary>
      <ErrorBoundary>
        <Content></Content>
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer></Footer>
      </ErrorBoundary>
      <ErrorBoundary>
        <RightSideBar></RightSideBar>
      </ErrorBoundary>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
