import React, { Component } from 'react'
import $ from 'jquery';

export class Metasploit extends Component {
    constructor() {
        super();
        this.cursor = "";
        this.terminal_rows = 1;
        this.current_directory = "~";
        this.curr_dir_name = "root";
        this.prev_commands = [];
        this.commands_index = -1;
        this.child_directories = {
            root: [ "projects", "personal-documents", "skills", "languages", "interests"],
            skills: ["Penetration Testing", "Vulnerability Assessment", "Malware Analysis", "Windows Internals", "Exploit Development"],
            projects: ["Network-Security-Audit-Toolkit", "Windows-Kernel-Driver-Analysis", "Advanced-Malware-Analysis-Tool", "Custom-Exploit-Framework", "Automated-Penetration-Test-Framework", "Incident-Response-Simulation"],
            interests: ["Malware Development", "System Programming" ],
            languages: ["Python", "C++", "Java", "Assembly(x64&ARM)"],
        };
        this.state = {
            terminal: [],
        }
    }

    componentDidMount() {
        this.reStartTerminal();
    }

    componentDidUpdate() {
        clearInterval(this.cursor);
        this.startCursor(this.terminal_rows - 2);
    }

    componentWillUnmount() {
        clearInterval(this.cursor);
    }

    reStartTerminal = () => {
        clearInterval(this.cursor);
        $('#terminal-body').empty();
        this.appendTerminalRow();
    }

    appendTerminalRow = () => {
        let terminal = this.state.terminal;
        terminal.push(this.terminalRow(this.terminal_rows));
        this.setState({ terminal });
        this.terminal_rows += 2;
    }

    terminalRow = (id) => {
        return (
            <React.Fragment key={id}>
                <div className="flex w-full h-5">
                    <div className=" text-ubt-white">┌──(ali㉿kali)-[{this.current_directory}] </div>                                                        
                     </div>
                    <div className="flex">
                    <div className=" text-ubt-white">└─$ </div>
                    
                    <div className=" text-ubt-white">
                    <pre>
        '                  ########                  #     <br/>
        '              #################            #       <br/>
        '            ######################        #         <br/>
        '          #########################      #           <br/>
        '         ############################                <br/>
        '        ##############################               <br/>
        '        ###############################              <br/>
        '       ###############################               <br/>
        '       ##############################                <br/>
        '                       #    ########   #             <br/>
        '          ##        ###        ####   ##             <br/>
        '                                 ###   ###           <br/>
        '                               ####   ###            <br/>
        '          ####          ##########   ####            <br/>
        '          #######################   ####             <br/>
        '            ####################   ####              <br/>
        '             ##################  ####                <br/>
        '               ############      ##                  <br/>
        '                  ########        ###                <br/>
        '                 #########        #####              <br/>
        '               ############      ######              <br/>
        '              ########      #########                <br/>
        '                #####       ########                 <br/>
        '                  ###       #########                <br/>
        '                 ######    ############              <br/>
        '                #######################              <br/>
        '                #   #   ###  #   #   ##              <br/>
        '                ########################             <br/>
        '                 ##     ##   ##     ##               <br/>
        '                       https://metasploit.com        <br/>
                                                                <br/>
                                                                <br/>
       =[ metasploit v6.1.31-dev                          ]      <br/>
+ -- --=[ 2201 exploits - 1166 auxiliary - 395 post       ]      <br/>
+ -- --=[ 596 payloads - 45 encoders - 11 nops            ]      <br/>
+ -- --=[ 9 evasion                                       ]      <br/>
                                                                <br/>
Metasploit tip: When in a module, use back to go                <br/>
back to the top level prompt                                    <br/>
</pre>
                    </div>
                    <div id="cmd" onClick={this.focusCursor} className=" bg-transperent relative flex-1 overflow-hidden ">         
                        <span id={`show-${id}`} className=" float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider"></span>
                        <div id={`cursor-${id}`} className=" float-left mt-1 w-1.5 h-3.5 bg-white"></div>
                        <input id={`terminal-input-${id}`} data-row-id={id} onKeyDown={this.checkKey} onBlur={this.unFocusCursor} className=" absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent" spellCheck={false} autoFocus={true} autoComplete="off" type="text" />
                    </div>
                    </div>
                <div id={`row-result-${id}`} className={"my-2 font-normal"}></div>
                <iframe src="https://www.revshells.com/" className="h-full w-full bg-ub-cool-grey"></iframe>         
            </React.Fragment>
        );

    }


    startCursor = (id) => {
        clearInterval(this.cursor);        
        }
        render() {
            return (
                <div className="h-full w-full bg-ub-grey text-white text-sm font-bold" id="terminal-body">
                    {
                        this.state.terminal
                    }
                </div>
            )
        }
    


}
export default Metasploit

export const displayMetasploit = () => { 
    return <Metasploit> </Metasploit>;
}
