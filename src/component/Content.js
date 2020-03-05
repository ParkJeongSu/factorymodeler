import React from 'react';

class Content extends React.Component {
  render() {
    return (
        <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>jsGrid</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">jsGrid</li>
                </ol>
              </div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </section>
    
        {/* <!-- Main content --> */}
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">jsGrid</h3>
            </div>
            {/* <!-- /.card-header --> */}
            <div className="card-body">
              <div id="jsGrid1"></div>
            </div>
            {/* <!-- /.card-body --> */}
          </div>
          {/* <!-- /.card --> */}
        </section>
        {/* <!-- /.content --> */}
      </div>
    );
  }
};


export default Content;
