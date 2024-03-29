import React, { useEffect, useRef, useState } from "react";
import Tasks from "../../data.js";
import Task from "./Task.jsx";
const AddTask = () => {
  
  const [idxVal,setValue] = useState(-1);
  const taskRef = useRef(null);
  const descRef = useRef(null);
  const [addBtn, setAddBtn] = useState(true);
  const [TasksArray, setTasks] = useState(window.localStorage.getItem("Tasks") ? JSON.parse(window.localStorage.getItem("Tasks")) : Tasks);
  const handleClick = async () => {
    setAddBtn(true);
    const taskValue = taskRef.current.value;
    const descvalue = descRef.current.value;
    setTasks([
      ...TasksArray,
      {
        task: taskValue ? taskValue : "No Task Name",
        desc: descvalue ? descvalue : "No Description",
      },
    ]);
    taskRef.current.value = "";
    descRef.current.value = "";
  };
  const deleteClick = (idx) => {
    setTasks(TasksArray.filter((item, index) => index !== idx));
    // console.log(TasksArray)
  };
  const editClick = async (idx) => {
    setValue(idx);
    setAddBtn(false);
    taskRef.current.value = TasksArray[idx].task;
    descRef.current.value = TasksArray[idx].desc;
  };
  const editClickFunction = async () => {
    setAddBtn(true);
    // console.log(idxVal)
    const taskValue = taskRef.current.value;
    const descvalue = descRef.current.value;
    const newArray = TasksArray.map((item, index) => {
      if (idxVal == index) {
        return {
            task: taskValue ? taskValue : "No Task Name",
            desc: descvalue ? descvalue : "No Description",
          };
      }
      return item;
    });
    setTasks(newArray);
    taskRef.current.value = "";
    descRef.current.value = "";
  };

  useEffect(() => {
    window.localStorage.setItem("Tasks", JSON.stringify(TasksArray));
  }, [TasksArray]);

  return (
    <div className="flex flex-col gap-4 bg-black rounded-lg p-2">
      <div className="flex gap-5 justify-center sticky top-20 bg-black p-4">
        <input
          ref={taskRef}
          type="text"
          placeholder="Enter Task"
          className="text-center p-1 rounded-lg h-12 bg-slate-700 text-slate-300 placeholder:text-slate-300  text-xl outline-0 w-44 font-medium"
        />
        <input
          ref={descRef}
          type="text"
          placeholder="Enter Description"
          className="text-center p-1 rounded-lg h-12 bg-slate-700 text-slate-300 placeholder:text-slate-300  text-xl outline-0 w-48 font-medium"
        />
        <button
          className="text-center h-12 rounded-lg bg-slate-800 text-teal-400 font-semibold text-xl outline-0 w-24 hover:bg-slate-900"
          onClick={addBtn ? handleClick : editClickFunction}
        >
          {addBtn ? "Add Task" : "Update"}
        </button>
      </div>
      <div className="flex flex-col p-2 bg-black  rounded-lg gap-2">
        {TasksArray.map((single, idx) => {
          return (
            <Task
              task={single.task}
              desc={single.desc}
              key={idx}
              idx={idx}
              deleteClick={deleteClick}
              editClick={editClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddTask;
