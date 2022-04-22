import { useContext } from "react";
import styles from "./Countries.module.css";
import { CountryContext } from "./Hook/MyContext";

function Countries() {
  const { list } = useContext(CountryContext);
  // console.log(list);
  return (
    <div className={styles.container}>
      {list.map((item) => {
        return (
          <div key={item.id} className={styles.Countries}>
            <img src={item.url} alt={item.name}></img>
            <h3> Country {item.name}</h3>
            <h4> country Code{item.countryCode}</h4>
          </div>
        );
      })}
    </div>
  );
}
export default Countries;
