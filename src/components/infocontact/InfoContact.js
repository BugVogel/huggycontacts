import React from 'react';

import {InfoContactContainer} from './styles';
import InfoItem from './InfoItem';

const InfoContact = ({contact}) => {
  const infosSection = [
    {label: 'Detalhes'},
    {
      label: 'Nome',
      content: contact?.name ? contact.name : 'Não disponível',
    },
    {
      label: 'Email',
      content: contact?.email ? contact.email : 'Não disponível',
    },
    {
      label: 'Telefone',
      content: contact?.phone ? contact.phone : 'Não disponível',
    },
    {
      label: 'Celular',
      content: contact?.mobile ? contact.mobile : 'Não disponível',
    },
    {label: 'Endereço'},
    {
      label: 'Endereço',
      content: contact?.address ? contact.address : 'Não disponível',
    },
    {
      label: 'Bairro',
      content: contact?.district ? contact.district : 'Não disponível',
    },
    {
      label: 'Cidade',
      content: contact?.city ? contact.district : 'Não disponível',
    },
    {
      label: 'Estado',
      content: contact?.state ? contact.state : 'Não disponível',
    },
  ];

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
