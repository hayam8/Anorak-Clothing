import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { loadCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverview.container";
import CollectionPageContainer from "../collection/CollectionPage.container";

const ShopPage = ({ match, loadCollectionsStart }) => {
  // retreive data for collections from firebase
  useEffect(() => {
    loadCollectionsStart();
  }, [loadCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  loadCollectionsStart: () => dispatch(loadCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
