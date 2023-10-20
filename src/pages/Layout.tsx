import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <body className="bg-[#1d2d44] w-screen h-screen text-white">
      <Navbar />
      <Outlet />
    </body>
  );
}
