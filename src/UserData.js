import React,{Component} from 'react'
class UserData extends Component{
    constructor(){
        super();
        this.state = {
            data:"hello"
        }
    }
    updatedata() {
        this.setState({data:"world"})
    }
    render(){
        return (
            <div>
                <h1>hello from user component class example {this.state.data}</h1>
                <button onClick={()=>this.updatedata()}>submit</button>
                <h1>{this.props.name}</h1>
            </div>
            )
    }
}

export default UserData;