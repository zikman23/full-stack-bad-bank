

function Table() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // fetch all accounts from API (/public/index.js)
    fetch('/account/all')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  function handleDelete(email) {
    // Implement the logic to delete the account based on the provided email
    // You can use fetch or any other method to make the DELETE request to your API
    fetch(`/account/delete/${email}`, { method: 'DELETE' })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Refresh the data after deletion
        fetch('/account/all')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });
      });
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Firebase UID</th>
            <th>Balance</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.email}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.uid}</td>
              <td>{`$${Number(row.balance).toFixed(2)}`}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(row.email)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AllData() {
  return (
    <>
      <h1>All Data</h1>
      <Card txtcolor="black" header={'All Bank Accounts'} body={<Table />} />
    </>
  );
}
