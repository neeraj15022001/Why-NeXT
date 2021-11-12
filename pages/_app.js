import "tailwindcss/tailwind.css";
import { Provider } from "react-redux/lib/exports";
import configureStore from "../redux/store/store";
function MyApp({ Component, pageProps }) {
  const store = configureStore();
  console.log(store);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
