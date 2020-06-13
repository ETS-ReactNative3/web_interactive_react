import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";

import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import ResetPassword from "./Authentication/ResetPassword";
import ClassRoom from "./game/ClassRoom"

import HomePage from "./HomePage/HomePage";
import MyGames from "./MyGames/MyGames"
import Copyright from "./Authentication/Copyright";
import CreateRoomButton from "./createRoom/CreateRoomButton"
import {getURL, checkRoomExistance} from "../helpers/newRoomHelper"


import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

// const WebSocket = require("ws");
// const wss = new WebSocket.Server('ws://www.localhost.com/8080');
export default function App() {
  const [ user, setUser ] = useState("");
  const history = useHistory();

  async function handleLogout (event) {
    event.preventDefault();
    // await Auth.signOut();
    setUser(false);
    history.push("/home");
  }

  async function handleLogging (event) {
    event.preventDefault();
    // console.log("event", event.target.email.value)
    // console.log("event2", event.target.password.value)
    // if (user) {
    //   setUser(event.target.email.value)
    //   history.push("/MyGames");
    // } else {

    // }
    try {
      // await Auth.signIn(user.email, user.password);
      // userHasAuthenticated(true);
      setUser(event.target.email.value)
      history.push("/MyGames");
    } catch (e) {
      alert(e.message);
    }
  }


  // function to retrieve first name from database
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // })
  return (
    <React.Fragment>
      <Navbar user={ user } logout={ handleLogout } />

      <Switch>
        <Route path="/home">
         <HomePage />
        </Route>
        <Route path="/MyGames">
         <MyGames />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Login">
          <Login login={ handleLogging } />
        </Route>
        <Route path="/ResetPassword">
          <ResetPassword />
        </Route>
        <Route exact path="/teacher/room/:id">
          {/* <h1>HELLO</h1> */}
          <ClassRoom  isTeacher={true}  checkRoomExistance={checkRoomExistance} />
        </Route>
        <Route exact path="/teacher/:id">
          <CreateRoomButton getURL={getURL}/>
            {/* <ClassRoom wss={wss}/> */}
        </Route>
        <Route exact path="/classroom/:id">.
          <ClassRoom  isTeacher={false}  checkRoomExistance={checkRoomExistance} />
        </Route>
      </Switch>

      <Copyright />
    </React.Fragment>
  );
}
// {new WebSocket('ws://localhost:12345')}
// const wss = new WebSocket('ws://localhost:12345');

// AUTHENTICATION AND MENU:
  // 1 - when logged in show users first name
  // 4 - prevent dropdown to pop when logged in for first time
  // 5 - use first name for dropdown
