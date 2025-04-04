## React Part 4

### Objects and State

When using `useState()` with objects, the state is managed as a single object containing multiple properties. To update a specific property in the object, we need to create a new object by spreading the previous state and then modifying the desired property. This is because React does not detect changes in nested properties of an object directly, and without creating a new object, the component will not re-render.

For example:
```jsx
const [moves, setMoves] = useState({ blue: 0, red: 0 });

const updateBlue = () => {
    setMoves((prevMoves) => {
        return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
};
```

Here, `...prevMoves` spreads the previous state into a new object, and then `blue` is updated. This ensures React recognizes the state change and re-renders the component.

### Arrays and State

When using `useState()` with arrays, the state is managed as an array. To update the array, we create a new array by spreading the previous state and adding the new element. This ensures React recognizes the state change and re-renders the component.

For example, in the `LudoBoard.jsx` file:
```jsx
const [arr, setArr] = useState(['no moves']);

const updateBlue = () => {
    setArr((prevArr) => {
        return [...prevArr, "blue moves"];
    });
};
```

Here, `...prevArr` spreads the previous array into a new array, and `"blue moves"` is added as a new element. This ensures React detects the change and updates the component.

Using arrays in state is useful for maintaining a list of actions or events, such as tracking moves in the Ludo game.

### Adding Tasks to an Array

In the `TodoList.jsx` file, tasks are managed using the `useState()` hook with an array. Here's how the flow works:

1. **State Initialization**:
   - The `task` state is initialized as an empty array to store the list of tasks.
   - The `newTask` state is initialized as an empty string to temporarily hold the value of the task being added.

   ```jsx
   const [task, setTask] = useState([]);
   const [newTask, setNewTask] = useState('');
   ```

2. **Updating the Input Value**:
   - The `updateTaskValue` function is triggered on every change in the input field.
   - It updates the `newTask` state with the current value of the input field.

   ```jsx
   const updateTaskValue = (e) => {
       setNewTask(e.target.value);
   };
   ```

3. **Adding a New Task**:
   - The `addNewTask` function is triggered when the "Add Task" button is clicked.
   - It creates a new array by spreading the existing `task` array and adding the `newTask` value.
   - The `newTask` state is then reset to an empty string to clear the input field.

   ```jsx
   const addNewTask = () => {
       setTask([...task, newTask]);
       setNewTask('');
   };
   ```

4. **Rendering the Task List**:
   - The `task` array is mapped to render each task as a list item (`<li>`).

   ```jsx
   <ul>
       {task.map((item) => (
           <li>{item}</li>
       ))}
   </ul>
   ```

This approach ensures that the state is updated immutably, and React re-renders the component whenever a new task is added.

**Example Flow**:
1. User types "Buy groceries" in the input field.
2. The `newTask` state is updated to "Buy groceries".
3. User clicks the "Add Task" button.
4. The `task` array is updated to `["Buy groceries"]`, and the input field is cleared.
5. The task list is re-rendered to display "Buy groceries".

### Methods in TodoList

#### `deleteTask(id)`
- This method removes a task from the `task` array by filtering out the task with the given `id`.
- The `filter()` method creates a new array that excludes the task with the matching `id`.
- The updated array is then set as the new state using `setTask()`.

#### `upperCaseAll()`
- This method converts all tasks in the `task` array to uppercase.
- The `map()` method is used to iterate over the array and create a new array where each task's `task` property is converted to uppercase.
- The updated array is then set as the new state using `setTask()`.

#### `upperCaseOne(id)`
- This method converts a single task to uppercase based on the provided `id`.
- The `map()` method is used to iterate over the array and update only the task with the matching `id`.
- For the matching task, a new object is created with the `task` property converted to uppercase.
- The updated array is then set as the new state using `setTask()`.

### Why Use Arrow Functions in Buttons?

1. **`deleteTask` Button**:
   - The `onClick` handler for the delete button uses an arrow function: `onClick={() => deleteTask(item.id)}`.
   - This ensures that the `deleteTask` function is not executed immediately when the component renders.
   - The arrow function allows passing the `id` as an argument to the `deleteTask` function when the button is clicked.

2. **`upperCaseAll` Button**:
   - The `onClick` handler for the "UpperCase All" button directly references the `upperCaseAll` function: `onClick={upperCaseAll}`.
   - Since no arguments are passed, the function can be directly referenced without wrapping it in an arrow function.

3. **`upperCaseOne` Button**:
   - Similar to the delete button, the `onClick` handler uses an arrow function: `onClick={() => upperCaseOne(item.id)}`.
   - This ensures the `upperCaseOne` function is called with the correct `id` when the button is clicked.

Using arrow functions in `onClick` handlers is a common practice in React to ensure proper execution and argument passing.
