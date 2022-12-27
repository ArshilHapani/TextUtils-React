import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const [text, setText] = useState('');  //! Here text is a state and used useState hook which help us to create an state variables
    const [setPreviewText, ToSetText] = useState('');
    let cssObj
    const handleUPclick = () => {

        // console.log("UpperCase Function invoked" + text)
        let UCaseText = text.toUpperCase();
        setText(UCaseText) //! Normal variables are not going to update without setText function
        props.showAlerts("Coverted to UPPERCASE", "success");
    }
    const handleLCclick = () => {
        let lCaseText = text.toLowerCase();
        setText(lCaseText)//! Note thid
        props.showAlerts("Coverted to lowercase", "success");
    }
    const handleOnChange = (e) => {
        setText(e.target.value);// console.log("handleOnChange Function invoked ") 
    }
    const ClearText = () => {
        setText('')
        props.showAlerts("cleared the values", "success");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlerts("removed extra spaces", "success");
    }
    const FindReplc = () => {
        let findText = prompt("Enter text to find");
        if (text.includes(findText)) {
            ToSetText(`text founded "${findText}" at position ${text.charAt(findText)}`);
            setText(text);
            props.showAlerts("Found", "success");
        }
        else {
            ToSetText("No such text found.")
            props.showAlerts("No such word exist", "warning");
        }

    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlerts("Text copied to clipboard", "success");
    }
    const CountWord = ()=>{
        let wCount = 0;
        let words = text.split(" ");
        for(let i = 0;i<words.length;i++){
            if (words[i]!=="") {
                wCount+=1;
            }
        }
        return (wCount);
    }
    return (
        <>
            <div className='container'>
                <h2 id="TextAreaHeading" className='my-4'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text} placeholder='Enter text here view' ></textarea>
                    {/* In text area on change event is necessary to change the state variables or update the state variables */}
                </div>
                <button type="button" id="as-1" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={handleUPclick}>Convert to UPPERCASE</button>
                <button type="button" id="as-2" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-1`} onClick={handleLCclick}>Convert to lowercase</button>
                <button type="button" id="as-3" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-1`} onClick={ClearText}>Clear</button>
                <button type="button" id="as-4" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-1`} onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button type="button" id="as-5" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-1`} onClick={FindReplc}><ion-icon name="search-outline"></ion-icon> </button>
                <button type="button" id="as-6" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2 my-1`} onClick={handleCopy}><ion-icon name="clipboard-outline"></ion-icon></button>
            </div>
            <div className="container my-3">
                <h2>Your text Summary</h2>
                <p><b>{CountWord()} words</b>  and  <b>{text.length} Characters </b></p>
                <p> {0.008 * text.split(" ").length} minutes require to read</p>
                <h3>Preview</h3>
                <p style={{ textAlign: "justify" }}>{text.length > 0 ? text : "Text will be previewed here"} </p><br />
                <h4 style={cssObj}>{setPreviewText}</h4>
            </div>
        </>
    )
}

TextForm.prototype = {
    heading: PropTypes.string.isRequired,
}
TextForm.defaultProps = {
    heading: "Heading .."
}