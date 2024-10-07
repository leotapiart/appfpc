const ProductToleranceTable = ({ selectedDate, selectedItem }) => {
  const todayDate = new Date().toISOString().split("T")[0];

  const convertDateToDMY = (dateString) => {
    // Asumimos que dateString está en formato YYYY-MM-DD
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  const substractDates = (dateStringA, dateStringB) => {
    const [dayB, monthB, yearB] = dateStringB.split("-");
    const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

    // dateStringA ya está en formato YYYY-MM-DD, se puede usar directamente
    const dateA = new Date(dateStringA);

    //Calcular diferencia entre milisegundos
    const differenceInTime = dateA.getTime() - dateB.getTime();

    // Convertir la diferencia de milisegundos a días
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    return `La diferencia es de ${differenceInDays} días y ${dateA} y ${dateB}`;
  };

  console.log(substractDates(selectedDate, todayDate));

  return (
    <section className="mt-3">
      {selectedDate}
      {selectedItem && selectedItem.descripcion}
    </section>
  );
};
export default ProductToleranceTable;
