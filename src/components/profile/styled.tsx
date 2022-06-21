import styled from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'
import { Dot } from '@styled-icons/bootstrap/Dot'

export const DotIcon = styled(Dot)`
    height: 30px;
` 

export const IconWrapper = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;

  margin: 8px 0;

  ${StyledIconBase} {
    color:#c9d1d9;
    background-color: transparent;
    width: 19px;
    height: 19px;
    padding-bottom: 3px;
  }

  a:hover {
    text-decoration:underline;
  }
`


export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 32px 15%;
    background-color:#0d1117;
`

export const WrapperImg = styled.img`
    border-radius: 50%;
    border: 2px solid #30363d;
    width: 200px;
    margin-right: 32px;
`

export const WrapperAllInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 200px;
    color:#c9d1d9;

    h1 {
        font-weight: 500;
        font-size: 18px;
    }
    p {
        font-weight: 100;
    }

`

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;

    span {
        font-weight: normal;
    }
    
`


