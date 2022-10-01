//Internal lib imports
import FullScreenLoader from "./components/Common/FullScreenLoader";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <AppRoutes />
      <FullScreenLoader />
    </>
  );
};

export default App;
