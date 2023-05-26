export default {
  register: [
    {
      type: 'text',
      placeholder: 'Nome',
      name: 'name',
      required: true,
    },
    {
      type: 'text',
      placeholder: 'E-mail',
      name: 'email',
      required: true,
    },
    {type: 'text', placeholder: 'Telefone', name: 'phone'},
    {type: 'text', placeholder: 'Celular', name: 'mobile'},
    {type: 'text', placeholder: 'Endereço', name: 'address'},
    {type: 'text', placeholder: 'Bairro', name: 'district'},
    {type: 'text', placeholder: 'Cidade', name: 'city'},
    {type: 'text', placeholder: 'Estado', name: 'state'},
  ],
};
