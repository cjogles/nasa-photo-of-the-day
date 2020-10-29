import React from "react"
import styled from 'styled-components';
function Description(props) {
    const Story = styled.div`
        display: flex;
        justify-content: center;
        width: 25rem ;
        color:white;
    `
    return (
        <Story>
            {props.explanation}
        </Story>
    )
}
export default Description;