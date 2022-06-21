import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    background-color:#010409;
    color: #b6b7b3;
    border-top: 1px solid #21262d;
    padding: 0 15%;
    width: 100%;
`
export const WrapperTabList = styled(TabList)`
    list-style-type:none;
    display: flex;
    justify-content: center;
`

export const WrapperTab = styled(Tab)`  

    border: 1px solid #21262d;
    width: 140px;
    margin: 16px 8px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 4px;;
    user-select: none;
    cursor: pointer;
    letter-spacing: 1px;
    color: #c9d1cc;

    &:focus{
        outline: none;
    }

    &.is-selected {
        background-color:#21262d;
        font-weight: 700;
    }
`
export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    &.is-selected{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }  
`