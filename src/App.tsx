import { useEffect, useRef, useState } from "react";
import ProductList from "./components/productList";

const connecting = () => console.log('Connecting');
const disconnecting = () => console.log ('Disconnecting');

function App() {
  const [category, setCategory] = useState('');

  return (
    <>
      <select name="" id="" className="form-select" onChange={(event) => setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </>
  )
}

export default App
