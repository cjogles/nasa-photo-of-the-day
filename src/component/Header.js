import React from "react";
function Header(props) {
    console.log(props.title);
    return (
        <div>
            {props.title}
        </div>
    );
}

export default Header;