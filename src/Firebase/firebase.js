import {initializeApp} from "firebase/app";
import {getAuth ,GoogleAuthProvider, signInWithPopup,signOut} from 'firebase/auth';
import {addDoc, collection, getDoc, getDocs, getFirestore} from 'firebase/firestore';
import {emailChecks} from './Validation';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const db = getFirestore();
const colref = collection(db,'users_');


const provider = new GoogleAuthProvider();

export const signup = ()=>{
  console.log(auth);
  signInWithPopup(auth,provider).then(async(el)=>{
    console.log(el);
    let displayName = el.user.displayName;
    let email = el.user.email;

    console.log("asas");
    
    // console.log(emailChecks(['harshudaijk@gmail.com'],email));

    // await addDoc(colref,{
    //   email:"yup@gmail",
    //   username: "yyy",
    //   uu_id : "232323"
    // }).then((el)=>console.log("aded"))

    let pr=[]
    const data = await getDocs(colref);
    data.docs.forEach((doc)=>{
      pr.push({...doc.data()});
    })
    console.log(pr);
    console.log(emailChecks(pr,email));
    console.log(auth);


  })
  .catch((error)=>{
    console.log(error);
  })
}

