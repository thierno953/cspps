import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { Contact } from "./pages/contact/Contact";


export const routes = [
  {
    path: "/",
    component: <HomePage />,
    exact: true,
  },
  {
    path: "/propos",
    component: <AboutPage />,
    exact: true,
  },
  {
    path: "/contact",
    component: <Contact />,
    exact: true,
  },
];
