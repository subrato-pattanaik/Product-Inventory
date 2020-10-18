import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";

import axios from "axios";
import { Link, withRouter } from "react-router-dom";

function ProductListTable({ allSelected, setAllSelected }) {
  const [nameChecked] = useState(true);
  const [descChecked, setdescChecked] = useState(true);
  const [manChecked, setmanChecked] = useState(true);
  const [prChecked, setprChecked] = useState(true);
  const [qtyChecked, setqtyChecked] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:4000/products").then((res) => {
        setProducts(res.data);
      });
    }
    fetchData();
  }, []);

  const onDelete = () => {
    let arraysId = [];
    products.forEach((element) => {
      if (element.select) arraysId.push(element.id);
    });

    if (
      arraysId.length > 0 &&
      window.confirm("Are you sure for deleting the selected product?")
    ) {
      let p = [];
      arraysId.forEach(async (element) => {
        await axios.delete(`http://localhost:4000/products/${element}`);
      });
      p = products.filter((prod) => !arraysId.includes(prod.id));
      setProducts(p);
    } else alert("No product is selected for deleting");
  };

  // const navigation = useHistory();

  return (
    <Container>
      <Row>
        <Col className="mb-3">
          <Button variant="danger" className="btn-sm mr-4" onClick={onDelete}>
            Delete
          </Button>

          <input
            type="checkbox"
            id="prodDesc"
            defaultChecked={descChecked}
            onChange={() => setdescChecked((prev) => !prev)}
            className="mr-2"
          />
          <label className="mr-5" htmlFor="prodDesc">
            Product Description
          </label>

          <input
            type="checkbox"
            id="manufacturer"
            defaultChecked={manChecked}
            onChange={() => setmanChecked((prev) => !prev)}
            className="mr-2"
          />
          <label className="mr-5" htmlFor="manufacturer">
            Manufacturer
          </label>

          <input
            type="checkbox"
            id="price"
            defaultChecked={prChecked}
            onChange={() => setprChecked((prev) => !prev)}
            className="mr-2"
          />
          <label className="mr-5" htmlFor="price">
            Price
          </label>

          <input
            type="checkbox"
            id="quantity"
            defaultChecked={qtyChecked}
            onChange={() => setqtyChecked((prev) => !prev)}
            className="mr-2"
          />
          <label className=" mr-5" htmlFor="quantity">
            Quantity
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table
            className="table-borderless"
            responsive="sm"
            style={{ width: "100%", tableLayout: "auto" }}
          >
            <thead>
              <tr className="border-bottom border-top text-dark">
                <th className="border-right">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(event) => {
                      let value = event.target.checked;
                      setProducts(
                        products.map((prod) => {
                          prod.select = value;
                          return prod;
                        })
                      );

                      setAllSelected((prev) => !prev);
                    }}
                    className="mr-2"
                  />
                </th>
                {nameChecked && <th className="border-right">Product Name</th>}
                {descChecked && (
                  <th className="border-right">Product Description</th>
                )}
                {manChecked && <th className="border-right">Manufacturer</th>}
                {prChecked && <th className="border-right">Price</th>}
                {qtyChecked && <th className="border-right">Quantity</th>}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={product.select}
                      className="mr-2"
                      onChange={(event) => {
                        let value = event.target.checked;
                        setProducts(
                          products.map((prod) => {
                            if (prod.id === product.id) prod.select = value;
                            return prod;
                          })
                        );
                      }}
                    />
                  </td>
                  {nameChecked && (
                    <td>
                      <Link
                        to={{
                          pathname: "/viewProduct",
                          state: { pid: product.id },
                        }}
                      >
                        {product.productName}
                      </Link>
                    </td>
                  )}
                  {descChecked && <td>{product.productDesc}</td>}
                  {manChecked && <td>{product.manufacturer}</td>}
                  {prChecked && <td>{product.price}</td>}
                  {qtyChecked && <td>{product.quantity}</td>}
                  <td>
                    <Link
                      to={{
                        pathname: "/editProduct",
                        state: { pid: product.id },
                      }}
                    >
                      <Button variant="success">Edit</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(ProductListTable);
