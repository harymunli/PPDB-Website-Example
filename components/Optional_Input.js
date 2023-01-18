import React from "react";

export default class Optional_Input extends React.Component{
    render(){
        if(this.props.label === "Tanggal Lahir"){
           return(
                <div className="flex-row justify-center mx-auto flex-start inline-block mb-4">
                    <label for={this.props.label} className="block ml-4">{this.props.label}</label>
                    <input id={this.props.label} type="date" className="rounded-full border-4 w-[300px] h-[65px] px-4"></input>
                </div> 
           )
        }    
        return(
            <div className="flex-row justify-center mx-auto flex-start inline-block">
                <label for={this.props.label} className="block ml-4">{this.props.label}</label>
                <input id={this.props.label} type="text" className="rounded-full border-4 w-[300px] h-[65px] px-4"></input>
            </div>
        )
    }
    
}