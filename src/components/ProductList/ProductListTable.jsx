import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import axios from "axios";
import { Link, withRouter, useHistory } from "react-router-dom";

import { UserContextAPI } from "../ContextAPI/UserContextAPI";

function ProductListTable({ allSelected, setAllSelected }) {
  const [nameChecked] = useState(true);
  const [descChecked, setdescChecked] = useState(true);
  const [manChecked, setmanChecked] = useState(true);
  const [prChecked, setprChecked] = useState(true);
  const [qtyChecked, setqtyChecked] = useState(true);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const { user } = useContext(UserContextAPI);
  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:4000/products").then((res) => {
        setProducts(res.data);
      });
    }
    fetchData();
  }, []);

  let navigation = useHistory();

  const onDelete = () => {
    if (user) {
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
    } else {
      navigation.push({
        pathname: "./Login",
        state: { deleteproduct: "delete" },
      });
    }
  };

  // const navigation = useHistory();

  return (
    <Container fluid>
      <Row>
        <Col className="mb-3">
          <Container fluid>
            <Row nogutters>
              <Col md={1}>
                <Button variant="danger" className="btn-sm" onClick={onDelete}>
                  Delete
                </Button>
              </Col>
              <Col md={2}>
                <input
                  type="checkbox"
                  id="prodDesc"
                  defaultChecked={descChecked}
                  onChange={() => setdescChecked((prev) => !prev)}
                />
                <label className="small ml-1" htmlFor="prodDesc">
                  Description
                </label>
              </Col>
              <Col md={2}>
                <input
                  type="checkbox"
                  id="manufacturer"
                  defaultChecked={manChecked}
                  onChange={() => setmanChecked((prev) => !prev)}
                />
                <label className="small ml-1" htmlFor="manufacturer">
                  Manufacturer
                </label>
              </Col>
              <Col md={1}>
                <input
                  type="checkbox"
                  id="price"
                  defaultChecked={prChecked}
                  onChange={() => setprChecked((prev) => !prev)}
                />
                <label className="small" htmlFor="price">
                  Price
                </label>
              </Col>
              <Col md={2}>
                <input
                  type="checkbox"
                  id="quantity"
                  defaultChecked={qtyChecked}
                  onChange={() => setqtyChecked((prev) => !prev)}
                />
                <label className="small ml-1" htmlFor="quantity">
                  Quantity
                </label>
              </Col>

              <Col md={4}>
                <InputGroup size="sm">
                  <FormControl
                    className="input-sm border-warning"
                    placeholder="Product Name"
                    aria-label="Product Name"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Container>
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
              {products
                .filter((product) => {
                  if (search === "") return product;
                  else if (
                    product.productName
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                    return product;
                  else return null;
                })
                .map((product) => (
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
