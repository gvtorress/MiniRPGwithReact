import styled from "styled-components"
import { CharacterSides } from "../../types/CharacterSides"

export const Container = styled.div<{left: number, top: number, size: number, side: number}>`
    width: ${props  => props.size}px;
    height: ${props  => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.side}px;
`

export const NameBox = styled.div`
    background-color: #000;
    padding: 3px;
    border-radius: 5px;
    position: absolute;
    font-size: 10px;
    text-align: center;
    margin-top: -20px;
`;