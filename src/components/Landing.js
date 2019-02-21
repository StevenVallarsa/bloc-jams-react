import React from 'react';

const Landing = () => (
    <section className="landing">

        <div>
            <h1 className='hero-title'>Turn the music up!</h1>
        </div>


        <div class="container">

            <div className="row">

                    <div className="col">
                        <h3 className="point-title">Choose your music</h3>
                        <p className="point-description">The world is full of music; why should you have to listen to music that someon else chose?</p>
                    </div>

                    <div className="col">
                        <h3 className="point-title">Unlimited, streaming, ad-free</h3>
                        <p className="point-description">No arbitrary limits. No distractions.</p>
                    </div>

                    <div className="col">
                        <h3 className="point-title">Mobile enabled</h3>
                        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
                    </div>
                        
            </div>
        </div>

    <div className="footer">
        <p>Photo by Bruce Mars / Available at https://unsplash.com/@brucemars</p>
    </div>

    </section>

);


export default Landing;