const validator = (inputName, value) => {
  switch (inputName) {
    case 'email':
      return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
    case 'password':
      return value.length >= 7 ? true : false;
    case 'name':
      return value.length >= 4 ? true : false;
    default:
      break;
  }
};

const tools = {
  validator,
};
export default tools;
