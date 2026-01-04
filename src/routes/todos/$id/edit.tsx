import { TodoForm } from "@/components/TodoForm";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/todos/$id/edit")({
  component: RouteComponent,
});

const todoData = {
  id: crypto.randomUUID() as string,
  createdAt: new Date(),
  completedAt: null,
  title: "Test",
  description: "test description",
};

function RouteComponent() {
  return (
    <div className="space-y-3">
      <Link to="..">
        <ArrowLeft /> Back
      </Link>
      <h1>Edit Todo</h1>
      <TodoForm todo={todoData} isEdit />
    </div>
  );
}
