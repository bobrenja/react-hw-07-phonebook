import axios from 'axios';

const { REACT_APP_MOCKAPI_KEY } = process.env;
axios.defaults.baseURL = `https://${REACT_APP_MOCKAPI_KEY}.mockapi.io`;

const endpoint = '/contacts';

//get / FETCH /contacts
export const getContacts = async () => {
  const { data } = await axios.get(endpoint);
  return data;
};

//add / POST /contacts
export const addContactMoscapi = async contact => {
  const { data } = await axios.post(endpoint, contact);
  return data;
};
