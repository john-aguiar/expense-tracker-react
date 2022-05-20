import styled from "styled-components";
import { items } from "../../data/items";

export const TableLine = styled.tr`
`

export const TableColumn = styled.td`
    padidng: 10px 0;

`

export const Category = styled.div`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color}
`

export const Value = styled.div`
color: ${props => props.color}
`