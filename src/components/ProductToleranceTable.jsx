import ProductAlert from "./ProductAlert";

const ProductToleranceTable = (props) => {
  const { selectedDate, selectedItem, isAnalyzed } = props;

  const todayDateString = new Date().toISOString().split("T")[0]; // STRING FECHA DE HOY
  const todayDate = new Date(todayDateString); // FECHA DE HOY
  const expiryDate = new Date(selectedDate); // FECHA DE VENCIMIENTO
  const millisecondsPerDay = 1000 * 60 * 60 * 24; // MILISEGUNDOS X DIA
  const vuDays = selectedItem?.vuDias; // VIDA UTIL DEL PRODUCTO
  const warehouseShipDays = selectedItem?.despachoBodegaDias; // DIAS DESPACHO BODEGA
  const receptionStoreDays = selectedItem?.recepcionLocalDias; // DIAS DESPACHO BODEGA
  const availableShelfLife = (expiryDate - todayDate) / millisecondsPerDay; // VIDA UTIL DISPONIBLE (DIAS)
  const consumedShelfLife = vuDays - availableShelfLife; // VIDA UTIL CONSUMIDA (DIAS)
  const consumedPercent = ((consumedShelfLife / vuDays) * 100).toFixed(2); // VIDA UTIL CONSUMIDA (%)
  const availablePercent = Math.round((availableShelfLife / vuDays) * 100); // VIDA UTIL DISPONIBLE (%)
  const lastDayShip = new Date(
    expiryDate.getTime() - warehouseShipDays * millisecondsPerDay
  );
  const lastDayStore = new Date(
    expiryDate.getTime() - receptionStoreDays * millisecondsPerDay
  );
  const daysShip = (lastDayShip - todayDate) / millisecondsPerDay;

  return (
    <section className="mt-3">
      <div className="alert alert-secondary" role="alert">
        Producto con <span className="fw-medium">{availableShelfLife} </span>
        días restantes de vida útil. Eso equivale al{" "}
        <span className="fw-medium">{consumedPercent}</span> % vida útil
        consumida.
      </div>
      <ProductAlert
        variant={
          daysShip >= 30
            ? "success"
            : daysShip >= 0 && daysShip < 30
            ? "warning"
            : "danger"
        }
      >
        <span className="fw-medium">{daysShip}</span> Días para despacho a
        tiendas.
      </ProductAlert>
      <ProductAlert
        variant={
          daysShip >= 30
            ? "success"
            : daysShip >= 0 && daysShip < 30
            ? "warning"
            : "danger"
        }
      >
        Despachar antes del{" "}
        <span className="fw-medium">{lastDayShip.toLocaleDateString()}</span>
      </ProductAlert>
      <ProductAlert
        variant={
          daysShip >= 30
            ? "success"
            : daysShip >= 0 && daysShip < 30
            ? "warning"
            : "danger"
        }
      >
        Recepción en locales hasta{" "}
        <span className="fw-medium">{lastDayStore.toLocaleDateString()}</span>
      </ProductAlert>
    </section>
  );
};
export default ProductToleranceTable;
