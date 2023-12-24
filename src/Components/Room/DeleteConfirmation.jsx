import Backdrop from "../../utils/Backdrop";
import Button from "../Button/Button";

function DeleteConfirmation({ toggleForm, deleteFn, isLoading }) {
  return (
    <div>
      <Backdrop onClick={toggleForm} />
      <div className="bg-gray-100 flex flex-col gap-8 absolute z-50 w-[85%] p-6 rounded-2xl  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1>Are You Sure You Want To Delete ?</h1>
        <div className="flex self-end items-center gap-4 ">
          <Button
            category="create"
            onCLick={toggleForm}
            disabled={isLoading}
            className="bg-gray-500 text-black border-2 border-gray-500 hover:bg-gray-700">
            Cancel
          </Button>
          <Button
            onCLick={deleteFn}
            disabled={isLoading}
            category="create"
            className="bg-red-500 hover:bg-red-700">
            {isLoading ? "Deleting" : "Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
