import styled from 'styled-components'

export const Wrapper = styled.div`
    border-radius: 8px;
    border: 1px solid #21262d;
    background-color: #0d1117;
    padding: 16px;

    font-size: 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
        text-align: center;
    }
    
    margin-bottom: 32px;

    width: 200px;
    height: 220px;

    h2 {
        word-wrap: break-word;
        text-align: center;
        color: #c9d1cc;
        font-weight: bold;
        font-size: 16px;
    }

    a {
        border-radius: 4px;
        text-align: center;
        background-color: #238636;
        padding: 6px;
        width: 80%;
        font-weight: 600;
    }
`