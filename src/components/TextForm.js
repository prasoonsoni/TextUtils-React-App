import React, { useState } from "react";

export default function TextForm(props) {
    const changeToUppercase = () => {
        if (text.length == 0) {
            alert("Field cannot be empty!! Please Enter Text.");
        } else {
            let newText = text.toUpperCase();
            setText(newText);
            console.log("Uppercase was clicked.");
        }
    };

    const changeToLowercase = () => {
        if (text.length == 0) {
            alert("Field cannot be empty!! Please Enter Text.");
        } else {
            let newText = text.toLowerCase();
            setText(newText);
            console.log("Lowercase was clicked");
        }
    };

    const clearText = () => {
        if (text.length == 0) {
            alert("Field is already empty");
        } else {
            setText("");
        }
    };

    const removeSpaces = () => {
        if (text.length == 0) {
            alert("Field cannot be empty!! Please Enter Text.");
        } else {
            let newText = "";
            let arrText = text.split(" ");
            arrText.forEach((e) => {
                newText += e;
            });
            setText(newText);
        }

    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const countWords = () => {
        if (text.length == 0) {
            return 0;
        } else if (text.slice(-1) == " ") {
            return (text.split(" ").length - 1);
        } else {
            return (text.split(" ").length)
        }
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={changeToUppercase}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={changeToLowercase}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={removeSpaces}>
                    Remove Spaces
                </button>
                <button className="btn btn-primary mx-1" onClick={clearText}>
                    Clear Text
                </button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>
                    {countWords()} Words and {text.length} Characters
                </p>
                <p>{0.008 * text.split(" ").length} Minutes Read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
