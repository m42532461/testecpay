import React from "react";
import { useForm } from "react-hook-form";

const TestPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: "bill", lastName: "lui", age: 2 },
  });
  console.log(errors);
  console.log(watch());

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col">
      <div className="bg-gray-300 w-full">
        <form action={`http://localhost:5000/test`} method="post">
          <input
            type="submit"
            value="Submit"
            className="px-32 bg-white text-bg py-4"
          />
        </form>
      </div>
      <div className="bg-red-300 w-full">
        <form>
          <input
            className="bg-red-300 w-full border"
            {...register("firstName", {
              required: "This is required",
              maxLength: { value: 20, message: "Too long" },
            })}
          />
          <p>{errors.firstName?.message}</p>
          <input
            className="bg-red-300 w-full border"
            {...register("lastName", {
              required: "This is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Invalid email",
              },
            })}
          />
          <p>{errors.lastName?.message}</p>
          <input
            className="bg-red-300 w-full border"
            type="number"
            {...register("age", {
              required: "This is required",
              min: { value: 18, message: "Too young" },
              max: { value: 99, message: "Too old" },
            })}
          />
          <p>{errors.age?.message}</p>
          <input className="bg-red-300 w-full border" type="submit" />
          <button onClick={handleSubmit(onSubmit)}>提交button</button>
        </form>
      </div>
    </div>
  );
};

export default TestPage;
