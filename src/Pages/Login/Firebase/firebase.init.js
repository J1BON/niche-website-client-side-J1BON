// import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;