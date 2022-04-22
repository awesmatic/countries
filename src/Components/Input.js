import { useContext } from "react";
import { CountryContext } from "./Hook/MyContext";
import styles from "./Input.module.css";

function Input() {
  const { list, setList, setUrl, setName, setCode, name, code, url } =
    useContext(CountryContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "" || code === "" || url === "") {
      alert("enter valid input");
    } else {
      setList([
        ...list,
        { id: Math.random(), name: name, countryCode: code, url: url },
      ]);
      setName("");
      setCode("");
      setUrl("");
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label>
        <div>Enter Country Name:</div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </label>
      <label>
        <div>Enter Country Code:</div>
        <div>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
      </label>
      <label>
        <div>Enter Country Flag url:</div>
        <div>
          {" "}
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </label>

      <button className={styles.button} type="submit" value="submit">
        {" "}
        Submit
      </button>
    </form>
  );
}

export default Input;
