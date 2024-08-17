import React, { Component } from 'react';
import $ from 'jquery';

export class Crypt extends Component {
    constructor() {
        super();
        this.cryptItems = [
            {
                name: "Windows Internals",
                icon: "./themes/filetypes/windows.png",
            },
            
        ];
    }
    

    openApp = () => {
        if (!this.props.isMinimized[this.id] && this.props.isClose[this.id]) {
            this.scaleImage();
        }
        this.props.openApp(this.id);
        this.setState({ showTitle: false });
    };
    focusFile = (e) => {
        // icon
        $(e.target).children().get(0).classList.toggle("opacity-60");
        // file name
        $(e.target).children().get(1).classList.toggle("bg-ub-blue");
    }
    

    render() {
        return (
            
            <div className="w-full h-full flex flex-col bg-ub-cool-grey text-white select-none">
            <div className="flex-grow ml-4 flex flex-wrap items-start content-start justify-start overflow-y-auto windowMainScreen">
                
                {
                    this.cryptItems.map((item, index) => {
                        return (
                            <div  key={index} tabIndex="1" onFocus={this.focusFile} onBlur={this.focusFile} className="flex flex-col items-center text-sm outline-none w-16 my-2 mx-4">
                                
                                  
                                    <img src={item.icon} alt="Kali File Icons"   />
                                
                                <span className="text-center rounded px-0.5">{item.name}</span>
                                
                            </div>
                            
                        )
                    })
                }
            </div> </div>
        );
    }

}

export default Crypt;

export const displayCrypt = () => {
    return <Crypt> </Crypt>;
}
