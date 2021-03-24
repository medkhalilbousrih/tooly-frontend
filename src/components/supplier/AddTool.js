import { useForm } from "react-hook-form";

const AddTool = () => {
  const { register, handleSubmit, errors } = useForm();

  const submitFn = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email address
        </label>
        <input
          type="text"
          id="email"
          className="form-control"
          name="email"
          ref={register({ required: "this field is required" })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddTool;
