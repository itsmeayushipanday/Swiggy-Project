import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Offers from "./Components/Offers";
import Search from "./Components/Search";
import SignIn from "./SignIn";
import Help from "./Components/Help";
import Cart from "./Components/Cart";

function AppLayout() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={Body} />
          <Route path="/offers" Component={Offers} />
          <Route path="/search" Component={Search} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/help" Component={Help} />
          <Route path="/cart" Component={Cart} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppLayout;
