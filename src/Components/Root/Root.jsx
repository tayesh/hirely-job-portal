import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";

const Root = () => {
    const [darkmode, setDarkmode] = useState(false);

    const darkTheme = createTheme({
        palette: {
            mode: darkmode ? 'dark' : 'light',
        },
    });

    const changeTheme = () => {
        setDarkmode(!darkmode);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
          
                <div className="epilogue mb-[76px]">
                    <Navbar darkmode={darkmode} changeTheme={changeTheme} />
                </div>
                <Outlet />
                <Footer />
          
        </ThemeProvider>
    );
};

export default Root;