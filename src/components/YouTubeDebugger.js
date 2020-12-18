// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
    constructor(props){
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }

        this.handleBitrate = this.handleBitrate.bind(this)
        this.handleResolution = this.handleResolution.bind(this)
    }

    handleBitrate(event) {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            })
        })
    }

    handleResolution(event){
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            })
        })
    }

    render(){
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrate}></button>
                <button className='resolution' onClick={this.handleResolution}></button>
            </div>
        )
    }
}

export default YouTubeDebugger;