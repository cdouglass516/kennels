import React from "react"
import ReactDOM from "react-dom"
import { Kennel } from "./components/Kennel.js"
const jerry = "Mighty Mouse"
ReactDOM.render(
  <React.StrictMode>
    <Kennel props={jerry} />
  </React.StrictMode>,
  document.getElementById('root')
);
