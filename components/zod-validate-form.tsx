import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const ZodForm = () => {
  const schema = z.object({
    name: z.string().min(1, { message: "Required" }),
    age: z.number().min(10),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      Enter
      <div>
        <form onSubmit={handleSubmit((d) => console.log(d))}>
          <input {...register("name")} />
          {errors.name?.message && <p>Error!</p>}
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age?.message && <p>Error!</p>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ZodForm;
