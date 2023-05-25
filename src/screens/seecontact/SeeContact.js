import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {
  ContactBannerWrapper,
  InfoContactWrapper,
  SeeContactsContainer,
} from './styles';
import ContactBanner from '../../components/contactbanner/ContactBanner';
import InfoContact from '../../components/infocontact/InfoContact';
import AbsoluteButton from '../../components/absolutebutton/AbsoluteButton';

const SeeContact = props => {
  const [showAbsoluteButtonText, setShowAbsoluteButtonText] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  const contact = props.route.params;

  useEffect(() => {
    props.navigation.setOptions({title: contact.name});
  }, []);

  return (
    <>
      <SeeContactsContainer
        onScroll={event => {
          if (event.nativeEvent.contentOffset.y > currentOffset) {
            setShowAbsoluteButtonText(true);
          } else {
            setShowAbsoluteButtonText(false);
          }
          setCurrentOffset(event.nativeEvent.contentOffset.y);
        }}>
        <ContactBannerWrapper>
          <ContactBanner name={contact.name} number={contact.id} />
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
  );
};
export default SeeContact;
