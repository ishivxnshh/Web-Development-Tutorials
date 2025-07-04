import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="neet/online-coaching-class-11" element={<Class11Program />} />
                    <Route path="neet/online-coaching-class-12" element={<Class12Program />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Layout() {
    return (
        <div style={{
            height: "100vh",
            backgroundColor: "lightblue"
        }}>
            <h1>Welcome to Allen!</h1>
            <nav>
                <ul style={{ display: "flex", listStyle: "none", gap: "20px", padding: 0 }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/neet/online-coaching-class-11">Online Coaching Class 11</Link>
                    </li>
                    <li>
                        <Link to="/neet/online-coaching-class-12">Online Coaching Class 12</Link>
                    </li>
                </ul>
            </nav>
            <div style={{
                height: "90vh",
                backgroundColor: "aqua"
            }}>
                <Outlet />
            </div>
            <h5>by Shivansh</h5>
        </div>
    );
}

function ErrorPage() {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}

function Landing() {
    return (
        <div>
            We offer NEET programs for Class 11 and Class 12.
        </div>
    );
}

function Class11Program() {
    return (
        <div>
            NEET Programs for Class 11
        </div>
    );
}

function Class12Program() {
    const navigate = useNavigate();

    function redirectUser() {
        navigate("/");
    }

    return (
        <div>
            NEET Programs for Class 12
            <br />
            <button onClick={redirectUser}>Go back to landing</button>
        </div>
    );
}

export default App;