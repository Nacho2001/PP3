import { doc, setDoc } from "firebase/firestore";
import db from "./firestoreConnect";

async function setData(colors){
    let objectColor = colors.color;
    let textColor = colors.text;
    const objecto = {
        color: objectColor,
        text: textColor
    }

    await setDoc(doc(db,"getColors","objects"), objecto)
}

export default setData;