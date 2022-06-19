import { Outlet } from "react-router-dom";
import { LateralMenu } from "./componets/LateralMenu";

function App() {
  return (
    <>
      {/*Menu */}
      <LateralMenu />
      <section className="contenido">
        <Outlet />
      </section>
    </>
  );
}

export default App;
