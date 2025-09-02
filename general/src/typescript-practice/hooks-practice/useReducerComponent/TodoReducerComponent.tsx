import React, { useReducer, useState, type JSX } from 'react';

// 
interface Todo {
    id: string;
    hasCompleted?: boolean;
    taskDescription: string;
};

// Interface great for specifying 
type TodoComponentState = Todo[];

interface TodosComponentAction {
    type: string;
    payload: Todo
}

const DefaultTodoState: TodoComponentState = [];
/*
    STEP #1: reducer must return a state therefore set the new state to be currentstate
    STEP #2: switch on the action of the reducer and handle (add, toggle, and remove)
    STEP #2a: Handle mean update the newTodoComponentState with the action.payload & the prevState
    Step #2b: After handling break so that other ones don't have to worry about it
    Step #3 return; 
    Step #4: Error Handling for the function is throwing new Error and someone will catch it
*/
const TodoReducer = (prevState: TodoComponentState, todoAction: TodosComponentAction) : TodoComponentState => {
    switch (todoAction?.type ?? "") {
        case "add": 
            return [...prevState, todoAction.payload];
        case "remove":
            let newTodoState = [...prevState];
            newTodoState.splice(newTodoState.findIndex(todo => todo.id == todoAction.payload.id), 1);
            
            return newTodoState;
        case "toggle":
            return prevState.map(todo => {
                if (todo.id && todo.id == todoAction.payload.id) {
                    todo.hasCompleted = todoAction.payload.hasCompleted;
                }

                return todo;
            });
        default:
            console.log('Unfamiliar Todo Action');
            return prevState;
    }
}

