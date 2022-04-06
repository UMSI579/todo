# Step by step description
## Step 1: Copy the markup from PS4 (todo list)
- Remove IDs
- Change 'class' to 'className

## Step 2: Make a TodoItem component
- These items will eventually be rendered based on an array of "todos", but for now lets hard code two of them
- For now, just display the timestamp that is passed in. We can worry about formatting later.

## Step 3: Move inputs to InputGroup component

## Step 4: Move todo item data to an array
- Loop through the array to add a `<TodoItem />` for each todo.
- In later steps, adding a todo will mean adding the data to this array.
- Add a "created" millisecond timestamp on these. This will be used to mark items done.

## Step 5: Turn the todo item array into state.
- Once it becomes state, any time the todo item array changes, any component that uses that array will be re-rendered.

## Step 6: Just add some line breaks and indents in preparation to add the form handlers.

## Step 7: Create state for every input in the "add task" form

## Step 8: Get the form to add tasks
- pass down `setTodoItems` from `TodoList` to `InputGroup` so the input group can update the state of the parent `TodoList`
- add an onClick to the submit `<button>` with a callback that adds an item.
- Bring in a reworked version of `dateAndTimeToTimestamp` from PS4 that is provided via a `utils.js` file.

## Step 9: Improve the form
- Clear the inputs on submit
- Make it submit if you hit enter while *any* input is focus

## Step 10: Set tasks to 'done'
- Add the timestamp as a key for each `TodoItem`, every item in a list should get a `key`.
- In TodoList, create a `removeTodoItem` function that removes an item if the 'created' timestamp matches.
- Pass `removeTodoItem` as a prop to each `TodoItem` that uses its 'created' as the function arg. This function will be the 'done' buttons `onClick` callback

## Step 11: Integrate Local Storage
- Your item list will survive refreshes and even browser restarts.

## Step 12: Format the dates better
- Realized it was necessary to keep track of date/time values AND valueAsNumber

## Step 13: Refactor CSS to use CSS modules
- CSS modules require the file to end in .module.css, so I moved the CDN bootstrap CSS to local
- With CSS modules, the CSS is copied to an object, then each property of the object corresponds to a class in the CSS.
- See [Creating a CSS modules stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)

## Step 14: Destructure props on their way in
- You can save space and improve readability by destructuring props in the component args.

## Step 15: Create a "filter todos" component
- It won't actually filter anything yet.
- We'll do some CSS cleanup, too.
- Add some additional default items so it is easier to test filtering, and we will move those to a separate file to reduce chaos.

## Step 16: Enable filtering with useEffect
- Filtering will now *work*, but in a way that could have performance issues in a more complex application, especially if the data is fetched remotely.
  - The console.log shows a filter happening on each keystroke.

## Step 17: Throttle filter requests with the useEffect cleanup function.
- Filtering on EVERY change event can be resource draining and it is unnecessary. People type fast!
- We can cancel each filter request until there hasn't been one for 500m.