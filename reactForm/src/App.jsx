import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function  onSubmit(data) {
    //api call ko stimulate delay of 10 sec
   await new Promise((resolve) => setTimeout(resolve, 10000))

    console.log("submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register(
            "firstName", //to track input field data
            {
              required: true,
              minLength: { value: 3, message: "min value is 3" },
              maxLength: 10,
            }
          )}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
        // to show error msg
      </div>
      <br />
      <div>
        <label>Middle Name: </label>
        <input
          className={errors.middleName ? "input-error" : ""}
          {...register("middleName", {
            required: true,
            minLength: 3,
            maxLength: 10,
            pattern: { value: /^[A-Za-z]+$/i, message: "not acc to rules" },
          })}
        />
        {errors.middleName && (
          <p className="error-msg">{errors.middleName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName", {
            required: true,
            minLength: 3,
            maxLength: 10,
          })}
        />
      </div>
      <br />

      <button type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}>Submit</button>
    </form>
  );
};

export default App;
