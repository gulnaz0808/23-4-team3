const prodConfig = {
  apiKey: 'AIzaSyArhXwbSJH9-LXGI6OvGHEHLGsB0n1V2HI',
  authDomain: 'cargo-fleet-d41ed.firebaseapp.com',
  projectId: 'cargo-fleet-d41ed',
  databaseURL: 'https://cargo-fleet-d41ed-default-rtdb.firebaseio.com',
  storageBucket: 'cargo-fleet-d41ed.appspot.com',
  messagingSenderId: '341863406955',
  appId: '1:341863406955:web:454407a739fa8120bfc02e'
};
const devConfig = {
  apiKey: 'AIzaSyArhXwbSJH9-LXGI6OvGHEHLGsB0n1V2HI',
  authDomain: 'cargo-fleet-d41ed.firebaseapp.com',
  projectId: 'cargo-fleet-d41ed',
  databaseURL: 'https://cargo-fleet-d41ed-default-rtdb.firebaseio.com',
  storageBucket: 'cargo-fleet-d41ed.appspot.com',
  messagingSenderId: '341863406955',
  appId: '1:341863406955:web:454407a739fa8120bfc02e'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
