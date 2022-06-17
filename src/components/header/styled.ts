import styled from 'styled-components'

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        font-weight: 500;
        padding: 8px;
        outline: none;
    }

    button {
        background-color: #225ed8;
        color: white;
        padding: 8px;
        margin: 0 8px;
        border-radius: 8px;
        font-weight: bold;

        &:hover {
            background-color: #2c5282;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, .2); 
        }
    }
`