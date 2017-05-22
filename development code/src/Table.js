import React, { Component } from 'react';
import Progress from 'react-progressbar';
import './App.css';

class Table extends Component {
  constructor()
  {
    super();
    this.state = {};
  }
  render ()
  {
        return (
          <div className="container">
          <table className=" table table-bordered table-responsive">
            {

              this.props.task.map(function(task,index){
                var m = new Date().getMonth()+1;
                var y = new Date().getFullYear();
                var d = new Date().getDate();
                var s = task.sdate.split('-');
                var e = task.edate.split('-');
                e[0] = parseInt(e[0],10);
                e[1] = parseInt(e[1],10);
                e[2] = parseInt(e[2],10);
                s[0] = parseInt(s[0],10);
                s[1] = parseInt(s[1],10);
                s[2] = parseInt(s[2],10);
                var total = (e[0]-s[0])*365 + (e[1]-s[1])*30 + e[2]-s[2]+1;
                var now = (y-s[0])*365 + (m-s[1])*30 + d - s[2]+1;
                if (now<0)
                now = 100;
                else
                now = 100 - (now/total)*100;
                now = parseInt(now,10);
                return <tr key={index}>
                  <td>{task.title}</td>
                  <td>{task.sdate}</td>
                  <td>{task.edate}</td>
                  <td>{task.time}</td>
                  {index > 0 &&
                  <td><Progress completed={100-now} color='red'/>{100-now}%</td>}
                  {index === 0 &&
                  <td>Time Elapsed</td>}
                  {index > 0 &&
                  <td><Progress completed={now} color='green'/>{now}%</td>}
                  {index === 0 &&
                  <td>Time Left</td>}
                </tr>
              })
            }
          </table>
          </div>
        );
  }
}
export default Table;
