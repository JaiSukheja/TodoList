import React from "react";

const Task = (props) => {
    const deleteIt = () =>{
        props.deleteClick(props.idx)
    }
    const editIt = () =>{
        props.editClick(props.idx)
    }

  return (
    <div className="text-xl flex p-2 bg-slate-900 rounded-lg gap-3">
      <div className="flex w-1/15 gap-4 justify-start items-center">
        <div className="text-2xl p-1 rounded-lg px-4 text-white font-extrabold">
          #{props.idx+1}
        </div>
      </div>
      <div className="flex w-3/4 items-center justify-around">
        <div className="text-blue-200 font-semibold overflow-hidden w-64">{props.task}</div>
        <div className="text-blue-200 font-semibold overflow-hidden w-64">{props.desc}</div>
      </div>
      <div className="flex w-1/4 gap-4 justify-end">
        <button className="bg-transparent p-1 rounded-lg px-4 text-blue-600 hover:bg-slate-800 gap-2 flex items-center" onClick={editIt} >
        <i class="fa-regular fa-pen-to-square"></i>
          Edit
        </button>
        <button className="bg-transparent p-1 rounded-lg px-4 text-rose-500 hover:bg-slate-800 gap-2 flex items-center" onClick={deleteIt}>
        <i class="fa-solid fa-trash-can"></i>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
