export default class Auth {
    token: string = '';
    user!: {
      id: string;
      key: string;
      name: string;
      email: string;
    }; 
    logonDate!: Date;
  }