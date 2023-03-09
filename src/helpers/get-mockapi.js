import axios from 'axios';

const { REACT_APP_MOCKAPI_KEY } = process.env;
axios.defaults.baseURL = `https://${REACT_APP_MOCKAPI_KEY}.mockapi.io`;

const endpoint = '/contacts';

export const getContacts = async () => {
  const { data } = await axios.get(endpoint);
  return data;
};
