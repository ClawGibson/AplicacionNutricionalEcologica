import React, { useState, useEffect } from "react";
//import * as firebase from "firebase";
import Loading from "../Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {
  const [login, setLogin] = useState(null);
  /*
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true); //si user es false no esta logeado
    });
  }, []);

  if (login === null) return <Loading isVisible={true} text="cargando..." />;
*/
  return login ? <UserLogged /> : <UserGuest />;
}
