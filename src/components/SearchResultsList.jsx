const SearchResultsList = (props) => {
  const { filteredData, handleSelectItem } = props;
  return (
    <>
      <div className="dropdown text-black">
        <ul className="dropdown-menu show">
          {filteredData.map((e, index) => (
            <li key={index} className="dropdown-list px-2 bg-hover-primary d-flex" onClick={() => handleSelectItem(e)}>
              <span className="me-1 fw-bold flex-shrink-0">{e.articulo}</span>
              <span className="me-1">: </span>
              <span>{e.descripcion}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchResultsList;
