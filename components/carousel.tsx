import styles from "../styles/Carousel.module.css";

const Carousel = () => {
  function slideLeft() {}

  function slideRight() {}

  return (
    <div className={styles.carouselcontainer}>
      <div className={styles.carouselcontent}>
        {new Array(10).fill(1).map((item, index) => (
          <div className={styles.carouselitem} key={index}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={slideLeft} className={styles.leftbutton}>
        left
      </button>
      <button onClick={slideRight} className={styles.rightbutton}>
        right
      </button>
    </div>
  );
};

export default Carousel;
