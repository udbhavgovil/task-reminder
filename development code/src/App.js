import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'
import './App.css';



class App extends Component {
  constructor ()
  {
    super();

    this.state  = { task :
       [{title:'Title',sdate:'Add on',edate:'Due on',time:'Time'}],title:'',sdate:'' ,edate:'',length:1,time:'00:00'} ;

  }

  validate (s,e,t,time){
    if (t.length === 0 || time==null)
    {
        alert("Title Cannot be Empty");
        return false;
    }
    else {
      var m = new Date().getMonth()+1;
      var y = new Date().getFullYear();
      var d = new Date().getDate();
      y = y.toString();
      m = m.toString();
      d = d.toString();
      m = '0'+m;
      if (y>s[0]  )
          {
            alert("Start Date Cannot be in Past!");
            return false;
          }
        if (y === s[0])
        {

          if (m>s[1])
          {
            alert("Start Date Cannot be in Past!");
            return false;
          }
          else if (m === s[1])
          {

            if (d>s[2])
            {
              alert("Start Date Cannot be in Past!");
              return false;
            }
          }
        }
        if (s[0]>e[0])
        {
          alert("Due Date cannot be before start Date!");
          return false;
        }
        if (s[0] === e[0])
        {
          if (s[1]>e[1])
          {
            alert("Due Date cannot be before start Date!");
            return false;
          }
          else if (s[1] === e[1])
          {
            if (s[2]>e[2])
            {
              alert("Due Date cannot be before start Date!");
              return false;
            }
          }
        }
    }
    return true;
  }
  addTask (){
  var sdate = this.state.sdate.split('-');
  var edate = this.state.edate.split('-');
  var f = this.validate(sdate,edate,this.state.title,this.state.time);
  if (f)
  {
    var newtask = {title:this.state.title,sdate:this.state.sdate,edate:this.state.edate,time:this.state.time};
    var task = this.state.task.slice();
    task.push(newtask);
    this.setState({task});
    var length = task.length;
    this.setState({length});
    this.setState({title:''});
    this.setState({time:'00:00'});
    this.setState({edate:''});
    this.setState({sdate:''});
  }

  //console.log(this.state);

}
changetitle (e)
{
    const title = e.target.value;
    this.setState({title});
    //console.log(this.state);
}
changeStartdate (e)
{
    const sdate = e.target.value;
    //console.log(sdate);
    this.setState({sdate});

}
changeEnddate (e)
{
    const edate = e.target.value;
    //console.log(edate);
    this.setState({edate});

}
changeTime (e)
{
  const time = e.target.value;
  this.setState({time});
}
  render() {

    if (this.state.length > 1)
    {
      return (
      <div className="App">
        <h2> {this.state.length-1} Pending Task</h2>
        <Table task={this.state.task} />
        <Form time = {this.state.time} edate= {this.state.edate} sdate={this.state.sdate} task={this.state.task} addTask={this.addTask.bind(this)} changeEnddate={this.changeEnddate.bind(this)} changeStartdate={this.changeStartdate.bind(this)} changetitle={this.changetitle.bind(this)} changeTime={this.changeTime.bind(this)} title={this.state.title}/>
      </div>
    );
    }
    return (
      <div className="App">
        <h2>Hurray !! No  Task </h2>
        <div>
        <Form  time = {this.state.time}  edate= {this.state.edate} sdate={this.state.sdate} addTask={this.addTask.bind(this)} changeEnddate={this.changeEnddate.bind(this)} changeStartdate={this.changeStartdate.bind(this)} changetitle={this.changetitle.bind(this)} changeTime={this.changeTime.bind(this)} task={this.state.task} title={this.state.title}/>
        </div>
      </div>
    );
  }
}

export default App;
