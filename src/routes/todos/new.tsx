import { createFileRoute } from "@tanstack/react-router";
import { TodoForm } from "@/components/TodoForm";

export const Route = createFileRoute("/todos/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-3">
      <h1>Create new Todo</h1>
      <TodoForm />
    </div>
  );
}
