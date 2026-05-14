function Destinations() {
  return (
    <div className="page">

      <h1>Famous Tourist Places in Bhutan</h1>

      <div className="card-container">

        {/* Tiger Nest */}
        <div className="card">
          <img src="/tigernest.jpg" alt="Tiger Nest" />

          <h2>Tiger Nest</h2>

          <p>
            One of Bhutan’s most famous monasteries located on a cliff.
          </p>
        </div>

        {/* Buddha Dordenma */}
        <div className="card">
          <img src="/buddha.jpg" alt="Buddha Dordenma" />

          <h2>Buddha Dordenma</h2>

          <p>
            A giant Buddha statue overlooking Thimphu valley.
          </p>
        </div>

        {/* Thimphu Dzong */}
        <div className="card">
          <img src="/thimphu.jpg" alt="Thimphu Dzong" />

          <h2>Thimphu Dzong</h2>

          <p>
            A beautiful fortress and important cultural landmark.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Destinations;