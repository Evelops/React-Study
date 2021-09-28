import React,{Component} from 'react';


class Door extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Open:true
        };
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({Open: !this.state.Open});
    }
    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.Open ? 'open':'close'}
                
                </button>
        );
    }
}
export default Door;