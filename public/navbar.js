function NavBar() {
  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        let homeAnchor = document.getElementById('homeAnchor');
        homeAnchor.click();
      });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-2 stroke">
      <a className="navbar-brand ps-2" href="#/">
        Bad Bank
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" id="home">
            <a className="nav-link" id="homeAnchor" href="#/">
              Home
            </a>
          </li>
          <li className="nav-item" id="create">
            <a className="nav-link" href="#/CreateAccount/">
              Create Account
            </a>
          </li>
          <li className="nav-item" id="balance" style={{ display: 'none' }}>
            <a className="nav-link" href="#/balance/">
              Balance
            </a>
          </li>
          <li className="nav-item" id="deposit" style={{ display: 'none' }}>
            <a className="nav-link" href="#/deposit/">
              Deposit
            </a>
          </li>
          <li className="nav-item" id="withdraw" style={{ display: 'none' }}>
            <a className="nav-link" href="#/withdraw/">
              Withdraw
            </a>
          </li>
          <li className="nav-item" id="data" style={{ display: 'none' }}>
            <a className="nav-link" href="#/AllData/">
              All Data
            </a>
          </li>
          <li className="nav-item" id="login">
            <a className="nav-link fw-bold" href="#/login/">
              Log In
            </a>
          </li>
          <li className="nav-item" id="logout" style={{ display: 'none' }}>
            <a className="nav-link cursor-pointer fw-bold" onClick={handleLogout}>
              Log Out
            </a>
          </li>
        </ul>
      </div>

      <div className="nav justify-content-end">
        <span className="navbar-text" id="logInStatus">
          No User
        </span>
      </div>
    </nav>
  );
}
