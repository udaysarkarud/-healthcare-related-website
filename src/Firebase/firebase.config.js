const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREAUTH_APIKEY,
    authDomain: process.env.REACT_APP_FIREAUTH_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREAUTH_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREAUTH_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREAUTH_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREAUTH_APPID,
};

export default firebaseConfig;