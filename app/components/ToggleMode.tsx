"use client"

import {Tabs, Tab} from "@nextui-org/react";
import {BsSun, BsMoon} from 'react-icons/bs';
import { useEffect, useState } from "react";

const ToggleMode = () => {

  const [theme, setTheme] = useState('light')

  useEffect(()=> {
    document.documentElement.className = theme
  },[theme])

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
        <Tabs 
        selectedKey={theme}
        onClick={handleThemeChange}>
            <Tab 
            key="light"
            title={
                <BsSun/>
            }>
            </Tab>
            <Tab
            key="dark"
            title={
                <BsMoon/>
            }>
            </Tab>
        </Tabs>
    </>
  )
}

export default ToggleMode