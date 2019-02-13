import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
    constructor(props) {
        super(props);
    
        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: album.songs[0],
            currentTime: 0,
            duration: album.songs[0].duration,
            currentVolume: 0.5,
            isPlaying: false,
            iconStyle: "",
            trackPlaying: -1,
            hoverTrack: null
        };

        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;

    }

    play() {
        this.audioElement.play();
        this.setState({ isPlaying: true });
    }

    pause() {
        this.audioElement.pause();
        this.setState({ isPlaying: false });
        this.setState({ trackPlaying: -1 });
    }

    componentDidMount() {
        this.eventListeners = {
            timeupdate: e => {
                this.setState({ currentTime: this.audioElement.currentTime });
            },
            durationchange: e => {
                this.setState({ duration: this.audioElement.duration });
            },
            volumechange: e => {
                this.setState({ currentVolume: this.audioElement.volume });
            }
        };
        this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
        this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
    }
    
    componentWillUnmount() {
        this.audioElement.src = null;
        this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
        this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange)
    }

    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({ currentSong: song });
    }

    handleSongClick(song, index) {
        this.setState({ trackPlaying: index })
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
            this.pause();
            this.setState({ iconStyle: "icon ion-md-play" })
        } else {
            if (!isSameSong) { this.setSong(song); }
            this.play();
            this.setState({ iconStyle: "icon ion-md-pause" })
        }
    }

    handlePrevClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.max(0, currentIndex - 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
    }

    handleNextClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.min(currentIndex + 1, this.state.album.songs.length - 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
    }

    handleTimeChange(e) {
        const newTime = this.audioElement.duration * e.target.value;
        this.audioElement.currentTime = newTime;
        this.setState({ currentTime: newTime });
    }

    handleVolumeChange(e) {
        const newVolume = e.target.value;
        this.audioElement.volume = newVolume;
        this.setState({ currentVolume: newVolume });
        console.log(this.state.currentVolume)
    }

    formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = Math.floor(totalSeconds % 60)
        if (isNaN(totalSeconds)) {
            return "-:--"
        }
        
        if (seconds < 10) {
            return (minutes + ":0" + seconds)
        } else {
            return (minutes + ":" + seconds)
        }
         
    }

    handleMouseEnter(index) {
        this.setState({ hoverTrack: index})
        if (this.state.trackPlaying === index) {
            this.setState({ iconStyle: "icon ion-md-pause" });
        } else {
            this.setState({ iconStyle: "icon ion-md-play" });

        }
    }

    handleMouseLeave() {
        this.setState({ iconStyle: "" });
        this.setState({ hoverTrack: null});
    }

    render() {
        return (
            <section className="album">
                <section id="album-info">
                    <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
                    <div className="album-details">
                        <h1 id="album-title">{this.state.album.title}</h1>
                        <h2 className="artist">{this.state.album.artist}</h2>
                        <div id="release-info">{this.state.album.releaseInfo}</div>
                    </div>
                </section>
                <table id="song-list" align="center">
                    <colgroup>
                        <col id="song-number-column" />
                        <col id="song-title-column" />
                        <col id="song-duration-column" />
                    </colgroup>

                    <tbody>
                        {this.state.album.songs.map( (song, index) => 
                            <tr className="song" key={index} 
                            onClick={() => this.handleSongClick(song, index)}
                            onMouseEnter={() => this.handleMouseEnter(index)}
                            onMouseLeave={() => this.handleMouseLeave()}>
                                <td><span className={this.state.hoverTrack === index ? this.state.iconStyle : ""}> {this.state.hoverTrack !== index ? (index + 1) : ""}</span></td>
                                <td>{song.title}</td>
                                <td>{song.duration}</td>
                            </tr>
                            
                        ) }
                        
                    </tbody>
                </table>
                <PlayerBar 
                    isPlaying={this.state.isPlaying} 
                    currentSong={this.state.currentSong} 
                    currentTime={this.audioElement.currentTime}
                    duration={this.audioElement.duration}
                    handleSongClick={() => this.handleSongClick(this.state.currentSong)}
                    handlePrevClick={() => this.handlePrevClick()} 
                    handleNextClick={() => this.handleNextClick()} 
                    handleTimeChange={(e) => this.handleTimeChange(e)}
                    handleVolumeChange={(e) => this.handleVolumeChange(e)}
                    formatTime={(e) => this.formatTime(e)}

                />
            </section>
        );
    }
}

export default Album;
