import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";

const App = () => {

  

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" exact element={<LoginPage />} />
                    <Route path="/landingPage" exact element={<LandingPage />} />
                    <Route path="/" element={<Navigate to="/login" replace />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
