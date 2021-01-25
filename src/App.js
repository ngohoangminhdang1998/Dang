import React, { Component } from 'react';
import Login from './Components/Login/Login';
import { connect } from "react-redux";
//import { DataGrid} from "@material-ui/data-grid";
import Dashboard from './Components/Dashboard/Dashboard';
// const rows = [
//   { id: 1, col1: "Hello", col2: "World" },
//   { id: 2, col1: "XGrid", col2: "is Awesome" },
//   { id: 3, col1: "Material-UI", col2: "is Amazing" },
//   { id: 4, col1: "Hello", col2: "World" },
//   { id: 5, col1: "XGrid", col2: "is Awesome" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" },
//   { id: 6, col1: "Material-UI", col2: "is Amazing" }
  
// ];

// const columns = [
//   { field: "id", hide: true },
//   { field: "col1", headerName: "Column 1", width: 150 },
//   { field: "col2", headerName: "Column 2", width: 150 }
// ];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      UserSession : false
    }
  }

  //function check authenication
  CheckAuthen = () =>{
    this.setState({
      UserSession : !this.state.UserSession
    })
  }
  render() {
      if(this.props.SessionUser === ''){
        return <Login CheckAuthen={()=>this.CheckAuthen()}/>
      }
     else{
    return (
      <div>
        <Dashboard/>
      </div>
    )
  }
}
}

const mapStateToProps = (state) => {
  return {
    SessionUser: state.SessionUser
  }
}
export default connect(mapStateToProps)(App);