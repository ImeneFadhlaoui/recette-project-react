import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import Loading from "../../components/Loadind/Loading";
import { useState } from "react";
function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }
  return (
    <div className="flex-fill container p-20 d-flex flex-column">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 d-flex flex-column flex-fill mb-20 ${styles.contentCard} `}>
        <div
          className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInput}
            type="text"
            placeholder="Rechercher"
            className="flex-fill"
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe key={r._id} title={r.title} image={r.image} />
              ))}
          </div>
        )}
        <div className={styles.grid}>
          {recipes
            .filter((r) => r.title.toLowerCase().startsWith(filter))
            .map((r) => (
              <Recipe key={r._id} title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
