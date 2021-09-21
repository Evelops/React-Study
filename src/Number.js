import React,{Component} from "react";

class Number extends Component{
    /*
    constructor(props){
        super(props);
        this.state={
            number:0
        } 
    } //contructor 생성자를 만들어서 
     */
    state={
        number:0
    }
    plusEvnet = () =>{
        this.setState({
            number:this.state.number+1
        });
    }
    minusEvent = () => {
        this.setState({
            number:this.state.number-1
        });
    }

    render(){
        return(
            <div>
                <div>Num:{this.state.number}</div>
                <button onClick={this.plusEvnet}>+</button>
                <button onClick={this.minusEvent}>-</button>
            </div>       
        );
    }
    
}
export default Number;