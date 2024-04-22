import mockData from "./constants/mock.json";

function Product({ data }) {
  return (
    <div
      style={{
        border: "1px solid #000",
        padding: "1rem",
      }}
    >
      <h1>Model: {data.model}</h1>
      <img src={data.modelImage} alt="model image" width={250} height={250} />
      <h1>{data.baseSpecification.processor}</h1>
      <h1>{data.baseSpecification.graphicProcessor}</h1>
      <h1>{data.baseSpecification.momory}</h1>
      <h1>{data.baseSpecification.storageCapacity}</h1>

      <p>{data.modelColorName}</p>
      <p>{data.features.neural_engine}</p>
      <p>{data.features.display}</p>
      <p>{data.features.camera}</p>
      <p>{data.features.ports}</p>
      <p>{data.features.power_adapter}</p>
      <p>{data.features.external_display_support}</p>
      <p>{data.features.keyboard}</p>
      <p>{data.features.trackpad}</p>
      <p>{data.features.power_adapter}</p>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {mockData.map((item) => (
        <Product data={item} />
      ))}
    </div>
  );
}

export default App;
