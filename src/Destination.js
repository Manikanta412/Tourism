import React from 'react'
import  './Destination.css';
import img1 from './images/Vijaya-img.jpeg'
import img2 from './images/Tirupathi-img.jpg'
import img3 from './images/Vizag-img.jpeg'
import img4 from './images/Kurnool-img.jpg'
import img5 from './images/Westgo-img.jpg'

const Destination = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={img1} alt="Destination 1" width="100%" height="30%" />
            <p>Prakasam barrage</p>
            <p>Some text</p>
            <a href='/vijaya' className='button'>Prakasam</a>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={img2} alt="Destination 2" width="90%" height="90%" />
            <p>TIRUPATHI</p>
            <p>Some text</p>
            <a href='/tirupathi' className="button">Tirupathi</a>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={img3} alt="Destination 3" width="100%" height="90%" />
            <p>Some text</p>
            <p>Some text</p>
            <a href='/vijaya' className="button">Vizag</a>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={img4} alt="Destination 4" width="100%" height="90%" />
            <p>Some text</p>
            <p>Some text</p>
            <a href="#" className="button">Kurnool</a>
          </div>
        </div>
      </div>

      <div className="row">
      <div className="column">
          <div className="card">
            <img src={img1} alt="Destination 1" width="100%" height="90%" />
            <p>Prakasam barrage</p>
            <p>Some text</p>
            <a href="#" className="button">Markapuram</a>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={img5} alt="Destination 2" width="100%" height="90%" />
            <p>Some text</p>
            <p>Some text</p>
            <a href="#" className="button">WestGodavari</a>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={img1} alt="Destination 3" width="100%" height="90%" />
            <p>Some text</p>
            <p>Some text</p>
            <a href="#" className="button">Guntur</a>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={img1} alt="Destination 4" width="100%" height="90%" />
            <p>Some text</p>
            <p>Some text</p>
            <a href="#" className="button">Kadapa</a>
          </div>
        </div>
      </div>

      </div>

    
  );
};

export default Destination;