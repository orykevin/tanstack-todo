import { Todo } from "@/types/todo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Pencil, Trash } from "lucide-react";

const todoData: Todo = {
  id: "1",
  title: "Todo 1",
  createdAt: new Date(),
  completedAt: null,
  description: "Description 1",
};

export const Route = createFileRoute("/todos/$id/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  return (
    <div>
      <h1>{todoData.title}</h1>
      <p>{todoData.description}</p>
      <p className="text-sm opacity-80">
        Created at : {todoData.createdAt.toDateString()} - Completed at :{" "}
        {todoData.completedAt?.toDateString() || " - "}
      </p>
      <div className="button-group mt-6">
        <button className="flex-1">
          <Check size={16} /> Complete
        </button>
        <button className="flex-1">
          <Trash size={16} /> Delete
        </button>
        <Link to={"/todos/" + id + "/edit"} className="flex-1 link-button">
          <Pencil size={16} /> Edit
        </Link>
      </div>
    </div>
  );
}
