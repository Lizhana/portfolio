import React, { useState } from "react";
import "./App.css";
import { MyRoutes } from "./routers/routes";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
export const ThemeContext = React.createContext(null);
import { Light, Dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen?"sidebarState active":""}>              
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <section>
                  <MyRoutes />
                </section>            
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({theme})=>theme.bgtotal};
  transition: all 0.4s;
  
  &.active {
    grid-template-columns: 200px auto;
  }
`;

export default App;
