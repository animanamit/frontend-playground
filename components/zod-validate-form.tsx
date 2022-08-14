import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const ZodForm = () => {
  const FormSchema = z.object({
    link: z
      .string({
        invalid_type_error: "Not a valid URL.",
      })
      .url(),
    name: z.string().min(1, { message: "Name is required." }),
    price: z
      .string({ invalid_type_error: "A numerical price is required." })
      .min(1),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 3000));
  };

  return (
    <div>
      <h1>FORM EXAMPLE</h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-neutral-800 px-6 rounded-md py-8 text-white flex flex-col w-96"
        >
          <h1 className="text-4xl font-bold tracking-tight py-2 text-pink-400">
            Add a new item
          </h1>

          <div className="flex flex-col space-y-2 mt-2">
            <label>Name</label>
            <input
              disabled={isSubmitting}
              type="text"
              className=" px-2 py-1 rounded-sm text-black focus:outline-blue-500"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-md mt-1 text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col space-y-2 mt-2">
            <label>Link</label>
            <input
              disabled={isSubmitting}
              className=" px-2 py-1 rounded-sm text-black focus:outline-blue-500"
              type="text"
              {...register("link")}
            />
            {errors.link && (
              <p className="text-md mt-1 text-red-500">{errors.link.message}</p>
            )}
          </div>

          <div className="flex flex-col my-4 space-y-2">
            <label>Price</label>
            <input
              disabled={isSubmitting}
              className=" px-2 py-1 rounded-sm text-black focus:outline-blue-500"
              type="number"
              {...register("price")}
            />
            {errors.price && (
              <p className="text-md mt-1 text-red-500">
                {errors.price.message}
              </p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            className="w-fit-content py-1 mt-2 mx-auto  px-4 rounded-sm bg-green-600 text-white font-semibold "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ZodForm;
