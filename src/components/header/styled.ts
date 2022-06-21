import styled from 'styled-components'

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 10vh;
    padding: 16px 15%;
    
    background-color:#161b22;

    h1 {
        color: #b6b7b3;
        
        font-weight: bold;
        font-size: 24px;
        
        width: 20%;
    }

    div {
        width: 50%;        
        input {
            color:#8b949e;
            font-weight: 500;
            
            background-color: #0d1117;
            
            border: 2px solid #30363d;
            border-radius: 8px;
            outline: none;
            
            margin-right: 8px;
            padding-left: 8px;
            height: 30px;
            width: 80%;
        }
    
        button {
            color: white;
            font-weight: bold;

            background-color: #1f6feb;
            
            border-radius: 8px;
            
            padding: 0 8px;
            height: 28px;
        
            &:hover {
                background-color: #1672f0;
                box-shadow: 3px 2px 10px rgba(0, 0, 0, .2); 
            }
        }  
        
    }
`