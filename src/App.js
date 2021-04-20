import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import CheckoutPage from "./pages/checkout/Checkout";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selectors";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        this.setState({ isLoading: true });
        const userRef = await createUserProfileDocument(userAuth);
        // console.log("USRREF", userRef, "USR", userAuth);
        this.setState({ isLoading: false });

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        {/* {this.state.isLoading ? <h1>LOADING...</h1> : ""} */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
