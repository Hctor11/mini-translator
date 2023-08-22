import { COUNTRIES } from "../util/countries";
import "../styles/style.sass";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { FiCopy } from "react-icons/fi";
import { Button } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const copiedToClipboard = () => toast.success("copied to clipboard!");
const translating = () => toast.loading("Translating text...");
const translatedText = () => toast.success("text succesfully translated!");
const nothingToTranslate = () => toast.error("No text to translate!");

const TranslateForm = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [toTranslateLang, setToTranslateLang] = useState("es");
  const [inputValue, setInputValue] = useState("")
  const [outputValue, setOutputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeButton = () => {
    const oldLang = selectedLang;
    setSelectedLang(toTranslateLang);
    setToTranslateLang(oldLang);
  };

  const handleClipboardClick = (text: string) => {
    navigator.clipboard.writeText(text);
    copiedToClipboard();
  };


  const translateText = () => {


    const data = {
      q: inputValue,
      source: selectedLang,
      target: toTranslateLang
    }

    if(inputValue.length <= 1) {
      nothingToTranslate()
    }else{
      translating()
      axios.post(`https://libretranslate.de/translate`, data)
        .then(res => {
          setOutputValue(res.data.translatedText)
          translatedText()
      })
    }  
  }


  return (
    <form action="" className="form-container">
      <div className="options-container">
        <select
          name="languages"
          id="languages lang"
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
            labelPlacement="outside"
            placeholder="Type something..."
            value={inputValue}
            onChange={(e) => {setInputValue(e.target.value);}}
            minRows={7}
            maxLength={250}
          />
          <div className="text-area-controls">
            <Button color="default" isIconOnly className="change-button" radius="sm" onClick={() => handleClipboardClick(inputValue)}>
              <FiCopy />
            </Button>
            <div className="word-counter">
            <span className="text">{inputValue.length}/250</span>
            </div>
          </div>
        </div>
        <div className="text-area-output">
          <Textarea
            isDisabled
            variant="faded"
            value={outputValue}
            labelPlacement="outside"
            placeholder="Translation"
            minRows={7}
          />
          <div className="text-area-controls">
            <Button color="default" isIconOnly className="change-button" radius="sm"  onClick={() => handleClipboardClick(outputValue)}>
              <FiCopy />
            </Button>

          </div>
        </div>
        <Toaster
              toastOptions={{
                className: 'toast',
                duration: 700,
              }}
            /> 
      </div>

      <Button
        radius="full"
        color="default"
        className="w-full md:w-1/2 shadow-lg"
        onClick={() => translateText()}
      >
        Translate
      </Button>
    </form>
  );
};

const styleOption = {
  margin: "12px",
  padding: "12px",
};

export default TranslateForm;
