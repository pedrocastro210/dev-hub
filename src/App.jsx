import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";
import "./style.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
