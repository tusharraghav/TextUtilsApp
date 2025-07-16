import React, {useState} from 'react'

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
                <h1 className='mb-1'>{props.heading}</h1>
                <div className="mb-2">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white', color:props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className='container my-3' style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}

export default TextForm