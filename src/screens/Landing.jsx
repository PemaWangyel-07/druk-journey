import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="hero-section">

        <div className="overlay">

          <h1>Welcome to Bhutan</h1>

          <p>
            Discover the beauty of the Land of the Thunder Dragon
          </p>

          

          {/* HERO BUTTONS */}
          <div className="hero-buttons">

            <Link to="/destinations">
              <button className="destination-btn">
                Explore Destinations
              </button>
            </Link>

            <Link to="/food">
              <button className="food-btn">
                Explore Cuisine
              </button>
            </Link>

          </div>

        </div>

      </div>

      {/* ABOUT SECTION */}
      <div className="about-section">

        <h1>Why Visit Bhutan?</h1>

        <p>
          Bhutan is known for its peaceful mountains, beautiful monasteries,
          unique culture, and happiness-driven lifestyle.
        </p>

      </div>

      {/* FEATURE CARDS */}
      <div className="feature-section">

        <div className="feature-card">
          <h2>Beautiful Mountains</h2>

          <p>
            Enjoy breathtaking Himalayan landscapes and valleys.
          </p>
        </div>

        <div className="feature-card">
          <h2>Ancient Monasteries</h2>

          <p>
            Visit sacred temples and monasteries across Bhutan.
          </p>
        </div>

        <div className="feature-card">
          <h2>Unique Culture</h2>

          <p>
            Experience Bhutanese traditions, festivals, and cuisine.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Landing;