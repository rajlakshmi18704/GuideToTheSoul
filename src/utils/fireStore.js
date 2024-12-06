import { db } from "./firebase";
import {addDoc,collection,deleteDoc,doc,getDoc, getDocs,setDoc,} from "firebase/firestore";
import { useCallback } from "react";
export const useFireStore=()=>{
    const addDocument=async(collectionName,data)=>{
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Document written with ID: ", docRef.id);
    };
    const addToSaveSlokas=async(userId,dataId,data)=>{
        try{
               if (await checkIfSlokaSaved(userId, dataId)) {
       console.log("slok already saved")
        return false;}
          
const docRef = doc(db, "users", userId, "savedSlokas", dataId);
            await setDoc(docRef, data);
            console.log("Sloka added successfully!");
        }
    
           
            
        catch (error){
console.log(error,"Error adding Component")
        }
    }
      const checkIfSlokaSaved = async (userId, dataId) => {
        const docRef = doc(
          db,
          "users",
          userId?.toString(),
        "savedSlokas",
          dataId?.toString()
        );
    
    const docSnap=await getDoc(docRef);
     console.log("Checking if Sloka is saved:", docSnap.exists());
    if(docSnap.exists()){
        return true;
    }
   
    else{
        return false; 
}
  
}
   
    const RemoveSlokas=async(userId, dataId)=>{
try{
    console.log("DB Instance:", db);
console.log("User ID:", userId);
console.log("Data ID:", dataId);

const docRef = doc(db, "users", userId, "savedSlokas",dataId);
await deleteDoc(docRef);

}
catch(error){
    console.log(error)
}
    }
    const getSavedSlokas=useCallback(async (userId) => {
        const querySnapshot = await getDocs(
          collection(db, "users", userId, "savedSlokas")
        );
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        return data;
      }, []);
 
  
return {
    addDocument,
   addToSaveSlokas,
    RemoveSlokas,
    checkIfSlokaSaved,
    getSavedSlokas,
}
}


