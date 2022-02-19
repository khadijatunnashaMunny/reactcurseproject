import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    console.log(props);
    const deleteConactHandler = (id) => {
        props.getContactId(id);
      };
    const renderContactList = props.contacts.map((contact) => {
      return (
          <div>
                <ContactCard
                contact={contact}
                clickHander={deleteConactHandler}
                key={contact.id}
                />

          </div>
      
      );
    });
    return <div className="ui celled list">{renderContactList}</div>;
  };
  

export default ContactList