

function App() {
  let variable = 25;
  return (
    <div className="App">
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h2>Todo List</h2>
        <a href="#">Home</a>
        <a href="#">About</a>
        <input type="text" placeholder="Search todos..." style={{ padding: '5px' }} />
      </nav>
      <header className="App-header">
        <h1>Todo List</h1>
        <h2>Home</h2>
        <h2>About</h2>
      </header>
    </div>
  );
}

export default App;
