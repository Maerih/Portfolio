import React, { Component } from 'react';

export class Shodan extends Component {
    constructor() {
        super();
        this.state = {
            url: 'https://urlscan.io/?&/',
            display_url: "https://urlscan.io/?&/",
            step: 0,
            sqlMapData: {
                url: '',
                postData: '',
                injectionDifficulty: '',
                enumerationLevel: '',
                formTestResponse: '',
                followRedirect: '',
            }
        };
    }

    handleNextStep = () => {
        this.setState({ step: this.state.step + 1 });
    };

    handleChange = (field, value) => {
        this.setState({
            sqlMapData: {
                ...this.state.sqlMapData,
                [field]: value,
            }
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.step === 1 && prevState.step !== 1) {
            setTimeout(() => this.handleNextStep(), 3000);
        }
    }

    render() {
        const { step, sqlMapData } = this.state;
        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey p-2" style={{ fontFamily: 'monospace', color: 'lightgreen', backgroundColor: 'black' }}>
                {step === 0 && (
                    <>
                        <div>        ___</div>
                        <div>       __H__</div>
                        <div> ___ ___["]_____ ___ ___  {'{1.7.11#stable}'}</div>
                        <div>|_ -| . [(]     | .'| . |</div>
                        <div>|___|_  [.]_|_|_|__,|  _|</div>
                        <div>      |_|V...       |_|   https://sqlmap.org</div>
                        <br />
                        <div>[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program</div>
                        <br />
                        <div>[*] starting @ 13:44:59 /2024-08-16/</div>
                        <br />
                        <div>[13:44:59] [INFO] starting wizard interface</div>
                        <div>Please enter full target URL (-u): </div>
                        <input
                            type="text"
                            value={sqlMapData.url}
                            onChange={(e) => this.handleChange('url', e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && this.handleNextStep()}
                            style={{ backgroundColor: 'black', color: 'lightgreen', border: 'none', outline: 'none', width: '100%' }}
                        />
                    </>
                )}

                {step === 1 && (
                    <>
                        <div>{sqlMapData.url}</div>
                        <div>POST data (--data) [Enter for None]: </div>
                        <input
                            type="text"
                            value={sqlMapData.postData}
                            onChange={(e) => this.handleChange('postData', e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && this.handleNextStep()}
                            style={{ backgroundColor: 'black', color: 'lightgreen', border: 'none', outline: 'none', width: '100%' }}
                        />
                    </>
                )}

                {step === 2 && (
                    <>
                        <div>{sqlMapData.postData}</div>
                        <div>[13:45:35] [WARNING] no GET and/or POST parameter(s) found for testing (e.g. GET parameter 'id' in 'http://www.site.com/vuln.php?id=1'). Will search for forms</div>
                        <br />
                        <div>Injection difficulty (--level/--risk). Please choose:</div>
                        <div>[1] Normal (default)</div>
                        <div>[2] Medium</div>
                        <div>[3] Hard</div>
                        <input
                            type="text"
                            value={sqlMapData.injectionDifficulty}
                            onChange={(e) => this.handleChange('injectionDifficulty', e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && this.handleNextStep()}
                            style={{ backgroundColor: 'black', color: 'lightgreen', border: 'none', outline: 'none', width: '100%' }}
                        />
                    </>
                )}

                {step === 3 && (
                    <>
                        <div>{sqlMapData.injectionDifficulty}</div>
                        <div>Enumeration (--banner/--current-user/etc). Please choose:</div>
                        <div>[1] Basic (default)</div>
                        <div>[2] Intermediate</div>
                        <div>[3] All</div>
                        <input
                            type="text"
                            value={sqlMapData.enumerationLevel}
                            onChange={(e) => this.handleChange('enumerationLevel', e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && this.handleNextStep()}
                            style={{ backgroundColor: 'black', color: 'lightgreen', border: 'none', outline: 'none', width: '100%' }}
                        />
                    </>
                )}

                {step === 4 && (
                    <>
                        <div>{sqlMapData.enumerationLevel}</div>
                        <br />
                        <div>sqlmap is running, please wait..</div>
                        <br />
                        <div>[1/1] Form:</div>
                        <div>GET http://google.com/search?ie=ISO-8859-1&hl=sw-KE&source=hp&biw=&bih=&q=&btnG=Tafuta na Google&iflsig=AL9hbdgAAAAAZr874-AdL876BXX3xFILxUgZbIHetnBx&gbv=1</div>
                        <div>do you want to test this form? [Y/n/q]</div>
                        <input
                            type="text"
                            value={sqlMapData.formTestResponse}
                            onChange={(e) => this.handleChange('formTestResponse', e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && this.handleNextStep()}
                            style={{ backgroundColor: 'black', color: 'lightgreen', border: 'none', outline: 'none', width: '100%' }}
                        />
                    </>
                )}

                {step === 5 && (
                    <>
                        <div>{sqlMapData.formTestResponse}</div>
                        <div>Edit GET data [default: ie=ISO-8859-1&hl=sw-KE&source=hp&biw=&bih=&q=&btnG=Tafuta na Google&iflsig=AL9hbdgAAAAAZr874-AdL876BXX3xFILxUgZbIHetnBx&gbv=1]:</div>
                        <div>ie=ISO-8859-1&hl=sw-KE&source=hp&biw=&bih=&q=&btnG=Tafuta na Google&iflsig=AL9hbdgAAAAAZr874-AdL876BXX3xFILxUgZbIHetnBx&gbv=1</div>
                        <br />
                        <div>do you want to fill blank fields with random values? [Y/n]</div>
                        <input
                            type="text"
                            value={sqlMapData.followRedirect}
                            onChange={(e) => this.handleChange('followRedirect', e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && this.handleNextStep()}
                            style={{ backgroundColor: 'black', color: 'lightgreen', border: 'none', outline: 'none', width: '100%' }}
                        />
                    </>
                )}

                {step === 6 && (
                    <>
                        <div>{sqlMapData.followRedirect}</div>
                        <div>got a 301 redirect to 'http://www.google.com/search?ie=ISO-8859-1&hl=sw-KE&source=hp&biw=IUYW&bih=aAPG&q=aYDt&btnG=Tafuta%20na%20Google&iflsig=AL9hbdgAAAAAZr874-AdL876BXX3xFILxUgZbIHetnBx&gbv=1'. Do you want to follow? [Y/n]</div>
                        <input
                            type="text"
                            value={sqlMapData.followRedirect}
                            onChange={(e) => this.handleChange('followRedirect', e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && this.handleNextStep()}
                            style={{ backgroundColor: 'black', color: 'lightgreen', border: 'none', outline: 'none', width: '100%' }}
                        />
                    </>
                )}
            </div>
        );
    }
}

export default Shodan;

export const displayShodan = () => {
    return <Shodan> </Shodan>;
};
