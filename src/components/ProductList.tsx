import { useEffect, useState } from "react";

const productList = ({category}: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching products in ' + category);
    setProducts(['Clothing', 'Household']);
  }, [category])

  return (

    <div>productList</div>
  )
}

export default productList