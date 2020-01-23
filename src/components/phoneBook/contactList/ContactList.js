import React, { Component } from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import css from "./contactList.module.css";
import ContactItem from "./contactItem/ContactItem";
import slideTransition from "../../transitions/slide.module.css";


class ContactList extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired
  };


  render() {
    const newArr = this.props.contacts.filter(e =>
      e.name.toLowerCase().includes(this.props.filter)
    );

    return (
      <TransitionGroup component="ul" className={css.containerUl}>
        {this.props.filter.length === 0
          ? this.props.contacts.map(e => (
              <CSSTransition
                key={e.id}
                timeout={250}
                classNames={slideTransition}
                unmountOnExit
              >
                <ContactItem
                  onHandleClickDelete={() => this.props.deletedPost(e.id)}
                  object={e}
                />
              </CSSTransition>
            ))
          : newArr.map(e => (
              <CSSTransition
                key={e.id}
                timeout={250}
                classNames={slideTransition}
                unmountOnExit
              >
                <ContactItem
                  onHandleClickDelete={() => this.props.deletedPost(e.id)}
                  object={e}
                />
              </CSSTransition>
            ))}
      </TransitionGroup>
    );
  }
}



export default ContactList
