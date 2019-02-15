import React, { Component } from 'react';

class PlayerBar extends Component {
    render() {
        return (
            <section className="player-bar">
                <section id="buttons">
                    <button id="previous" onClick={this.props.handlePrevClick}>
                        <span className="ioicon ion-md-skip-backward"></span>
                    </button>
                    <button id="play-pause" onClick={this.props.handleSongClick}>
                        <span className={this.props.isPlaying ? "ioicon ion-md-pause" : "ioicon ion-md-play"}></span>
                    </button>
                    <button id="next" onClick={this.props.handleNextClick}>
                        <span className="ioicon ion-md-skip-forward"></span>
                    </button>
                </section>
                <section id="time-control">
                    <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
                    <input 
                        type="range" 
                        className="seek-bar" 
                        value={(this.props.currentTime / this.props.duration) || 0}
                        max="1"
                        min="0"
                        step="0.01" 
                        onChange={this.props.handleTimeChange}
                    />
                    <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
                </section>
                <table id="volume-control" align="center">
                    <tr>
                    <td className="ioicon ion-md-volume-low">&nbsp;</td>
                    <td><input type="range" 
                        className="seek-bar" 
                        value={this.props.currentVolume}
                        max="1"
                        min="0"
                        step="0.1"
                        onChange={this.props.handleVolumeChange}
                    /></td>
                    <td>&nbsp;</td>
                    <td className="ioicon ion-md-volume-high">&nbsp;</td>
                    </tr>
                </table>

            </section>
        );
    }
}

export default PlayerBar;