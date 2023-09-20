import { useState } from "react";
import styles from "./Recipe.module.scss";

function Recipe({ title, image }) {
  const [liked, setLiked] = useState(false);
  function handleClick() {
    setLiked(!liked);
  }
  return (
    <div onClick={handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column align-items-center justify-content-center`}
      >
        <h3 className="mb-10">{title}</h3>
        <i
          className={`fa-solid fa-heart ${liked ? "text-primary" : " "}`}
        ></i>
      </div>
    </div>
  );
}

export default Recipe;
