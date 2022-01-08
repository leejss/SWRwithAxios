import React from "react";
import httpClient from "../services/client";

const HomePage = () => {
  React.useEffect(() => {
    httpClient.get("/todos/1");
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
