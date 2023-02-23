import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import Dashboard from "./scenes/dashboard";
// import Sidebar from "./sences/Sidebar";
// import Team from "./sences/team";
// import Invoices from "./sences/invoices";
// import Contacts from "./sences/contacts";
// import Bar from "./sences/bar";
// import Form from "./sences/form";
// import Line from "./sences/line";
// import Pie from "./sences/pie";
// import FAQ from "./sences/faq";
// import Geography from "./sences/geography";

function App() {
  //function
  const [theme, colorMode] = useMode();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar
            isNonMobile={isNonMobile}
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
          <main className="content">
            <Topbar
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              {/* <Route path="/team" element={<Team />}></Route> */}
              {/* <Route path="/invoices" element={<Invoices />}></Route> */}
              {/* <Route path="/contacts" element={<Contacts />}></Route> */}
              {/* <Route path="/bar" element={<Bar />}></Route> */}
              {/* <Route path="/form" element={<Form />}></Route> */}
              {/* <Route path="/line" element={<Line />}></Route> */}
              {/* <Route path="/pie" element={<Pie />}></Route> */}
              {/* <Route path="/faq" element={<FAQ />}></Route> */}
              {/* <Route path="/geography" element={<Geography />}></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
