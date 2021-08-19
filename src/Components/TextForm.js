import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopyClick = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // const handleColorClick = ()=>{
    //     let newText = text;
    //     textColor = `color:rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
    //     document.getElementById("myBox").style.color = textColor;
    //     console.log(textColor);
    //     setText(newText);
    // }

    const handleOnChange = (event)=>{
        setText(event.target.value);         // we hv to listen to "onChange" event bcz otherwise typing will not work
    }

    // let textColor;
    const [text,setText] = useState('');      // with this we create a new var. "text" which has a state
    const words = text.split(" ").length;
    const readTime = (words*0.4 <60) ? words*0.4 : words*0.4/60;
    const readTimeUnit = (words*0.4 <60) ? "seconds" : "minutes";
    
    return (
        <>
        <div className="container">
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3"  placeholder="Enter text here" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleColorClick}>Randomize Color</button> */}

        </div>
        <div className="container my-5">
            <h2>Your text summary</h2>
            <p>Words : {words} Characters : {text.length}</p>
            {/* <p>{words*0.008} minutes read</p> */}
            <p>{Math.round(readTime*10)/10} {readTimeUnit} read</p>
        </div>
        </>
    )
}

// "useState" is a hook for handling states
// with this we create a new var. "text" which has a state and its value is "Enter text here"  and "setText" is a func.
// which will be used to change its value 
// now we can change value of "text" using "setText" function without reloading page
// but now we can't change it like normal variable   text = "hello"    it won't work
// we hv to use  setText("Hello")
       // const [text,setText] = useState("Enter text here");        
