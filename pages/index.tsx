import React from "react";
import httpClient from "../services/client";
import { fetcher } from "../services/httpHooks";

interface TodoResponse {
  todos: Array<unknown>;
}

const HomePage = () => {
  React.useEffect(() => {
    fetcher<TodoResponse>("/todos");
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
