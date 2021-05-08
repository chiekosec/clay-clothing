import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

// import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";
import { fetchCollectionsStart } from "../../redux/shop/shop-actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview-container";
import CollectionPageContainer from "../collection/collection-container";

import "./shop.scss";

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
