import React from "react";
import firebase from "firebase/app";

import "./App.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";

import AppContainer from "./AppContainer";
import firebaseConfig from "./firebase.config";

import "firebase/firestore";

require("dotenv").config();

firebase.initializeApp(firebaseConfig);

function App() {
	return <AppContainer />;
}

export default App;
