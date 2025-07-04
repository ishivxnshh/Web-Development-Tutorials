import React from 'react';

const App = () => {
    return (
        <div>
            <ErrorBoundary>
                <Card1 />
            </ErrorBoundary>
            <Card2 />
        </div>
    );
}

function Card1() {
    throw new Error("Error in Card1");

    return (
        <div style={{ background: "red", borderRadius: 20, padding: 20 }}>
            hi there
        </div>
    )
}

function Card2() {
    return (
        <div style={{ background: "blue", borderRadius: 20, padding: 20 }}>
            hello
        </div>
    )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}
export default App;