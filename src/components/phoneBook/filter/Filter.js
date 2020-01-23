import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import css from "./filter.module.css";



class Filter extends Component {
  handleChangeValue=(e)=>{
    this.props.changeFilterValue(e.target.value)
  }

  render() {
    return (
      <>
        <div className={css.container}>
          <h3 className={css.title}>Find contacts by name</h3>
          <div className={css.wrapper}>
            <TextField
              id="1"
              label="Name"
              variant="outlined"
              color="primary"
              onInput={this.handleChangeValue}
              name="name"
              className={css.input}
              size="small"
              type="search"
            />
          </div>
        </div>
      </>
    );
  }
}


export default Filter
