import React from 'react';


const Slider = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide py-2 my-3">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src=" https://wallpapercave.com/wp/wp2639569.jpg " className="d-block w-100" alt="Gym "/>
          </div>
          <div className="carousel-item">
            <img src=" https://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-27-1800-x-1200.jpg" className="d-block w-100" alt="Once More"/>
          </div>
          <div className="carousel-item">
            <img src="https://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-06-3554-x-1999.jpg " className="d-block w-100" alt="Once More"/>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev my-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
