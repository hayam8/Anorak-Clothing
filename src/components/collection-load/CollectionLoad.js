import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { addCollectionAndDocuments } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

const CollectionLoad = () => {
  addCollectionAndDocuments(
    "collections",
    collectionsArray.map(({ title, items }) => ({ title, items }))
  );
};

const mapStateToProps = createStructuredSelector({
  collectionsArray: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionLoad);
