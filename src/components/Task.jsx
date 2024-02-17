import React from "react";

const Task = (props) => {
    const deleteIt = () =>{
        props.deleteClick(props.idx)
    }
    const editIt = () =>{
        props.editClick(props.idx)
    }

  return (
    <div className="text-xl flex p-2 bg-slate-900 rounded-lg">
      <div className="flex w-1/15 gap-1 justify-start items-center">
        <div className="text-2xl w-max rounded-lg px-1 text-white font-extrabold">
          #{props.idx+1}
        </div>
      </div>
      <div className="flex w-3/4 items-center">
        <div className="text-blue-200 font-semibold overflow-hidden w-44 overflow-x-scroll p-2">{props.task}</div>
        <div className="text-blue-200 font-semibold overflow-hidden w-48 overflow-x-scroll p-2">{props.desc}</div>
      </div>
      <div className="flex w-1/4 px-1 justify-end">
        <button className="bg-transparent p-1 rounded-lg px-2 text-blue-600 hover:bg-slate-800 gap-2 flex items-center text-2xl" onClick={editIt} >
        {/* <i className="fa-regular fa-pen-to-square"></i> */}
        <i className="bx bxs-edit"></i>
          {/* Edit */}
        </button>
        <button className="bg-transparent p-1 rounded-lg px-2 text-rose-500 hover:bg-slate-800 gap-2 flex items-center text-2xl" onClick={deleteIt}>
        {/* <i className="fa-solid fa-trash-can"></i> */}
        <i class='bx bxs-trash'></i>
          {/* Delete */}
        </button>
      </div>
    </div>
  );
};

export default Task;
