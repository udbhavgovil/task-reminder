import React, { Component } from 'react';


class Form extends Component {


  render ()
  {
    return (
      <div >
        <form className='form-inline'>
        <div className='form-group'>
        <label > Title : </label>
        <input type='text' className="form-control" value={this.props.title} onChange={this.props.changetitle}  />
        </div>
        <div className="form-group" >
        <label > Start Date : </label>
        <input   type='date' className="form-control"  value={this.props.sdate} onChange={this.props.changeStartdate.bind(this)} />
        </div>
        <div className="form-group" >
        <label > Due On: </label>
        <input type='date' className="form-control" value={this.props.edate} onChange={this.props.changeEnddate.bind(this)} />
        </div>
        <div className="form-group" >
        <label > Time : </label>
        <input type='time' className="form-control" value={this.props.time} onChange={this.props.changeTime.bind(this)} />
        </div>
        </form>
        <br></br>
        <div>
        <button className="btn btn-default"  onClick = {this.props.addTask.bind(this)}> Add Task </button>
        </div>
      </div>
    );
  }
}
export default Form ;
