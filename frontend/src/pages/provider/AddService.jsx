 import { useForm } from "react-hook-form";
import { useAddService } from "../../hooks/useAddService";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export function AddService() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useAddService();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Service added!");
        queryClient.invalidateQueries({ queryKey: ["services"] });
        reset();
      },
      onError: () => {
        toast.error("Failed to add service");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("title")} placeholder="Service Title" className="input" />
      <textarea {...register("description")} placeholder="Description" className="input" />
      <input {...register("price")} type="number" placeholder="Price" className="input" />
      <button type="submit" className="btn" disabled={isPending}>
        {isPending ? "Adding..." : "Add Service"}
      </button>
    </form>
  );
}
