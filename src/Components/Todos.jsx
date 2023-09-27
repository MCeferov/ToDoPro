// Icons
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";

const Todos = () => {
  return (
    <div className="w-3/4 bg-dark p-5 rounded-lg mx-auto">
      <h1 className="text-center text-2xl mb-5">Your tasks</h1>
      {/* <p className="text-red-500 text-center text-lg">
        There is nothing to show
      </p> */}
      <ul className="bg-dark">
        <li className="flex bg-slate-500 cursor-pointer hover:bg-slate-700 transition-all duration-200 items-center justify-between p-2 rounded mb-2">
          <p>Todo 1</p>
          <div className="flex gap-2">
            <button className="p-2 rounded hover:bg-dark transition-all duration-200">
              <EditIcon />
            </button>
            <button className="p-2 rounded hover:bg-dark transition-all duration-200">
              <DeleteIcon />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Todos;
