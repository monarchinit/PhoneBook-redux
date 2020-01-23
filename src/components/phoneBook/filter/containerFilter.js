import { connect } from "react-redux";
import { changeFilterValue } from "../../../redux/actions";
import Filter from "./Filter";

const mapDispatchToProps = {
  changeFilterValue
};

export default connect(null, mapDispatchToProps)(Filter);
