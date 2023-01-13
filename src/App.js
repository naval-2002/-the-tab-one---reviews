import Bottom from "./components/bottom";
import Head from "./components/head";
import Side from "./components/side";
import { useState, useEffect } from "react";

function App() {
  const [company, setCompany] = useState([]);
  const [individual, setIndividual] = useState([]);
  useEffect(() => {
    fetch(`http://course-api.com/react-tabs-project`)
      .then((res) => res.json())
      .then((val) => setCompany(val) & setIndividual([val[0]]));
  }, []);

  const Clicked = (cName) => {
    const data = company.filter((value) => value.company === cName);
    setIndividual(data);
  };

  return (
    <div className="App">
      <Head />
      <Side datahandler={Clicked} />

      {individual.map((value) => {
        return <Bottom key={value.id} data={value} />;
      })}
    </div>
  );
}

export default App;
