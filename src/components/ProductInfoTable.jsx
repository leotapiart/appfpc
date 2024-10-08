import { useState } from "react";

const ProductInfoTable = ({ selectedItem, isCollapsed, toggleCollapse }) => {
  return (
    <>
      <div className={`collapse ${isCollapsed ? "show" : ""}`}>
        <table className="table table-bordered table-hover table-dark">
          <tbody>
            <tr>
              <td>
                <strong>SAP</strong>
              </td>
              <td>{selectedItem.articulo}</td>
            </tr>
            <tr>
              <td>
                <strong>ARTICULO</strong>
              </td>
              <td>{selectedItem.descripcion}</td>
            </tr>
            <tr>
              <td>
                <strong>PROVEEDOR</strong>
              </td>
              <td>{selectedItem.proveedor}</td>
            </tr>
            <tr>
              <td>
                <strong>TIPO</strong>
              </td>
              <td>{selectedItem.procedencia}</td>
            </tr>
            <tr>
              <td>
                <strong>VIDA UTIL</strong>
              </td>
              <td>{selectedItem.vuDias} días</td>
            </tr>
            <tr>
              <td>
                <strong>ACEPTACIÓN (DÍAS)</strong>
              </td>
              <td>{selectedItem.aceptBodegaDias} días</td>
            </tr>
            <tr>
              <td>
                <strong>ACEPTACIÓN (%)</strong>
              </td>
              <td>{selectedItem.aceptBodegaPorcentaje}</td>
            </tr>
            <tr>
              <td>
                <strong>DESPACHO BODEGA</strong>
              </td>
              <td>{selectedItem.despachoBodegaDias} días</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-grid d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-primary btn-sm" onClick={toggleCollapse}>
          {isCollapsed ? "OCULTAR INFORMACIÓN" : "MOSTRAR INFORMACIÓN"}
        </button>
      </div>
    </>
  );
};

export default ProductInfoTable;
