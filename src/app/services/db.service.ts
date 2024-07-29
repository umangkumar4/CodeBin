import { Injectable } from '@angular/core';
import { getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc , doc, getDoc } from "firebase/firestore"; 
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  db ?:any;
  constructor( private authService  : AuthService) {
    this.db = getFirestore();
   }

   
   async createSnippet(codeSnippet : {title:string, code : string }){
    const docRef = await addDoc(collection(this.db, "snippets"),{
      ...codeSnippet,
      by : this.authService.getUid()
    });
    console.log("Document written with ID: ", docRef.id);
   }
   async getAllSnippets(){
    const allData:any = [];
    const querySnapshot = await getDocs(collection(this.db, "snippets"));
    querySnapshot.forEach((doc)=>{
     allData.push({id:doc.id , ...doc.data()});
    })
    return allData
  }

  async getDocumentById(docId:string){
    const docRef = doc(this.db,'snippets',docId);
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
      return docSnap.data();
    }
    else{
      console.log('No such document')
      return
    }

  }

}
   