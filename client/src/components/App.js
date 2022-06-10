import AddForm from "./AddForm";
import Cart from "./Cart";
import ProductListing from "./ProductListing";

const App = () => {
  return (
    <div id="app">
      <Cart />
      <main>
        <ProductListing />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
