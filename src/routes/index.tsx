import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Pencil, Trash } from "lucide-react";

const todos = [
  {
    id: "1",
    title: "Todo 1",
    completed: false,
    description: "Description 1",
  },
  {
    id: "2",
    title: "Todo 2",
    completed: false,
    description: "Description 2",
  },
];

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="bg-gray-900 w-full h-screen p-3 space-y-3">
      <div className="flex justify-between">
        <h1>Todo App</h1>
        <Link className="link-button" to="/todos/new">
          Add new Todo
        </Link>
      </div>
      <div className="space-y-3">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-list-card">
            <Link to="/todos/$id" params={{ id: todo.id }}>
              {" "}
              {todo.title}
            </Link>
            <div className="button-group">
              <Link
                to={`/todos/$id/edit`}
                params={{ id: todo.id }}
                className="link-button"
              >
                <Pencil size={16} />
              </Link>
              <button>
                <Trash size={16} />
              </button>
              <button>
                <Check size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
