import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/clay.svg";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import CartIcon from "../cart-icon/cart-icon";

import "./header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGNIN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);