import { Car } from "./models/Car";

function App() {
  const myCar = new Car("BMW", "X6", 2026);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🚗 Vehicle App</h1>
      <button onClick={() => myCar.start()}>
        Start Car
      </button>
    </div>
  );
}

export default App;