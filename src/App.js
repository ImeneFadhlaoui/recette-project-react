import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage"
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
// import { sendRecipes } from "./data/send";
// sendRecipes();
function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
