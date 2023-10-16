import React, { useState } from "react";
import CardsContainer from "./components/Cards/functional/CardsContainer";
import SearchContainer from "./components/Search/functional/SearchContainer";

const App = () => {

  const [data, setData] = useState(undefined);
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <SearchContainer setData={setData} setCity={setCity} setIsLoading={setIsLoading} />
      {data && <CardsContainer data={data} city={city} isLoading={isLoading}/>}
    </>
  );
}

export default App;
