function Home() {
  return (
    <>
      <Card
        txtcolor="black"
        header="Welcome to The Bad Bank"
        title="Now your money is even safer with us!"
        text="Welcome to the all new, Full Stack Bad Bank. Login or create an account to get started. You can check your balance, make a deposit or withdrawal, or take a look everyone else's accounts. You can even delete their accounts too!"
        body={
          <>
            <div className="row align-items-center">
              <div className="col mx-auto">
                <img src="./bank.png" className="img-fluid" width="40%" alt="bank-logo" />
              </div>
              <div className="col">
                <div className="d-grid gap-4 mx-auto">
                  <Link to="/login" className="btn btn-primary btn-md">
                    Login
                  </Link>
                  <Link to="/CreateAccount" className="btn btn-secondary btn-md">
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
