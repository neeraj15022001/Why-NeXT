import "tailwindcss/tailwind.css";
import React from "react";
import { wrapper } from "../redux/store/store";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default wrapper.withRedux(MyApp);
