import React from 'react'

const Entry = ({site,_id,username,password,handleDelete,handleEdit,handleCopy}) => {
    return (
        <tr className="hover:bg-slate-900/30 transition-colors duration-150">
            <td className="px-6 py-4 font-medium text-slate-200">
                <div className="flex items-center gap-2.5">
                    <span className="truncate max-w-50 font-medium text-slate-200">{site}</span>
                    <button onClick={()=>handleCopy(site)} className="text-slate-500 hover:text-emerald-400 transition-colors duration-150 p-1 hover:bg-slate-800 rounded cursor-pointer" title="Copy URL">
                        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125v-9.75A1.125 1.125 0 014.875 9.75H8.25m7.5 7.5v-3.375c0-.621-.504-1.125-1.125-1.125h-9.75a1.125 1.125 0 00-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h9.75a1.125 1.125 0 001.125-1.125V17.25z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75h9.75a1.125 1.125 0 001.125-1.125v-9.75A1.125 1.125 0 0018 3.75h-9.75a1.125 1.125 0 00-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 text-slate-300">
                <div className="flex items-center gap-2.5">
                    <span className="truncate max-w-37.5">{username}</span>
                    <button onClick={()=>handleCopy(username)} className="text-slate-500 hover:text-emerald-400 transition-colors duration-150 p-1 hover:bg-slate-800 rounded cursor-pointer" title="Copy Username">
                        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125v-9.75A1.125 1.125 0 014.875 9.75H8.25m7.5 7.5v-3.375c0-.621-.504-1.125-1.125-1.125h-9.75a1.125 1.125 0 00-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h9.75a1.125 1.125 0 001.125-1.125V17.25z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75h9.75a1.125 1.125 0 001.125-1.125v-9.75A1.125 1.125 0 0018 3.75h-9.75a1.125 1.125 0 00-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 text-slate-300 font-mono">
                <div className="flex items-center gap-2.5">
                    <span className="truncate max-w-30">••••••••</span>
                    <button onClick={()=>handleCopy(password)} className="text-slate-500 hover:text-emerald-400 transition-colors duration-150 p-1 hover:bg-slate-800 rounded cursor-pointer" title="Copy Password">
                        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125v-9.75A1.125 1.125 0 014.875 9.75H8.25m7.5 7.5v-3.375c0-.621-.504-1.125-1.125-1.125h-9.75a1.125 1.125 0 00-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h9.75a1.125 1.125 0 001.125-1.125V17.25z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75h9.75a1.125 1.125 0 001.125-1.125v-9.75A1.125 1.125 0 0018 3.75h-9.75a1.125 1.125 0 00-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-3">
                    <button onClick={()=>handleEdit(_id)} className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg text-xs font-semibold shadow border border-slate-850 hover:border-slate-800 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer" title="Edit entry">
                        <svg className="w-3.5 h-3.5 text-emerald-400 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                        <span>Edit</span>
                    </button>
                    <button onClick={()=>handleDelete(_id)} className="flex items-center gap-1.5 bg-slate-900 hover:bg-rose-950/30 text-slate-400 hover:text-rose-400 px-3 py-1.5 rounded-lg text-xs font-semibold shadow border border-slate-850 hover:border-rose-900/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer" title="Delete entry">
                        <svg className="w-3.5 h-3.5 text-rose-500 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <span>Delete</span>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default Entry
