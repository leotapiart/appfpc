import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { csv } from "d3-fetch";
import SearchResultsList from "./SearchResultsList";
import ProductInfoTable from "./ProductInfoTable";
import ExpirationForm from "./ExpirationForm";
import Swal from "sweetalert2";
import useCSVData from "../components/hooks/useCSVData";

const ProductListView = (props) => {
  const { setSelectedDate, selectedDate, selectedItem, setSelectedItem, setIsAnalyzed } = props;
  const [data] = useCSVData();
  const [searchedSku, setSearchedSku] = useState("");
  const [showDropdown, setShowDropdown] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const filteredData = data
    .filter((e) => e.articulo.toLowerCase().includes(searchedSku.toLowerCase()) || e.descripcion.toLowerCase().includes(searchedSku.toLowerCase()))
    .slice(0, 10);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
    setSearchedSku(item.articulo);
    setIsCollapsed(true);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleAnalyzeClick = () => {
    if (!selectedItem) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe seleccionar un artículo antes de analizar.",
      });
    } else {
      setIsCollapsed(false);
      setIsAnalyzed(true);
    }
  };

  return (
    <article>
      {/* ----------------------COLUMNA DE BUSCADOR Y FECHA DE VENCIMIENTO  */}
      <div className="text-center">
        <article className="row align-items-center">
          <SearchForm searchedSku={searchedSku} setSearchedSku={setSearchedSku} setShowDropdown={setShowDropdown} />

          <article className="col-12 col-md-6">
            <section className=" flex-fill d-flex mb-3 gap-2">
              <ExpirationForm setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
              <button type="button" className="btn btn-warning" onClick={handleAnalyzeClick}>
                ANALIZAR
              </button>
            </section>
          </article>
        </article>
      </div>

      {/* ---------------------- DROPDOWN QUE MUESTRA LA BUSQUEDA INTIME */}
      {searchedSku && filteredData.length > 0 && showDropdown && <SearchResultsList filteredData={filteredData} handleSelectItem={handleSelectItem} />}

      {/* ----------------------TABLA CON EL RESULTADO DE LA BUSQUEDA */}
      <section>{selectedItem && <ProductInfoTable selectedItem={selectedItem} isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />}</section>
    </article>
  );
};

export default ProductListView;
