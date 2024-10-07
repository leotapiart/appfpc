const ExpirationForm = ({ setSelectedDate }) => {
  return (
    <section className="input-group flex-fill">
      <input type="date" className="dateform form-control" onChange={(e) => setSelectedDate(e.target.value)} />
    </section>
  );
};

export default ExpirationForm;
