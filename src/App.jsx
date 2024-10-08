import ProductListView from "./components/ProductListView";
import ProductToleranceTable from "./components/ProductToleranceTable";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  return (
    <main className="bg-dark min-vh-100 align-items-center">
      <h2 className="text-info text-center pt-2">VALIDADOR DE VIDA UTIL ❄️</h2>
      <section className="container text-light py-1 flex ">
        <ProductListView
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setIsAnalyzed={setIsAnalyzed}
        />
        {selectedItem && isAnalyzed && <ProductToleranceTable selectedDate={selectedDate} selectedItem={selectedItem} />}
      </section>
    </main>
  );
};

export default App;
