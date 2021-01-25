import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid';
const rows = [
    { id: 1, col1: "Hello",       col2: "World"     ,col3: "World"     ,col4: "World"     ,col5: "World"      },  
    { id: 2, col1: "XGrid",       col2: "is Awesome",col3: "is Awesome",col4: "is Awesome",col5: "is Awesome" },
    { id: 3, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 4, col1: "Hello",       col2: "World"     ,col3: "World"     ,col4: "World"     ,col5: "World"      },
    { id: 5, col1: "XGrid",       col2: "is Awesome",col3: "is Awesome",col4: "is Awesome",col5: "is Awesome" },
    { id: 6, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 7, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 8, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 9, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 10, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 11, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 12, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 13, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 14, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 15, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 16, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 17, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 18, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 19, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 20, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 21, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 22, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 23, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 24, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 25, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 26, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 27, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 28, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 29, col1: "Material-UI", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 30, col1: "Material-UI30", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 31, col1: "Material-UI31", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" },
    { id: 32, col1: "Material-UI32", col2: "is Amazing",col3: "is Amazing",col4: "is Amazing",col5: "is Amazing" }
    ,
  ];
  
  const columns = [
    { field: "id", hide: true },
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
    { field: "col3", headerName: "Column 3", width: 150 },
    { field: "col4", headerName: "Column 4", width: 150 },
    { field: "col5", headerName: "Column 5", width: 150 }
  ];
export default class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullHeight:window.innerHeight
        }
    }

    componentDidMount(){
        this.setState({
            fullHeight: this.state.fullHeight - 60
        },()=>{
            console.log(this.state.fullHeight);
        })
    
    }
    render() {
        return (
                <div style={{ height: this.state.fullHeight, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
        )
    }
}
