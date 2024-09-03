// script.js
function TodoApp() {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState("");

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask.trim()]);
            setNewTask(""); // Tømmer input-feltet
        }
    };

    return (
        <div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Legg til en ny oppgave..." 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                />
                <button 
                    className="btn btn-primary" 
                    onClick={handleAddTask}>
                    Legg til
                </button>
            </div>
            <ul className="list-group">
                {tasks.map((task, index) => (
                    <li key={index} className="list-group-item">
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Rendre TodoApp-komponenten til DOM
ReactDOM.render(<TodoApp />, document.getElementById('root'));
