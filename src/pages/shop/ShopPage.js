import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { loadCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverview.container";
import CollectionPageContainer from "../collection/CollectionPage.container";

class ShopPage extends Component {
  // retreive data for collections from firebase
  componentDidMount() {
    const { loadCollectionsStart } = this.props;
    loadCollectionsStart();
  }

  render() {
    const { match } = this.props;

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
  }
}

const mapDispatchToProps = dispatch => ({
  loadCollectionsStart: () => dispatch(loadCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
