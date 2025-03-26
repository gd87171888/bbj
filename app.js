function App() {
    try {
        return (
            <div data-name="app" className="min-h-screen flex flex-col bg-gray-900">
                <HomePage />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
