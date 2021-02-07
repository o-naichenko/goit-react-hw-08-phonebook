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
  setToken(data.token);
  return data;
}
export async function logIn(logInData) {
  const { data } = await axios.post('/users/login', logInData);
  setToken(data.token);
  return data;
}
export async function logOut() {
  await axios.post('/users/logout');
  unsetToken();
}
export async function current(user) {
  await axios.get(`/users/current/${user}`);
}

// CONTACTS
export async function fetchContacts() {
  const data = axios.get('/contacts').then(res => res.data);
  return data;
}

export async function postContact(contact) {
  const data = await axios.post('/contacts', contact).then(res => res.data);
  return data;
}

export async function patchContact(contactId) {
  const data = await axios.post('/contacts', contactId).then(res => res.data);
  return data;
}

export async function deleteContact(contactId) {
  await axios.delete(`/contacts/${contactId}`);
}
