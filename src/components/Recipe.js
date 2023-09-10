import styles from "./Recipe.module.scss";
import images from "../assets/images/images.jpg";
function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={images} alt="recipe" />
      </div>
      <div className={`${styles.recipeTitle} d-flex flex-row align-items-center justify-content-center`}>
        <h3>
        crêpes
        </h3>
      </div>
    </div>
  )
}

export default Recipe