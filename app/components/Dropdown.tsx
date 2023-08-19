"use client"

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import '../globals.css'

import { COUNTRIES } from "../util/countries";
import React, { ReactEventHandler, useMemo, useState } from "react";
import { Target } from "framer-motion";


const DropdownLang = () => {

    const [selectedKeys, setSelectedKeys] = useState("text");

    const selectedValue = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSelectedKeys(e.target.value)
    }

  return (
      <Dropdown shouldBlockScroll={false}>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
          {selectedKeys}   
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="flat"
          aria-label="Dynamic Actions"
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={() => selectedValue}
          items={COUNTRIES}
          style={{
            maxWidth: '100px'
          }}
        >
          {COUNTRIES.map((item) => (
            <DropdownItem key={item.code} style={{
              width: '150px',
              overflow: 'clip'  
            }}>{item.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
  );
};

export default DropdownLang;
