const ExpirationForm = ({ setSelectedDate, selectedDate, isAnalyzed }) => {
  return (
    <section className="input-group flex-fill dateInput">
      <input
        type="date"
        className="dateform form-control"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </section>
  );
};

export default ExpirationForm;
