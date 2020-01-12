import React, { useContext, Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ContactItem } from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import Spinner from '../layout/Spinner';

export const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getCotacts, loading } = contactContext;

  useEffect(() => {
    getCotacts();
    //eslint-disable-next-line
  }, []);

  if (contacts && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts != null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(c => (
                <CSSTransition key={c._id} timeout={500} classNames='item'>
                  <ContactItem contact={c} />
                </CSSTransition>
              ))
            : contacts.map(c => (
                <CSSTransition key={c._id} timeout={500} classNames='item'>
                  <ContactItem contact={c} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
