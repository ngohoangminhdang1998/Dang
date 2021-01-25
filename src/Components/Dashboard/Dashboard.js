import React, { Component } from "react";
import "./Dashboard.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { DataGrid} from "@material-ui/data-grid";
import Homepage from "../Homepage/Homepage";
import { connect } from "react-redux";
import CreateRequest from "../CreateRequest/CreateRequest";
// const rows = [
//     { id: 1, col1: "Hello", col2: "World" },
//     { id: 2, col1: "XGrid", col2: "is Awesome" },
//     { id: 3, col1: "Material-UI", col2: "is Amazing" },
//     { id: 4, col1: "Hello", col2: "World" },
//     { id: 5, col1: "XGrid", col2: "is Awesome" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" },
//     { id: 6, col1: "Material-UI", col2: "is Amazing" }

//   ];

//   const columns = [
//     { field: "id", hide: true },
//     { field: "col1", headerName: "Column 1", width: 150 },
//     { field: "col2", headerName: "Column 2", width: 150 }
//   ];
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateToHideSidebar: true,
    };
  }

  showOrHideSidebar = () => {
    this.setState({
      StateToHideSidebar: !this.state.StateToHideSidebar,
    });
  };
  render() {
    return (
      <Router>
        <div className="d-flex bg-light" id="wrapper">
          {/* Sidebar */}
          <template
            className={
              this.state.StateToHideSidebar ? "show-sidebar" : "hidden-sidebar"
            }
          >
            <div className="bg-light border-right" id="sidebar-wrapper">
              <div className="sidebar-heading" width="100%">
                <img
                  alt="admin"
                  src="https://upload.wikimedia.org/wikipedia/commons/2/29/FPT_Software_Logo.png"
                  width="150px"
                  height="50"
                />
              </div>
              <div className="list-group list-group-flush">
                <Link to="/homepage">
                  <span className="list-group-item list-group-item-action bg-light">
                    homepage
                  </span>
                </Link>
                <Link to="/createrequest">
                  <span className="list-group-item list-group-item-action bg-light">
                    Create request for leave
                  </span>
                </Link>
                {/* <a href="" className="list-group-item list-group-item-action bg-light">Overview</a>
              <a href="" className="list-group-item list-group-item-action bg-light">Events</a>
              <a href="" className="list-group-item list-group-item-action bg-light">Profile</a>
              <a href="" className="list-group-item list-group-item-action bg-light">Status</a> */}
              </div>
            </div>
          </template>
          {/* /#sidebar-wrapper */}
          {/* Page Content */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom navbar-position-fixed">
            <button
              className="btn btn-primary"
              id="menu-toggle"
              onClick={() => this.showOrHideSidebar()}
            >
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0 navbar-background-color">
                <li className="nav-item active">
                  <a className="nav-link text-white" href="localhost:3000">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="localhost:3000">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="localhost:3000"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      className="fa fa-home HomeIcon text-white"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right background-account"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item text-white" href="localhost:3000">
                      {this.props.SessionUser}
                    </a>
                    <a className="dropdown-item text-white" href="localhost:3000">
                      Seft information
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item text-white" href="localhost:3000">
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div
            id="page-content-wrapper"
            className={
              this.state.StateToHideSidebar
                ? "normal-display"
                : "show-full-width"
            }
          >
            {/* content here */}
            <div className="container-text">
              <Switch>
                <Route path="/homepage" component={Homepage} />
                <Route path="/createrequest" component={CreateRequest} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    SessionUser: state.SessionUser,
  };
};

export default connect(mapStateToProps)(Dashboard);

//<div style={{ height: 500, width: "100%" }}>
/* <DataGrid rows={rows} columns={columns} />
</div> */
