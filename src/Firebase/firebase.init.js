import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeHealthCareAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializeHealthCareAuth;