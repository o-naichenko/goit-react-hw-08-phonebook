import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

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

export async function signUp(user) {
  await axios.post(`/users/signup/${user}`);
}
export async function login(user) {
  await axios.post(`/users/login/${user}`);
}
export async function logout(user) {
  await axios.post(`/users/logout/${user}`);
}
export async function current(user) {
  await axios.get(`/users/current/${user}`);
}
