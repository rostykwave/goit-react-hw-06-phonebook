const { createAction } = require('@reduxjs/toolkit');

const addContact = createAction('ADD_CONTACT');
addContact({ id: 1, name: 'Lise', number: '023584522' });
