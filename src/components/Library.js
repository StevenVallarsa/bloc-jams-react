import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: albumData };
    }
    
    render() {
        return (
            <section className='col-md-6 no-decs'>
                {
                    this.state.albums.map( (album, index) => 
                        <Link to={`/album/${album.slug}`} key={index}>
                            <img className="library-image" src={album.albumCover} alt={album.title} />
                            <div className="library-title">{album.title}</div>
                            <div className="library-artist">{album.artist}</div>
                            <div><i>{album.songs.length} songs</i></div>
                        </Link>
                    )
                }
            </section>
        );
    }
}

export default Library;