import React from 'react'

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Person :{ fullName:"nadhem attaoui",
      bio:"web developer",
       imgSrc:"https://www.name-doctor.com/nomi.png/23085.png", 
       profession:"mechanichal engineer"},
       shows :false,
       mountingTime : 0
    };
    }
    // componentDidMount(){
    //     this.setState ({ brand :"peugeot"})
    // }

    // componentDidUpdate() {
    //     console.log("hello")
    //}

componentDidMount(){
setInterval(()=>{
    console.log(this.state.mountingTime)
    this.setState({mountingTime:this.state.mountingTime+1})}
,1000)
}

    change=()=>{
        this.setState({shows :!this.state.shows})
        this.setState({mountingTime:0})
    }
    render() {
      return (
        <div>

        {this.state.shows? <h1>Hello {this.state.Person.fullName} <br/>
          i am {this.state.Person.bio}<br/>
          <img src ={this.state.Person.imgSrc}></img>
           <br/>
           i am {this.state.Person.profession} </h1> : <h1> not show</h1>
          }<br/>
          time: {this.state.mountingTime}<br/>

          <button onClick={this.change}> show</button>

        </div>
      );
    }
  }
  export default Car