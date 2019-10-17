import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { loadCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionLoading,
  selectIsCollectionsLoaded
} from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";
import Spinner from "../../components/spinner/Spinner";

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends Component {
  // retreive data for collections from firebase
  componentDidMount() {
    const { loadCollectionsStartAsync } = this.props;
    loadCollectionsStartAsync();
  }

  render() {
    const { match, isLoading, isLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading,
  isLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  loadCollectionsStartAsync: () => dispatch(loadCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
