import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <body className="bg-[#1d2d44] w-screen h-screen text-white">
      <Home />
    </body>

    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Navigate to="/home" replace={true} />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //     </Route>
    //   </Routes>
    // </HashRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
