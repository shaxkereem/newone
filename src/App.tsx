import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import './App.css';
import ButtonComponent from "./components/Buttons";
import TextComponent from "./components/Text";
import { Layout } from "./layouts/Layout";



const pages = [
  <ButtonComponent/>, <TextComponent/>
]

function App() {
  const [pageIndex, setPageIndex] = React.useState<number>(0);
  return (
    <Layout setPage={setPageIndex}>
      {pages[pageIndex]}
    </Layout>
  );
}

export default App;
