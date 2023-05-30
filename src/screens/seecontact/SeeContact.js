import React, {useState, useEffect, useContext} from 'react';

import {
  ContactBannerWrapper,
  InfoContactWrapper,
  SeeContactsContainer,
} from './styles';
import ContactBanner from '../../components/contactbanner/ContactBanner';
import InfoContact from '../../components/infocontact/InfoContact';
import AbsoluteButton from '../../components/absolutebutton/AbsoluteButton';
import {ReducerContext} from '../../context/ReducerProvider';
import {deleteContact} from '../../apirequests/contacts';
import {
  ActivityIndicatorContainer,
  BaseActivityIndicator,
} from '../../styles/baseUI';

const SeeContact = props => {
  const [showAbsoluteButtonText, setShowAbsoluteButtonText] = useState(true);
  const reducerContextValues = useContext(ReducerContext);
  const {contactsState, dispatchContacts} = reducerContextValues.contacts;
  const {dispatchNotifications} = reducerContextValues.notifications;
  const {dispatchUser} = reducerContextValues.user;
  const [currentOffset, setCurrentOffset] = useState(0);
  const contact = props.route.params;

  useEffect(() => {
    props.navigation.setOptions({title: contact.name});
  }, []);

  useEffect(() => {
    if (contactsState?.deleting) {
      deleteContact(dispatchContacts, contact.id, dispatchNotifications);
      dispatchUser({type: 'SEARCHBAR_DISABLED'});
      props.navigation.navigate('Contacts');
    }
  }, [contactsState?.deleting]);

  return (
    <>
      {contactsState?.deleting ? (
        <ActivityIndicatorContainer>
          <BaseActivityIndicator />
        </ActivityIndicatorContainer>
      ) : (
        <>
          <SeeContactsContainer
            onScroll={event => {
              if (event.nativeEvent.contentOffset.y > currentOffset) {
                setShowAbsoluteButtonText(false);
              } else {
                setShowAbsoluteButtonText(true);
              }
              setCurrentOffset(event.nativeEvent.contentOffset.y);
            }}>
            <ContactBannerWrapper>
              <ContactBanner
                name={contact.name}
                number={contact.id}
                photo={contact.photo}
              />
            </ContactBannerWrapper>
            <InfoContactWrapper>
              <InfoContact contact={contact} />
            </InfoContactWrapper>
          </SeeContactsContainer>
          <AbsoluteButton
            iconName={''}
            label={'Editar contato'}
            showText={showAbsoluteButtonText}
            onPress={() =>
              props.navigation.navigate('EditCreateContact', {...contact})
            }
          />
        </>
      )}
    </>
  );
};
export default SeeContact;
