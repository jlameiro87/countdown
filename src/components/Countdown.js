import React, { Component } from 'react';
import Field from './Field';
import Operations from './Operations';

class Countdown extends Component {

    secondsRemaining;

    intervalHandle;

    state = {
        minutes: '0',
        seconds: '0',
        _disabled: false,
        _counterStarted: false,
        countdown: {
            seconds: '00'
        },
        counterColor: ''
    };

    tick = () => {
        let sec = this.secondsRemaining;

        if (sec < 10) {
            sec = '0' + sec;

            // Change counter color
            this.setState({ counterColor: 'counter' })
        }

        this.setState({ countdown: { seconds: sec } });

        if (sec === '00') {
            clearInterval(this.intervalHandle);
            this.setState({ _disabled: false, _counterStarted: false });
            window.alert('Countdown finished!!!');
        }

        this.secondsRemaining--;
    };

    onValueChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    startCountdown = () => {
        let minutes = Number(this.state.minutes);
        let seconds = Number(this.state.seconds);

        if (minutes > 0) {
            seconds += minutes * 60;
        }

        this.secondsRemaining = seconds;

        // Initialize countdown
        this.setState({ countdown: { seconds: seconds } });

        // Disable countdown inputs when starting the timer
        this.setState({ _disabled: true, _counterStarted: true });
        
        // Start timer
        this.intervalHandle = setInterval(this.tick, 1000);
    };

    resetCountdown = () => {
        this.setState({ minutes: '0', seconds: '0', _disabled: false, _counterStarted: false });
    };

    stopCountdown = () => {
        this.setState({ _disabled: false, _counterStarted: false });

        clearInterval(this.intervalHandle);

        this.setState({ countdown: { minutes: '00', seconds: '00' } });
    };

    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header bg-red">
                  <h2> COUNTDOWN </h2>
                </div>
                <div className="body">
                    <div className="row clearfix">
                        <Field
                            name="minutes"
                            maxValue="59"
                            value={this.state.minutes}
                            valueChange={this.onValueChange}
                            disabled={this.state._disabled}
                        />
                        <Field
                            name="seconds"
                            maxValue="59"
                            value={this.state.seconds}
                            valueChange={this.onValueChange}
                            disabled={this.state._disabled}
                        />

                        <Operations
                            startCountdown={this.startCountdown}
                            resetCountdown={this.resetCountdown}
                            stopCountdown={this.stopCountdown}
                        />
                    </div>
                    {
                        (
                            this.state._counterStarted &&
                            <div className="row clearfix">
                                <h1><span className={this.state.counterColor}>{this.state.countdown.seconds}</span> seconds left</h1>
                            </div>
                        )
                    }
                </div>
              </div>
            </div>
        );
    }

}

export default Countdown;