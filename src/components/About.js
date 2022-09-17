import React from 'react'

export default function About(props) {
    const aboutTextBox={
        // border:"2px solid black",
        // borderRadius:"5px",
        fontSize:"20px"
    }
    const DarkBackground={
        backgroundColor:"black",
        color:"white"
    }
    const LightBackground={
        backgroundColor:"white",
        color:"black"
    }
    
  return (
    <div className='backGround' style={props.mode==="light"?LightBackground :DarkBackground}>
        <div className="container">

        <h1 className="headingAbout" >About us</h1>
        </div>
        <hr />
        <div className="container py-4 px-4 " style={aboutTextBox}>
            This web application is used to perform some basic functionalities on the text of the user we can remove extra spaces ,copy the text , get the word length , time it will take to read the text , converting every letter to lower or upper case and many more will be added soon . All of these features comes in handy.
            <br />
            <br />
            Developer:
            <br />
            Arpit Jha 
            <br />
            <a href='https://github.com/arpitjha867'>Github</a>
            <br />
            <a href='https://www.linkedin.com/in/arpit-jha-385ba4190/'>LinkedIn</a>
        </div>
    </div>
  )
}
