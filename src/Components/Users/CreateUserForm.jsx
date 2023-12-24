import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { useCreateEmployee } from "../Admin/useUsers";
import { useDepartments } from "../Department/useDepartments";
import Spinner from "../../utils/Spinner";

function CreateUserForm({ onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const { mutate, isLoading } = useCreateEmployee(onClose);
  const { departments, isLoading: isLoadingDep } = useDepartments();

  const onSubmit = function (d) {
    mutate(d);
  };

  const pass = watch("password");

  if (isLoading || isLoadingDep) return <Spinner />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  w-[85%] lg:w-[60%] xl:w-[40%] rounded-lg z-50 p-4 sm:p-8">
      <label className="label">Name :</label>
      {errors.name && <p className="input-error">{errors.name.message}</p>}
      <input
        {...register("name", { required: "please enter room name" })}
        className="in"
        type="in"
      />

      <label className="label">Role :</label>
      {errors.role && <p className="input-error">{errors.role.message}</p>}
      <select
        {...register("role", {
          required: "please enter role type",
        })}
        className="in"
        type="in">
        <option value="doctor">Doctor</option>
        <option value="nurse">Nurse</option>
      </select>

      <label className="label">Phone:</label>
      {errors.phone && <p className="input-error">{errors.phone.message}</p>}
      <input
        {...register("phone", {
          required: "please enter phone num",
          pattern: {
            value: /^(0\d{10})$/,
            message: "invalid phone number",
          },
        })}
        className="in"
        type="in"
      />

      <label className="label">Salary:</label>
      {errors.salary && <p className="input-error">{errors.salary.message}</p>}
      <input
        {...register("salary", {
          required: "please enter salary",
          pattern: {
            value: /^\d+$/,
            message: "enter valid salary",
          },
        })}
        className="in"
        type="text"
      />

      <label className="label">Gender:</label>
      {errors.gender && <p className="input-error">{errors.gender.message}</p>}
      <select
        {...register("gender", {
          required: "please enter phone num",
        })}
        className="in">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label className="label">Email:</label>
      {errors.email && <p className="input-error">{errors.email.message}</p>}
      <input
        {...register("email", {
          required: "please enter phone num",
        })}
        type="email"
        className="in"
      />

      <label className="label">Age:</label>
      {errors.age && <p className="input-error">{errors.age.message}</p>}
      <input
        {...register("age", {
          required: "please enter age",
        })}
        type="number"
        className="in"
      />

      {/*  */}
      <label className="label">Department:</label>
      {errors.department && (
        <p className="input-error">{errors.department.message}</p>
      )}
      <select
        {...register("department", {
          required: "please enter department",
        })}
        className="in">
        {departments?.data.map((dep) => {
          return (
            <option key={dep._id} value={dep._id}>
              {dep.name}
            </option>
          );
        })}
      </select>
      {/*  */}

      <label className="label">Password:</label>
      {errors.password && (
        <p className="input-error">{errors.password.message}</p>
      )}
      <input
        {...register("password", {
          required: "please enter password",
          minLength: 8,
        })}
        type="password"
        className="in"
      />

      <label className="label">Password Confirm:</label>
      {errors.passwordConfirm && (
        <p className="input-error">{errors.passwordConfirm.message}</p>
      )}
      <input
        {...register("passwordConfirm", {
          required: "please enter password confirm",
          minLength: 8,
          validate: (val) => {
            if (val !== pass) {
              return "password not matching";
            }
          },
        })}
        type="password"
        className="in"
      />

      <div className="flex self-end gap-4">
        <Button
          disabled={isLoading}
          category="create"
          className="bg-green-500 hover:bg-green-300">
          {isLoading ? "Creating..." : "Create"}
        </Button>
      </div>
    </form>
  );
}

export default CreateUserForm;
