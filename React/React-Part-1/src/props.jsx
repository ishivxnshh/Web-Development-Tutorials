

function App() {
    return (
        <div style={{ display: "flex", background: "grey" }}>
            <Card>
                <div style={{ color: "black" }}>
                    What do you want to post
                    <br /> <br />
                    <input type="text" />
                </div>
            </Card>
            <Card>
                <div>
                    hi there!
                </div>
            </Card>
        </div>
    );
}

function Card({ children }) {
    return (
        <div style={{ background: "blue", borderRadius: 10, color: "black", padding: 10, margin: 10 }}>
            TOPBAR
            {children}
            {children}
            FOOTER
        </div>
    );
}

export default App