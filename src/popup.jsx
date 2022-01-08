import react from "react";
import { render } from "react-dom";

function Popup(){
    return (
        <>
        <h1>hello</h1>
        <h2>thisis me</h2>
        </>
        
    );
}

render(<Popup/>,document.getElementById("react-target"));

