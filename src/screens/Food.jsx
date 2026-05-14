function Food() {
  return (
    <div className="page">

      <h1>Bhutanese Cuisine</h1>

      <div className="card-container">

        {/* Ema Datshi */}
        <div className="card">
          <img src="/ema.jpg" alt="Ema Datshi" />

          <h2>Ema Datshi</h2>

          <p>
            Bhutan’s national dish made with chili and cheese.
          </p>
        </div>

        {/* Momos */}
        <div className="card">
          <img src="/momos.jpg" alt="Momos" />

          <h2>Momos</h2>

          <p>
            Traditional Bhutanese dumplings served with spicy sauce.
          </p>
        </div>

        {/* Shakam Datshi */}
        <div className="card">
          <img src="/shakam.jpg" alt="Shakam Datshi" />

          <h2>Shakam Datshi</h2>

          <p>
            A famous Bhutanese dish made with dried beef and cheese.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Food;