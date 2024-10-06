import ExpirationForm from "./ExpirationForm";

const SearchForm = (props) => {
  const { searchedSku, setSearchedSku, setShowDropdown } = props;

  return (
    <article className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        CODIGO SAP
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Ingrese producto"
        aria-label="Ingrese código SAP"
        value={searchedSku}
        onChange={(e) => {
          setSearchedSku(e.target.value);
          setShowDropdown(true);
        }}
      />
    </article>
  );
};

export default SearchForm;
