import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'styled-components';
import {InfoContactContainer, InfoItemContainer} from './styles';
import {BaseText} from '../../styles/baseUI';
import InfoItem from './InfoItem';

const InfoContact = ({contact}) => {
  const infosSection = [
    {label: 'Detalhes'},
    {
      label: 'Nome',
      content: contact.name,
    },
    {label: 'Email', content: contact.email},
    {label: 'Telefone', content: contact.phone},
    {label: 'Celular', content: contact.celphone},
    {label: 'Endereço'},
    {label: 'Endereço', content: contact.addres},
    {label: 'Bairro', content: contact.neightboardhood},
    {label: 'Cidade', content: contact.city},
    {label: 'Estado', content: contact.state},
  ];

  //   const infoAddress = [
  //     {label: 'Endereço'},
  //     {label: 'Endereço', content: contact.addres},
  //     {label: 'Bairro', content: contact.neightboardhood},
  //     {label: 'Cidade', content: contact.city},
  //     {label: 'Estado', content: contact.state}
  //   ];

  return (
    <InfoContactContainer>
      {infosSection.map((item, index) => {
        return (
          <InfoItem key={index} label={item?.label} content={item?.content} />
        );
      })}
    </InfoContactContainer>
  );
};
export default InfoContact;
