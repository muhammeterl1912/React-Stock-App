import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { grey, blueGrey } from "@mui/material/colors";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store"
import { PersistGate } from "redux-persist/integration/react"
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import Box from "@mui/material/Box";
import Loading from "./assets/loading.gif";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  const imageLoading = (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <img
        src={Loading}
        alt="Loading..."
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </Box>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Suspense fallback={imageLoading}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
          </Suspense>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
