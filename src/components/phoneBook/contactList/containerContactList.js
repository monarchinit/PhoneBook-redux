import { connect } from "react-redux";
import { deletedPost } from "../../../redux/operations";
import ContactList from './ContactList'

const mapStateToProps = state => state;

const mapDispatchToProps = {
  deletedPost
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
