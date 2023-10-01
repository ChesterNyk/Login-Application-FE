import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import { CssBaseline } from "@mui/material";
import AllAccountsPage from "./pages/AllAccountsPage";

const App = () => {

  

    return (
        <>
            <Router>
                <CssBaseline />
                <Routes>
                    <Route path="/login" exact element={<LoginPage />} />
                    <Route path="/landingPage" exact element={<LandingPage />} />
                    <Route path="/allAccountPage" exact element={<AllAccountsPage />} />
                    <Route path="/" element={<Navigate to="/login" replace />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
