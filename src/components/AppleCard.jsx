import { useState } from 'react';

const darkMode = {
    backgroundColor: "midnightblue",
    color: "gold",
    padding: "5px",
    fontSize: "20px"
}

const lightMode = {
    backgroundColor: "skyblue",
    color: "mediumblue",
    padding: "5px",
    fontSize: "20px"
}

const buttonStyle1 = {
    width: "80px",
    height: "40px",
    backgroundColor: "black",
    color: "red",
    borderColor: "snow",
    fontSize: "30px",
    borderRadius: "10px",
}

const buttonStyle2 = {
    width: "80px",
    height: "40px",
    backgroundColor: "black",
    color: "limegreen",
    fontSize: "30px",
    borderRadius: "10px",
    borderColor: "white"
}


const AppleCard = props => {
    const [light, setLight] = useState(true);
    const [example, setExample] = useState("Hello");
    const switchLight = () => setLight(!light);
    const {firstName, lastName, quantity, color} = props;
    const [myQuantity, setMyQuantity] = useState(quantity);
    const updateQuantity = () => setMyQuantity(myQuantity + 1);
    return(
        <div style={light ? darkMode : lightMode}>
            <h1>{ firstName } { lastName }</h1>
            <p onClick={updateQuantity}>Clicking Me -> Increases Quantity: { myQuantity }</p>
            <p>Color: { color }</p>
            <button style={light ? buttonStyle2 : buttonStyle1} onClick={switchLight}>{light ? "On" : "Off"}</button>
        </div>
    );
}

export default AppleCard;