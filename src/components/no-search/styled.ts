import styled from 'styled-components'
import { Search } from '@styled-icons/boxicons-regular/Search'

export const Wrapper = styled.main`
    padding: 100px 15%;
    background-color:#0d1117;
    color: white;
    height: 90vh;
    text-align: center; 

    p {
        margin-bottom: 5px;
        font-weight: 300;
        font-size: 20px;
        text-align: center;
    }
`

export const Error = styled(Search)`
    width: 48px;
    height: 48px;
    margin-bottom: 6px;
`

