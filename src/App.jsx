import ProductListView from "./components/ProductListView";
import ProductToleranceTable from "./components/ProductToleranceTable";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <main className="bg-dark min-vh-100">
      <section className="container text-light py-5 flex">
        <ProductListView setSelectedDate={setSelectedDate} />
        <ProductToleranceTable selectedDate={selectedDate} />
      </section>
    </main>
  );
};

export default App;
