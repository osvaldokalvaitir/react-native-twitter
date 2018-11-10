import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.7:3000'
});

export default api;

// Emulador de Android não reconhece localhost
// Para Android Studio usar 10.0.2.2:3000
// Para Genymotion usar 10.0.3.2:3000

// Emulador de iOS usar localhost

// Testando no celular colocar o ip do servidor