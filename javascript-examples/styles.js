import React, { Component } from "react"
import "./StyleExample.css"

const buttonStyles = {
  backgroundColor: "blueviolet",
  border: "0px",
  padding: "10px",
  borderRadius: "10px",
  display: "block"
}

const StyleExample = (props) => {
  const trueBoolean = true
  return (
    <div>
      <h3>Style Example</h3>

      <button style={buttonStyles}>Test 1 - style= ( buttonStyles ) </button>

      <button className={`bgBtn`}>Test 1 - className= bgBtn</button>

      <button
        className={`
                ${trueBoolean ? `trueColors` : `falseColors`}
            `}
      >
        Test 1 - className= bgBtn
      </button>
    </div>
  )
}

export default StyleExample
