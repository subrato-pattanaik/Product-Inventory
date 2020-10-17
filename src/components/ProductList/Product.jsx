import React, { useEffect } from "react";
//import axios from "axios";

function Product(props) {
  useEffect(() => {
    props.prod.map((product) => (
      <tr key={product.id}>
        <td>{product.productName}</td>
        <td>{product.productDesc}</td>
        <td>{product.manufacturer}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
      </tr>
    ));
  }, [props.prod]);

  return <></>;
}

export default Product;
