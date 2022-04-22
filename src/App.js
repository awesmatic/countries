import styles from "./App.module.css";
import Countries from "./Components/Countries";
import Input from "./Components/Input";

function App() {
  return (
    <div className={styles.container}>
      <Input />
      <Countries />
    </div>
  );
}

export default App;
