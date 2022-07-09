import React from 'react'

export default function Container(props) {
  if (props.optionTheme == "pink") {
    return <div className="w-screen h-screen absolute bg-FFF0F6">{props.children}</div>
  } else if (props.optionTheme == "blue") {
    return <div className="w-screen h-screen absolute bg-EDF2FF">{props.children}</div>
  } else if (props.optionTheme == "darkBlue") {
    return <div className="w-screen h-screen absolute bg-00082F">{props.children}</div>
  } else if (props.optionTheme == "darkPink") {
    return <div className="w-screen h-screen absolute bg-1F000B">{props.children}</div>
  }
}