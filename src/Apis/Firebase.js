import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    updateDoc,
    increment
    } from 'firebase/firestore'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export const getDB = new Promise((res,rej) => {
  const colRef = collection(DB,'products')
  getDocs(colRef).then((snapshot)=>{
      const resultados = snapshot.docs.map((rawDoc)=>{
          return{
              id: rawDoc.id,
              ...rawDoc.data()
          }
          
      })
      res(resultados)
  }).catch(error=>{
      rej(console.log("Error al traer los resultados", error))})
  }
)


export const getDBbyUser = async () =>{
  const colRef = await collection(DB,'products');
  return(
      new Promise((res, rej) =>{
          getDocs(colRef).then(snapshot =>{
              if(snapshot.exists()){
                  const resultados = snapshot.docs.map((rawDoc)=>{
                      return{
                          id: rawDoc.id,
                          ...rawDoc.data()
                      }
                  })
                  res(resultados)}
          }).catch(error => rej(error) )
      })
  )
}

export const obtenerProductos = async () => {
  let resultados;
  const refCol = await collection(DB,'products')
  return (
      new Promise((res,rej) => {
           getDocs(refCol).then((snapshot) => {
                resultados = snapshot.docs.map((rawDoc)=>{
                    return{
                        id: rawDoc.id,
                        ...rawDoc.data()
                    }  
                })
                console.log(resultados)
                res(resultados)
        }).catch(error => rej(error) )
      })
  )
}