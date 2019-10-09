import React from "react";
function Header(props) {
    //console.log(props.title);
    return (
        <div>
            <div>
                {props.title}
            </div>
            <div>
                {props.date}
            </div>
            <div>
                <button><span>Display in HD?</span></button>
            </div>
        </div>
    );
}

export default Header;