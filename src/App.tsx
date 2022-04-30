import React, { useState } from "react";
import { Title, Input, Info, Loading } from "./components";
import "./App.scss";
function App() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div className="container">
      <Title />
      <Input onChange={setInfo} setLoading={setLoading} />
      {!loading && info && <Info info={info} />}
      {loading && <Loading />}
    </div>
  );
}

export default App;
