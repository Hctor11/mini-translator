import { COUNTRIES } from "../util/countries";
import "../styles/style.sass";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";
import { PiArrowsLeftRightBold } from 'react-icons/pi'
import {Button} from "@nextui-org/react";

const TranslateForm = () => {

  const [selectedLang, setSelectedLang] = useState("")
  const [toTranslateLang, setToTranslateLang] = useState("")


  return (
    <form action="" className="form-container">
      <div className="options-container">
      <select
        name="languages"
        id="languages"
        defaultValue="en"
        className="selector-container"
        onChange={e => {
          setSelectedLang(e.target.value);
        }}
      >
        {COUNTRIES.map(({ name, code }, id) => (
          <option className="selector-item" key={id} value={code}>
            {name}
          </option>
        ))}
      </select>

      <Button color="default" isIconOnly className="change-button">
      <PiArrowsLeftRightBold/>
    </Button>

      <select
        name="languages"
        id="languages"
        defaultValue="es"
        className="selector-container"
        onChange={e => {
          setToTranslateLang(e.target.value);
        }}
      >
        {COUNTRIES.map(({ name, code }, id) => (
          <option className="selector-item" key={id} value={code}>
            {name}
          </option>
        ))}
      </select>
      </div>

      <div className="arealabel-container">
        <Textarea
          labelPlacement="outside"
          placeholder="Type something..."
        />
        <Textarea
          labelPlacement="outside"
          placeholder="Translation"
        />
      </div>
      <span>LENGUAJE SELECCIONADO: {selectedLang}</span>
      <br/>
      <span>LENGUAJE SELECCIONADO: {toTranslateLang}</span>
    </form>
  );
};

export default TranslateForm;
