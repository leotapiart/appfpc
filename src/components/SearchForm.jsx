import { useState } from "react";

const SearchForm = (props) => {
  const { searchedSku, setSearchedSku, setShowDropdown } = props;

  return (
    <article className="col-12 col-md-6">
      <section className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="INGRESE SKU"
          aria-label="Ingrese código SAP"
          value={searchedSku}
          onChange={(e) => {
            setSearchedSku(e.target.value);
            setShowDropdown(true);
          }}
        />
        {/* 
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          {isVisible ? "OCULTAR INFO" : "MOSTRAR INFO"}
        </button>
        */}
      </section>
    </article>
  );
};

export default SearchForm;
