import { useEffect, useState } from "react";
import ExpirationForm from "./ExpirationForm";
import SearchForm from "./SearchForm";
import { csv } from "d3-fetch";
import SearchResultsList from "./SearchResultsList";
import ProductInfoTable from "./ProductInfoTable";

const ProductListView = () => {
  const [data, setData] = useState([]);
  const [searchedSku, setSearchedSku] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDropdown, setShowDropdown] = useState(true);

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAb2wRvGjuGMF8KosaymlHaYX9tY0hnNaBmW98d809oAGSaBLyDNd31Wt_HTxGhGC-Ls14g_hyy2Ma/pub?output=csv";

    csv(url, (d) => ({
      articulo: d.ARTICULO,
      descripcion: d.DESCRIPCION,
      proveedor: d.Proveedor,
      procedencia: d.PROCEDENCIA,
      vuDias: d.VUdias,
      aceptBodegaDias: d.ABdias,
      aceptBodegaPorcentaje: d.ABporcentaje,
      despachoBodegaDias: d.DBdias,
    })).then(setData);
  }, []);

  const filteredData = data
    .filter((e) => e.articulo.toLowerCase().includes(searchedSku.toLowerCase()))
    .slice(0, 10);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
    setSearchedSku(item.articulo);
  };

  return (
    <section>
      <SearchForm
        searchedSku={searchedSku}
        setSearchedSku={setSearchedSku}
        setShowDropdown={setShowDropdown}
      />
      {/* <ExpirationForm /> */}
      {searchedSku && filteredData.length > 0 && showDropdown && (
        <SearchResultsList
          filteredData={filteredData}
          handleSelectItem={handleSelectItem}
        />
      )}
      <article>
        {selectedItem && <ProductInfoTable selectedItem={selectedItem} />}
      </article>
    </section>
  );
};

export default ProductListView;
