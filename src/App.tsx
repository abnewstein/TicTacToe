import type { Component } from "solid-js";

import Header from "./components/Header";
import Container from "./components/Container";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.app}>
      <Header />
      <Container />
    </div>
  );
};

export default App;
