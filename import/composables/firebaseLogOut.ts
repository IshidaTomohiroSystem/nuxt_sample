import { getAuth, signOut } from "firebase/auth";
import firebase from "./firebaseInit";

const auth = firebase.auth;

export const useAuth = () => {
    const logOut = () =>{
        signOut(auth).then(() => {
            alert("ログアウト成功")
            // Sign-out successful.
        }).catch((error) => {
            alert("ログアウト成功")
            // An error happened.
        });
    }
    return {
        logOut
    }
}
  