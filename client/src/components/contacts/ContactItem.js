import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactContext from '../../context/contact/contactContext';

export const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <FontAwesomeIcon icon={faEnvelopeOpen} /> {email}
          </li>
        )}
        {phone && (
          <li>
            <FontAwesomeIcon icon={faPhone} /> {phone}
          </li>
        )}
        <p>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          <button className='btn btn-danger btn-sm' onClick={onDelete}>
            Delete
          </button>
        </p>
      </ul>
    </div>
  );
};

ContactItem.prototype = {
  contact: PropTypes.object.isRequired
};
