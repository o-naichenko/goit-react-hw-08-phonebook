import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// AUTH
export function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export function unsetToken() {
  axios.defaults.headers.common.Authorization = '';
}

export async function signUp(signUpData) {
  const { data } = await axios.post('/users/signup', signUpData);
  return data;
}
export async function logIn(logInData) {
  const { data } = await axios.post('/users/login', logInData);
  return data;
}
export async function logOut() {
  await axios.post('/users/logout');
}
export async function current() {
  const { data } = await axios.get(`/users/current`);
  return data;
}

// CONTACTS
export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function patchContact(contactId) {
  const { data } = await axios.post('/contacts', contactId);
  return data;
}

export async function deleteContact(contactId) {
  await axios.delete(`/contacts/${contactId}`);
}
