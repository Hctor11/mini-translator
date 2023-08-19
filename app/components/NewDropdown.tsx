import { COUNTRIES } from "../util/countries";


const NewDropdown = () => {
  return (
    <>
      <select name="cars" id="cars" className="selector-container">
        {
            COUNTRIES.map(({name, code},id) => (
                <option className="selector-item" key={id} value={code}>{name}</option>
            ))
        }
      </select>
    </>
  );
};

export default NewDropdown;
