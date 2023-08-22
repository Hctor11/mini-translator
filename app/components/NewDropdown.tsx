import { COUNTRIES } from "../util/countries";
import "../styles/style.sass";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { FiCopy } from "react-icons/fi";
import { Button } from "@nextui-org/react";

const TranslateForm = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [toTranslateLang, setToTranslateLang] = useState("es");
  const handleChangeButton = () => {
    const oldLang = selectedLang;
    setSelectedLang(toTranslateLang);
    setToTranslateLang(oldLang);
  };

  return (
    <form action="" className="form-container">
      <div className="options-container">
        <select
          name="languages"
          id="languages lang"
          defaultValue="en"
          value={selectedLang}
          className="selector-container"
          onChange={(e) => {
            setSelectedLang(e.target.value);
          }}
        >
          {COUNTRIES.map(({ name, code }, id) => (
            <option
              style={styleOption}
              className="selector-item"
              key={id}
              value={code}
            >
              {name}
            </option>
          ))}
        </select>

        <Button
          color="default"
          isIconOnly
          className="change-button"
          onPress={(e) => handleChangeButton()}
        >
          <PiArrowsLeftRightBold />
        </Button>

        <select
          name="languages"
          id="languages totranslate"
          defaultValue="es"
          value={toTranslateLang}
          className="selector-container"
          onChange={(e) => {
            setToTranslateLang(e.target.value);
          }}
        >
          {COUNTRIES.map(({ name, code }, id) => (
            <option
              style={styleOption}
              className="selector-item"
              key={id}
              value={code}
            >
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="arealabel-container">
        <div className="text-area-input">
          <Textarea
            variant="faded"
            validationState="valid"
            labelPlacement="outside"
            placeholder="Type something..."
            minRows={7}
            maxLength={250}
          />
          <div className="text-area-controls">
            <Button color="default" isIconOnly className="change-button">
              <FiCopy />
            </Button>
          </div>
        </div>
        <div className="text-area-output">
          <Textarea
            isDisabled
            variant="faded"
            labelPlacement="outside"
            placeholder="Translation"
            minRows={7}
          />
          <div className="text-area-controls">
            <Button color="default" isIconOnly className="change-button">
              <FiCopy />
            </Button>
          </div>
        </div>
      </div>

      <Button
        radius="full"
        color="default"
        className="w-1/2 border-solid border-1 border-zinc-950 shadow-lg"
      >
        Translate
      </Button>
      <br />
      <span>LENGUAJE SELECCIONADO: {selectedLang}</span>
      <br />
      <span>LENGUAJE SELECCIONADO: {toTranslateLang}</span>
    </form>
  );
};

const styleOption = {
  margin: "12px",
  padding: "12px",
};

export default TranslateForm;
