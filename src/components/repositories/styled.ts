import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size:16px;
`
export const WrapperTabList = styled(TabList)`
    list-style-type:none;
    display: flex;

    margin-top: 16px;
`

export const WrapperTab = styled(Tab)`  
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    margin-right: 16px;
    user-select: none;
    cursor: pointer;

    &:focus{
        outline: none;
    }

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, .2); 
    }
`
export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    margin-top: 16px;


    &.is-selected{
        display: block;
    }
    
`