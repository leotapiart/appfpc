import ProductListView from "./components/ProductListView";
import "./App.css";

const App = () => {
  return (
    <main className="bg-dark min-vh-100">
      <section className="container text-light py-5 flex">
        <section className="">
          <ProductListView />
        </section>
      </section>
    </main>
  );
};

export default App;
