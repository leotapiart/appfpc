import ExpirationForm from "./components/ExpirationForm";
import SearchForm from "./components/SearchForm";

const App = () => {
  return (
    <main className="bg-dark min-vh-100">
      <section className="container text-light py-5 flex">
        <section className="d-flex justify-content-center gap-4 align-items-center">
          <SearchForm />
          <ExpirationForm />
        </section>
      </section>
    </main>
  );
};

export default App;
