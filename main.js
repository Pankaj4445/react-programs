function Hello() {
            return React.createElement('h2', null, 'Hello React');
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(Hello, null));