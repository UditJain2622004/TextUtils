import React, {useState} from 'react'

export default function TextForm(props) {
    
    let style;
    if(props.mode==="dark"){
        style = {
            // color:props.mode==="dark"?props.fontColor:"#343a40",
            color:props.fontColor,
            // backgroundColor:props.mode ==="light"?"white":props.customColor
            backgroundColor:props.customColor
        }
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
        console.log(style);
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")

    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text Cleared","success")

    }

    const handleCopyClick = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied","success")

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success")

    }
    

    //     textColor = `color:rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;

    // const handleReplacerClick = (event)=>{
    //     if(document.getSelection().toString() !== ""){
    //         let replace = document.createElement("input");
    //         replace.className = "replaceText";
    //         let input = document.getElementsByClassName("Buttons");
    //         input[input.length-1].appendChild(replace);
    //         let replaceBtn = document.createElement("button");
    //         replaceBtn.innerHTML = "Replace"
    //         replace.className = "replaceBtn";
    //         // replace.appendChild(replaceBtn)
    //         input[input.length-1].appendChild(replaceBtn);
    //         event.target.textContent = "Replace All";
    //         document.getElementsByClassName("replaceBtn")[0].addEventListener("click",()=>{
    //             replaceText();
    //             event.target.textContent = "Replace With";
    //         })
    //     }
        
    // }

    // const replaceText = ()=>{
    //     let selectText = window.getSelection();
    //     let newText = text.split(selectText).join(document.getElementsByClassName("replaceText").value);
    //     setText(newText);
    // }

    const handleOnChange = (event)=>{
        setText(event.target.value);         // we hv to listen to "onChange" event bcz otherwise typing will not work
    }

    // let textColor;
    const [text,setText] = useState('');      // with this we create a new var. "text" which has a state
    const words = text.split(" ");
    words.forEach((el,index)=>{
        if(el==="") words.splice(index,1)
    })
    const noOfWords = words.length;
    const readTime = (noOfWords*0.4 <60) ? noOfWords*0.4 : noOfWords*0.4/60;
    const readTimeUnit = (noOfWords*0.4 <60) ? "seconds" : "minutes";
    
    return (
        <>
        <div className="container" >
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea style={style} className="form-control my-3"  placeholder="Enter text here" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <div className="Buttons">
            <button style={style}className="btn btn-primary mx-2" onClick={handleUpClick}>To UpperCase</button>
            <button style={style}className="btn btn-primary mx-2" onClick={handleLowClick}>To LowerCase</button>
            <button style={style}className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button style={style}className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button style={style}className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleReplacerClick}>Replace With</button> */}
            </div>

        </div>
        <div className="container my-5">
            <h2>Your text summary</h2>
            <p>Words : {noOfWords} Characters : {text.length}</p>
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