function TodoReducerComponent() : JSX.Element {
    // UseReducer output: actionDispatcher, currentState
    // UseReducer input: defaultState, reducerFunction

    const [todoState, todoEventDispatcher] = useReducer(TodoReducer, []);
    const [newTaskInput, setNewTaskInput] = useState("");

    /*
         Todo Action need to be handle by this eventHandler [A. Toggle, B. Remove]
        1) preventDefault so it doesn't bubble up to the <ul> or the <div>
        2) get the id of the todoItem from the e.currentTarget and check if this item exist in the todoSTate
        3) if it does proceed if not return
        4) if it exist, we must now know what event it was using e.target
        5) check e.target.id this will allow us to find it easy
        6) once we know if its toggle event or remove event we can dispatch 
        
    */
    const handleTodoItemEvent = (e: React.MouseEvent<HTMLElement>) => {
        let elementWithEvent = e.target as HTMLElement;
        let todoListItemElement = e.currentTarget;
        let todoListItemId = todoListItemElement.id;
        let todoItem = todoState.find(todo => todo.id == todoListItemId);

        if (!todoItem) {
            return;
        }

        if (elementWithEvent.id == 'remove-todo-btn') {
            let removeTodoItemAction: TodosComponentAction = {
                type: "remove",
                payload: todoItem
            }

            todoEventDispatcher(removeTodoItemAction);
        } else if (elementWithEvent.id == `${todoListItemId}-status-update`) {
            let isTodoCompleted = (elementWithEvent as HTMLInputElement)?.checked ?? false;

            let toggleTodoItemAction: TodosComponentAction = {
                type: "toggle",
                payload: {
                    ...todoItem,
                    hasCompleted: isTodoCompleted
                }
            }

            todoEventDispatcher(toggleTodoItemAction);
        }
    }

    const handlNewTaskSubmitReactFormat = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault(); // this prevent the element from bublling up to other element

        if (!newTaskInput) {
            return;
        }

        let newTodoItem: Todo = {
            id: getNewTodoID(),
            taskDescription: newTaskInput,
            hasCompleted: false
        };

        let newTodoReducerAction: TodosComponentAction = {
            type: "add",
            payload: newTodoItem
        }

        todoEventDispatcher(newTodoReducerAction);
        setNewTaskInput("");
    }

    const handleNewTaskSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        let newTodoFormElement = e.currentTarget;

        // METHOD #1
        //This create a form data from the node element which we can use the following methods to obtain form data we want
        // .entires() | .values() | .get | .getAll() | append() | delete() | keys() | has()
        // const newTodoFormData = new FormData(e.currentTarget);

        // METHOD #2 (Obtain the input based on the form element name) via DOM MAGIC
        // currentTarget vs e.target (refer to lowest level where event originally ocurred)
        // e.currentTarget (refer to the element which the listener is attached to)
        // let newTodoInput = e.currentTarget["new-todo-input"]; 

        // METHOD #3 (Obtain the input element based on the form element.elements.namedItem() "official way to access form element")
        // let newTodoInputElement = newTodoFormElement.elements.namedItem('new-todo-input');

        // METHOD #4 Using query selector 
        // let newTodoInputElement = newTodoFormElement.querySelector("[name='new-todo-input']");
        
        // VERDICT
        // I can use the value of the newTodoTask input from the state {newTaskInput} this is how react should work
        // I think that doing form.elements.namedItem is a bit werid
        // I think that doing newTodoFormELement['new-todo-input'] is strange because even tho newTodoFormElement is an object
        // Which makes it that we can access object properties using [] but the inner element input how come its suddently part of
        // the newTodoFormElement object

        let newTodoInputElement = newTodoFormElement.querySelector("[name='new-todo-input']"); //querySElector are selector by CSS syntax
        let newTodoInputValue = newTodoInputElement?.getAttribute('value') ?? "";

        if (newTodoInputValue) {
            let newTodoItem: Todo = {
                id: getNewTodoID(),
                taskDescription: newTodoInputValue,
                hasCompleted: false
            }

            let addTodoTaskAction: TodosComponentAction = {
                payload: newTodoItem,
                type: "add"
            };

            todoEventDispatcher(addTodoTaskAction);
            setNewTaskInput("");
        }
        
        /*
            #1 What is the new task that was submitted
            #2. If the new task is empty don't create todoobject and just return
            #3. PRoceed with create todo object if taskINput has value [get newID]
        */
    }

    function getNewTodoID(): string {
        return Date.now().toString(36) + Math.random().toString(36).substring(2,9);
    }

    return (
        <div id="todo-list-component">
            <h4>My Todo Reducer List</h4>
            <ul id="todo-list">
                {todoState.map((todo, index) => {
                    return (
                        <li id={todo?.id ?? index} key={todo?.id ?? index} onClick={handleTodoItemEvent}>
                            <input type='checkbox' id={todo.id+'-status-update'} name={todo.id+'-status-update'} checked={!!todo?.hasCompleted} onChange={() => {}} />
                            {todo?.taskDescription ?? ""}<button id="remove-todo-btn" className='remove_todo'>X</button>
                        </li>
                    );
                })}
                {/* {todoState.map((todo, index) => {
                    return (
                        <li id={(todo?.id ?? index)+"li"} key={(todo?.id ?? index)+"li"}>
                            <input type="checkbox" id={`${todo?.id ?? index+'todo'}-status-update`} name={`${todo?.id ?? index+"todo"}-status-update`} checked={!!todo.hasCompleted}
                                onChange={(e) => {
                                    todoEventDispatcher({
                                        type: "toggle",
                                        payload: { id: todo.id, hasCompleted: e.target.checked, taskDescription: todo.taskDescription }
                                    });
                                }} />
                            {todo.taskDescription}
                            <button id={`${todo?.id ?? index+"todo"}-remove-btn`} className='remove-todo-btn' 
                                onClick={(e) => {
                                    todoEventDispatcher({
                                        type: "remove",
                                        payload: todo
                                    });
                                }}>x</button>
                        </li>
                    )
                })} */}
            </ul>
            <form id='new-todo-form' onSubmit={handleNewTaskSubmit}>
                <input name={"new-todo-input"} value={newTaskInput} onChange={(e) => { setNewTaskInput(e?.target?.value ?? newTaskInput) }}/>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export { TodoReducerComponent }

/*
    HTML Element: html, <head>, <body> , <main>, <article>, <section>, <aside>, <nav>, <ul> <li>, <ol>, <li>, <input >, <select>
*/

/*
    DEFAULT NODE PROPERTIES: [childNodes (collection of nodes), children(collection of element nodes), className, classList, id, ]
    #1 [id, classlist, className, attributes, innerHTML, innnerText (text contentn only)]
    #2 [childNOdes, children, firstChild, firstElementChild, lastChild, lastElementChild, nextSibling, nextSibliingElement, previousSibiling, ]
    #3 [clientHeight, clientLeft, clientRight, clientWidth]

    DEFAULT NODE METHODS
    #1 [append(), appendChild(), ]
    #2 []
*/