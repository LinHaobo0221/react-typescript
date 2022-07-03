import React, { useEffect, useState } from "react";
import { Container } from "./style";

function Name() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setName("this is linhaobo app");
  }, []);

  return <Container onClick={() => alert("hi")}>{name}</Container>;
}

export default Name;
