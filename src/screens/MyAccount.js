import React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

const NavVarLine = {
  width: "100%",
  height: "0.1em",
  backgroundColor: "lightgray",
}

function MyAccount(props) {
  return (
    <>
      <Navigation />
      <div></div>
      <Footer />
    </>
  )
}

export default MyAccount
