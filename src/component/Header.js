import React from "react";
import styled from 'styled-components';
function Header(props) {
    const Title = styled.div`
        align-text: center;
        color: white;
    `
    const Date = styled.div`
        align-text: center;
        color: white;
    `
    return (
        <div>
            <Title>
                {props.title}
            </Title>
            <Date>
                {props.date}
            </Date>
            <div>
                <button><span>Display in HD?</span></button>
            </div>
        </div>
    );
}

export default Header;