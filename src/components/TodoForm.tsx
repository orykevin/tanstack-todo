import { Todo } from "@/types/todo";

export const TodoForm = ({
  isEdit = false,
  todo,
}: {
  isEdit?: boolean;
  todo?: Todo;
}) => {
  return (
    <form className="w-full space-y-2">
      <label className="block" htmlFor="title">
        Title
      </label>
      <input type="text" name="title" defaultValue={todo?.title} />
      <label className="block" htmlFor="description">
        Description
      </label>
      <textarea
        name="description"
        className="min-h-25"
        defaultValue={todo?.description}
      ></textarea>
      <button className="w-full" type="submit">
        {isEdit ? "Edit Todo" : "Add Todo"}
      </button>
    </form>
  );
};
