import React, { Component } from 'react';

export class Tracer extends Component {
    constructor() {
        super();
        this.state = {
            url: 'https://emn178.github.io/online-tools/',
            display_url: "https://emn178.github.io/online-tools/",
        }
    }


    render() {
        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey">
                <iframe src={this.state.url} className="flex-grow" id="Tracer-screen" frameBorder="0"></iframe>
            </div>
        )
    }
}

export default Tracer

export const displayTracer = () => {
    return <Tracer> </Tracer>;
}
