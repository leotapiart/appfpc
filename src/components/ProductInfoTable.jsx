const ProductInfoTable = ({ selectedItem }) => {
  return (
    <article className="mt-2">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Propiedad</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>SAP</strong>
            </td>
            <td>{selectedItem.articulo}</td>
          </tr>
          <tr>
            <td>
              <strong>Descripción</strong>
            </td>
            <td>{selectedItem.descripcion}</td>
          </tr>
          <tr>
            <td>
              <strong>Proveedor</strong>
            </td>
            <td>{selectedItem.proveedor}</td>
          </tr>
          <tr>
            <td>
              <strong>Procedencia</strong>
            </td>
            <td>{selectedItem.procedencia}</td>
          </tr>
          <tr>
            <td>
              <strong>Vida útil</strong>
            </td>
            <td>{selectedItem.vuDias} días</td>
          </tr>
          <tr>
            <td>
              <strong>Días de aceptación</strong>
            </td>
            <td>{selectedItem.aceptBodegaDias} días</td>
          </tr>
          <tr>
            <td>
              <strong>% Aceptación</strong>
            </td>
            <td>{selectedItem.aceptBodegaPorcentaje}</td>
          </tr>
          <tr>
            <td>
              <strong>Despacho Bodega</strong>
            </td>
            <td>{selectedItem.despachoBodegaDias} días</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default ProductInfoTable;
