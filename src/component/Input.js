import React,{Component} from "react";
import { Navigation } from './Navigation';
import { variables } from "../Variables";
import { useState } from "react";

export class Input extends Component{
    render(){
        return(
                <div> 
                    
                    <h3> This is my Input content Page</h3>
                    <label>
                        Name:
                        
                    <input
                      type="text"
                      id="message"
                      name="message"
                      />
                      </label>
                </div>
            )    
    }
}
