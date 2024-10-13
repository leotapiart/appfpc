// useCSVData.js (Custom Hook)
import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { saveCSVtoIndexedDB, loadCSVFromIndexedDB } from "../../utils/indexedDB";

const useCSVData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAb2wRvGjuGMF8KosaymlHaYX9tY0hnNaBmW98d809oAGSaBLyDNd31Wt_HTxGhGC-Ls14g_hyy2Ma/pub?output=csv";

    const fetchCSVData = async () => {
      try {
        const response = await fetch(url);
        const textData = await response.text();
        saveCSVtoIndexedDB(textData);
        csv(url, (d) => ({
          articulo: d.ARTICULO,
          descripcion: d.DESCRIPCION,
          proveedor: d.Proveedor,
          procedencia: d.PROCEDENCIA,
          vuDias: d.VUdias,
          aceptBodegaDias: d.ABdias,
          aceptBodegaPorcentaje: d.ABporcentaje,
          despachoBodegaDias: d.DBdias,
          recepcionLocalDias: d.RLdias,
        })).then(setData);
      } catch (error) {
        const storedData = await loadCSVFromIndexedDB();
        if (storedData) {
          csv(storedData, (d) => ({
            articulo: d.ARTICULO,
            descripcion: d.DESCRIPCION,
            proveedor: d.Proveedor,
            procedencia: d.PROCEDENCIA,
            vuDias: d.VUdias,
            aceptBodegaDias: d.ABdias,
            aceptBodegaPorcentaje: d.ABporcentaje,
            despachoBodegaDias: d.DBdias,
            recepcionLocalDias: d.RLdias,
          })).then(setData);
        }
      }
    };

    fetchCSVData();
  }, []);

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAb2wRvGjuGMF8KosaymlHaYX9tY0hnNaBmW98d809oAGSaBLyDNd31Wt_HTxGhGC-Ls14g_hyy2Ma/pub?output=csv";

    const updateCSVData = async () => {
      try {
        const response = await fetch(url);
        const textData = await response.text();
        saveCSVtoIndexedDB(textData);
        csv(url, (d) => ({
          articulo: d.ARTICULO,
          descripcion: d.DESCRIPCION,
          proveedor: d.Proveedor,
          procedencia: d.PROCEDENCIA,
          vuDias: d.VUdias,
          aceptBodegaDias: d.ABdias,
          aceptBodegaPorcentaje: d.ABporcentaje,
          despachoBodegaDias: d.DBdias,
          recepcionLocalDias: d.RLdias,
        })).then(setData);
      } catch (error) {
        console.error("Error al actualizar los datos del CSV:", error);
      }
    };

    window.addEventListener("online", updateCSVData);
    return () => {
      window.removeEventListener("online", updateCSVData);
    };
  }, []);

  return [data];
};

export default useCSVData;
