const DisplayPage = () => {
  // Retrieve data from local storage, you can replace this with your storage solution
  const schoolName = localStorage.getItem('schoolName');

  return (
    <div>
      <h1>Display School Data</h1>
      {schoolName && <p>School Name: {schoolName}</p>}
      {!schoolName && <p>No school data available.</p>}
    </div>
  );
};

export default DisplayPage;