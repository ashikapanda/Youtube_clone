import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

const bodyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchVideo />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <Head />
      <RouterProvider router={bodyRouter} />
      <Footer />
    </div>
  );
}

export default App;
