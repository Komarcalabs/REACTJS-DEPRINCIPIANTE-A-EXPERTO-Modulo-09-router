import { Route, Routes } from "react-router-dom";
import Page from "./Page";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Page}>
          <Route path="*" Component={NotFound} />
          <Route path="*" Component={NotFound} />
          <Route path="*" Component={NotFound} />
        </Route>
        <Route path=":id" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
