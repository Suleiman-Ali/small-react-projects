import TRAINING_DATA from '../data/trainingData';

function Data(): JSX.Element {
  return (
    <div className="data-count">
      <h1>There are {TRAINING_DATA.length} Data Entry in the Table </h1>

      <table className="table table-striped table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">P_Class</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Siblings / Spouses</th>
            <th scope="col">Parents / Children</th>
            <th scope="col">Fare</th>
          </tr>
        </thead>
        <tbody>
          {TRAINING_DATA.map((arr, index) => (
            <tr key={index}>
              <td>{Math.round(arr[0])}</td>
              <td>{Math.round(arr[1])}</td>
              <td>{Math.round(arr[2])}</td>
              <td>{Math.round(arr[3])}</td>
              <td>{Math.round(arr[4])}</td>
              <td>{Math.round(arr[5])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
