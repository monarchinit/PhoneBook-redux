import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/containerFilter";
import ContactList from "./contactList/containerContactList";
import Title from "./title/Title";
import Alert from "../alert/Alert";
import popTransition from "../transitions/pop.module.css";
import slideTransition from "../transitions/slide.module.css";
import css from "./phoneBook.module.css";
import Loader from "./loader/loader";

class PhoneBook extends Component {
  state = {
    isFilterNead: false,
    isLogo: false,
    alertName: null,
    alertFlag: false
  };

  pushContacts = (contact, e) => {
    e.persist();
    if (e.target.name.value === "") {
      this.alert("enter name");
      return;
    }
    const flag = this.props.contacts.find(
      ev => e.target.name.value === ev.name
    );
    flag
      ? this.alert(`${e.target.name.value} is already in contacts!!!`)
      : this.props.addPost(contact);
  };

  alert = name => {
    this.setState({ alertName: name, alertFlag: true });
    setTimeout(() => {
      this.setState({ alertName: "", alertFlag: false });
    }, 3000);
  };

  componentDidMount = async () => {
    this.setState({ isLogo: true });
    this.props.fetchPost();
  };

  componentDidUpdate(prevProp) {
    if (prevProp.contacts !== this.props.contacts)
      if (this.props.contacts.length > 1) {
        this.setState({ isFilterNead: true });
      } else {
        this.setState({ isFilterNead: false });
        this.props.emptyFilterValue();
      }
  }

  render() {
    const { isFilterNead, isLogo, alertName, alertFlag } = this.state;

    return (
      <>
        <CSSTransition
          in={alertFlag}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <Alert title={`${alertName} `} />
        </CSSTransition>
        <CSSTransition
          in={isLogo}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <Title title="Phonebook" />
        </CSSTransition>
        <div className={css.container}>
          <ContactForm isLogo={isLogo} pushContacts={this.pushContacts} />
          <CSSTransition
            in={isFilterNead}
            timeout={250}
            classNames={popTransition}
            unmountOnExit
          >
            <Filter onInput={this.handleInputSearch} />
          </CSSTransition>
          <ContactList />
        </div>
        {this.props.loading && <Loader />}
      </>
    );
  }
}

export default PhoneBook;
