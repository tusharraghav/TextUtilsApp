import React, {useState} from 'react'
import './TextForm.css';  // Add this at the top of your file


function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert("Convert to Uppercase", "success");
    }
    const handleLoClick = ()=>{
        //console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert("Convert to Lowercase", "success");
    }

    const handleClearClick = ()=>{
        //console.log("Clear Text was clicked");
        let newText = '';
        setText(newText);
        // props.showAlert("Text Cleared", "success");
    }

    const handleOnChange = (event)=>{
        //console.log("On change" + text);
        setText(event.target.value);
    }

    // Copies to clipboard
    const handleCopy = () => {
        console.log("I am copied");
        var text = document.getElementById("myBox");
        text.ariaSelected();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        // props.showAlert("Copied to clipboard!", "success");
    }

    const [text, setText] = useState('Enter text here');
    //text = "new text"; // wrong way to change the state
    //setText("new text"); // Correct way to change the state
    return (
        <>
            <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white', color:props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className='container my-3' style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}

export default TextForm