import React, { Component } from 'react'
import './CreateRequest.scss';
import axios from 'axios';
import { connect } from 'react-redux';
 class CreateRequest extends Component {
    constructor(props){
        super(props);
        this.state = {
            requestType:'',
            startDate:'',
            endDate:'',
            totalDuration:'',
            workingDuration:'',
            reason:'',
            reasonDetail:'',
            supervisor:'',
            approver:'',
            informTo:'',
            expectedDate:'',
            expectedTime:''
        }
    }
    getValueforInput = (e) =>{
        this.setState({[e.target.name]: e.target.value},()=>{
            console.log(e.target.value);
            if ((this.state.endDate === '')&&(this.state.startDate === '')) return;
            //function calculate date between 2 day, format :yyyy-mm-mm
            const diffInMs   = new Date(this.state.endDate) - new Date(this.state.startDate);
            const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
            if(diffInDays > 0){
                this.setState({
                    workingDuration: diffInDays
                })
            }
            else if(this.state.totalDuration !==''){
                 this.setState({
                    workingDuration: this.state.totalDuration
                })
            }
        });
    }

    SubmitLeaveRequest = () =>{
        var self = this;
        const param = {
            username:       this.props.SessionUser,
            requestType:    this.state.requestType,
            startDate:      this.state.startDate,
            endDate:        this.state.endDate,
            totalDuration:  this.state.totalDuration,
            workingDuration:this.state.workingDuration,
            reason:         this.state.reason,
            reasonDetail:   this.state.reasonDetail,
            supervisor:     this.state.supervisor,
            approver:       this.state.approver,
            informTo:       this.state.informTo,
            expectedDate:   this.state.expectedDate
           // expectedTime:   this.state.expectedTime
        };
         var paramByPass = JSON.stringify(param);
        axios.post('https://localhost:44311/api/HRUltity/CreateLeaveRequest/'
         + paramByPass
       // , paramByPass,  
        // {
        //   headers: {
        //   'Content-Type': 'application/json'
        //   }
        // }
        )
        .then(function (response) {
          console.log(response);
          console.log("props session", self.props.SessionUser);
          self.props.getSessionUser(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });


    }

    render() {
        return (
            <div className="container-fluid create-request-leave">
                <h1>Create request for leave</h1>
                <div className="row request-block">
                    <div className="col-6">
                        <div className="form-group">
                            <span>Request Type: </span>
                            <select className="form-field" name="requestType" id="requestType" onChange={this.getValueforInput}>
                                <option value="Nghĩ phép">Nghĩ phép</option>
                                <option value="Nghĩ bù">Nghĩ bù</option>
                                <option value="Work from home">Work from home</option>
                                <option value="Đưa người nhà đi khám bệnh">Đưa người nhà đi khám bệnh</option>
                                <option value="Bị bệnh">Bị bệnh</option>
                                </select>
                        </div>
                        <div className="form-group">
                            <span>Start Date : </span>
                            <input className="form-field" type="date" placeholder="choose request type" id="startDate" name="startDate" onChange={this.getValueforInput}/>
                        </div>
                        <div className="form-group">
                            <span>End Date: </span>
                            <input className="form-field" type="date" placeholder="choose request type" id="endDate" name="endDate" onChange={this.getValueforInput}/>
                        </div>
                        <div className="form-group">
                            <span>Total Duration: </span>
                            <select className="form-field" name="totalDuration" id="totalDuration" onChange={this.getValueforInput}>
                                <option value="0.5">Buổi sáng</option>
                                <option value="0.5">Buổi chiều</option>
                                <option value="1">Cả ngày</option>
                                </select>
                        </div>
                        <div className="form-group">
                            <span>Working Duration: </span>
                            <input className="form-field" type="text" placeholder="choose request type" id="workingDuration" name="workingDuration" value={this.state.workingDuration} readOnly="readonly" disabled onChange={this.getValueforInput}/>
                        </div>
                     
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <span>Reason: </span>
                            <input className="form-field" type="text" placeholder="choose request type" id="reason" name="reason" onChange={this.getValueforInput}/>
                        </div>
                        <div className="form-group">
                            <span>Reason Detail: </span>
                            <input className="form-field" type="text" placeholder="choose request type" id="reasonDetail" name="reasonDetail" onChange={this.getValueforInput}/>
                        </div>
                        <div className="form-group">
                            <span>Supervisor: </span>
                            <input className="form-field" type="text" placeholder="choose request type" id="supervisor" name="supervisor" onChange={this.getValueforInput}/>
                        </div>
                        <div className="form-group">
                            <span>Approver: </span>
                            <input className="form-field" type="text" placeholder="choose request type" id="approver" name="approver" onChange={this.getValueforInput}/>
                        </div>
                        <div className="form-group">
                            <span>Inform To: </span>
                            <input className="form-field" type="text" placeholder="choose request type" id="informTo" name="informTo" onChange={this.getValueforInput}/>
                        </div>
                    </div>
                </div>
                
                <div className="expected-time">
                    <h1>Expected Time Aprroval</h1>
                    <div className="row request-block">
                        <br/>   
                        <div className="col-6">
                        <div className="form-group">
                            <span>Date: </span>
                            <input className="form-field" type="date" placeholder="dd-mm-yyyy" id="expectedDate" name="expectedDate" onChange={this.getValueforInput}/>
                        </div>
                    </div>
                        <div className="col-6">
                         <div className="form-group">
                            <span>Time: </span>
                            <input className="form-field" type="time" placeholder="choose request type" id="expectedTime" name="expectedTime" onChange={this.getValueforInput}/>
                        </div> 
                    </div>
                </div>
                <div className="d-flex justify-content-end mr-3 group-button">
                        <button className="btn btn-info css-button">Save Draft</button>
                        <button className="btn btn-danger css-button">Close</button>
                        <button className="btn btn-success css-button" onClick={()=>this.SubmitLeaveRequest()}> Submit</button>
                </div>

                </div>
            </div>
        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SessionUser: state.SessionUser
    }
}
export default connect(mapStateToProps)(CreateRequest);