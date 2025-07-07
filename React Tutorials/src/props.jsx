

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

// prop drilling is the process of passing data from a parent component to a child component through props. This can lead to a situation where you have to pass props through many layers of components, even if those components don't need the data themselves. This can make your code harder to maintain and understand.