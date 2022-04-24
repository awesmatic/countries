import { useContext } from "react";
import styles from "./Countries.module.css";
import { CountryContext } from "./Hook/MyContext";

function Countries() {
  const { list, setList } = useContext(CountryContext);

  const removeHandler = (id) => {
    setList(list.filter((item) => item.id !== id));
    console.log("remove");
  };
  return (
    <div className={styles.container}>
      {list.map((item) => {
        return (
          <div key={item.id} className={styles.Countries}>
            <img src={item.url} alt={item.name}></img>
            <h3> Country {item.name}</h3>
            <h4> country Code{item.countryCode}</h4>
            <button
              className={styles.button}
              onClick={() => removeHandler(item.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Countries;
