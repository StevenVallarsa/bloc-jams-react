import React from 'react';

const Landing = () => (
    <section className="landing">
        <h1 className='hero-title'>Turn the music up!</h1>
        <hr className="hr-style" />

     <section className="selling-points">
        <div className="point">
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">The world is full of music; why should you have to listen to music that someon else chose?</p>
        </div>
        <hr className="hr-style" />
        <div className="point">
            <h2 className="point-title">Unlimited, streaming, ad-free</h2>
            <p className="point-description">No arbitray limits. No distractions.</p>
        </div>
        <hr className="hr-style" />
        <div>
            <h2 className="point-title">Mobile enabled</h2>
            <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
     </section>
    </section>

);


export default Landing;