import { connect } from "react-redux";
import { fetchPost } from "../../redux/operations";
import { addPost } from "../../redux/operations";
import {emptyFilterValue} from '../../redux/actions'
import PhoneBook from "./PhoneBook";

const mapStateToProps = state => state;

const mapDispatchToProps = {
  fetchPost,
  addPost,
  emptyFilterValue
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
