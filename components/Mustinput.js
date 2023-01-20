import React from "react";

export default class Mustinput extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.label === "Password"){
            return (
                <div className="flex-row justify-center mx-auto flex-start">
                    <label for={this.props.label} className="block ml-4">{this.props.label}<span className="text-red-600 round-end-3 h-[30px]">*</span></label>
                    <input id={this.props.label} type="password" className="rounded-full border-4 w-[600px] h-[65px] px-4 my-4"></input>
                </div>
            )     
        }
        return ( <div className="flex-row justify-center mx-auto flex-start">
                    <label for={this.props.label} className="block ml-4">{this.props.label}<span className="text-red-600 round-end-3 h-[30px]">*</span></label>
                    <input id={this.props.label} type="text" className="rounded-full border-4 w-[600px] h-[65px] px-4"></input>
                </div> )
    }
}