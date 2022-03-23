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
