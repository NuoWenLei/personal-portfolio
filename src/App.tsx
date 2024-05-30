import Home from "./pages/Home";
import ReactGA from "react-ga4";
ReactGA.initialize("G-1WXR78DSGE");

export default function App() {
  return (
    <div className="bg-transparent w-screen h-screen text-white">
      <Home />
    </div>
  );
}
