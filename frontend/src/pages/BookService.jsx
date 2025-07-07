import { useForm } from "react-hook-form";

export function BookService() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Booking...", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("serviceId")} placeholder="Service ID" className="input" />
      <input {...register("date")} type="date" className="input" />
      <input {...register("time")} type="time" className="input" />
      <button type="submit" className="btn">Book Now</button>
    </form>
  );
}
