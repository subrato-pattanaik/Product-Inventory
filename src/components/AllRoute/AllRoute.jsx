import React, { Suspense, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./AllRoute.css";
import { UserContextAPI } from "../ContextAPI/UserContextAPI";

const Login = React.lazy(() => import("../Login/Login"));
const Header = React.lazy(() => import("../NavbarHeader/Header"));
const About = React.lazy(() => import("../About/About"));
const ProductList = React.lazy(() => import("../ProductList/ProductList"));
const AddProduct = React.lazy(() => import("../AddProduct/AddProduct"));
const TopViewProduct = React.lazy(() =>
  import("../TopViewProduct/TopViewProduct")
);
const Signup = React.lazy(() => import("../Signup/Signup"));
const Profile = React.lazy(() => import("../Profile/Profile"));
const EditProduct = React.lazy(() => import("../EditProduct/EditProduct"));
const ViewProduct = React.lazy(() => import("../ViewProduct/ViewProduct"));

function AllRoute() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Suspense
        fallback={
          <div className="wrapperLoad">
            <div className="loader"></div>
          </div>
        }
      >
        <UserContextAPI.Provider value={{ user, setUser }}>
          <Header />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/topViewProduct" component={TopViewProduct} />
            <Route path="/productList" component={ProductList} />
            <Route path="/addProduct" component={AddProduct} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Profile" component={Profile} />
            <Route path="/editProduct" component={EditProduct} />
            <Route path="/viewProduct" component={ViewProduct} />
          </Switch>
        </UserContextAPI.Provider>
      </Suspense>
    </div>
  );
}

export default withRouter(AllRoute);
