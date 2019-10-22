import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { loadCollectionsStart } from "../../redux/shop/shop.actions";
import Spinner from "../../components/spinner/Spinner";

import { ShopPageContainer } from "./shop-page.styles";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/CollectionsOverview.container")
);

const CollectionPageContainer = lazy(() =>
  import("../collection/CollectionPage.container")
);

const ShopPage = ({ match, loadCollectionsStart }) => {
  // retreive data for collections from firebase
  useEffect(() => {
    loadCollectionsStart();
  }, [loadCollectionsStart]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  loadCollectionsStart: () => dispatch(loadCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
