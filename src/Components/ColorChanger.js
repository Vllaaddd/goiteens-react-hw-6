import { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`;

const StyledButton = styled.button`
    width: 500px;
    height: 300px;
    background-color: ${props => props.color};
    cursor: pointer;
`;

export class ColorChanger extends Component{

    state = {
        backgroundColor : '#062614'
    }

    colors = ['#ee5b2f', '#f07fe6', '#df0000', '#ecfee4', '#ffff7f'];

    changeColor = () => {
        const color = this.colors[Math.floor(Math.random() * this.colors.length)]

        this.setState({
            backgroundColor: color,
        })

        console.log(color);
    }

    render(){
        return(
            <Wrapper>
                <StyledButton onClick={this.changeColor} color={this.state.backgroundColor}>Button</StyledButton>
            </Wrapper>
        )
    }
}