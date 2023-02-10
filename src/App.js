import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LaunchPadList from "./screens/LaunchPadList";
import ProjectPreview from "./screens/ProjectPreview";
import CreateToken from "./screens/CreateToken";
import CreatePresale from "./screens/CreatePresale";
function App() {
  const queryClient = new QueryClient();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#c22026",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Toaster containerClassName="text-sm" />
          <Routes>
            <Route element={<Home />} index />
            <Route element={<LaunchPadList />} path="launchpad_list" />{" "}
            <Route element={<ProjectPreview />} path="project_preview" />
            <Route element={<CreateToken />} path="create_token" />
            <Route element={<CreatePresale />} path="create_presale" />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
