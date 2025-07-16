import React, {useState} from 'react'

function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "White",
    // });

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    }

  return (
    <div className='container'>
        <h2 className='my-3' style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze Your Text
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils gives you a way to analyze your text quickly and efficiently. </strong> Be it word count, characters count or reading times.
                </div>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong> TextUtils is a free character counter tool that provides instant character count </strong> and word count statistics for a given text. TextUtils reports the number of words and characters. This it is suitable for writing text with word/ character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible 
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong> This word counter software works in any web Browsers such as Chrome, firefox, internet explorer, safari.</strong> It suits to count characters in facebook, blog, books, excel document, pdf document, eassays, etc.
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='conatiner my-3'>
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}

export default About;

