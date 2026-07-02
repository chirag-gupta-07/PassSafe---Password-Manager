import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Entry from './components/Entry'
import showIcon from './assets/show.png'
import hideIcon from './assets/hide.png'
import { ToastContainer, toast } from 'react-toastify';

import './App.css'

function App() {
  const [form, setForm] = useState({ site: "", username: "", password: "" })
  const [passwords, setPasswords] = useState([])
  const ref = useRef()
  const imgRef = useRef()
  const API_URL = import.meta.env.API_URL || "http://localhost:3000/"

  const getPassword = async () => {
    const req = await fetch(`${API_URL}`)
    const data = await req.json()
    setPasswords(data)

  }

  useEffect(() => {
    async function pass() {
      await getPassword()
    }
    pass()
  }, [])

  const handleCopy = (e) => {
    toast("Copied to Clipboard!")
    navigator.clipboard.writeText(e)
  }

  const toggleShowPassword = () => {
    if (ref.current.type === "password") {
      ref.current.type = "text"
      imgRef.current.src = hideIcon
    } else {
      ref.current.type = "password"
      imgRef.current.src = showIcon
    }
  }

  const handleDelete = async (_id) => {
    // const item = passwords.filter(item => item._id === _id)[0]
    await fetch(`${API_URL}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ _id })
    })
    toast("Password Deleted!")

    await getPassword()
  }

  const handleEdit = async (_id) => {
    const item = passwords.filter(item => item._id === _id)[0]
    setForm({
      site: item.site,
      username: item.username,
      password: item.password,
    })
    await fetch(`${API_URL}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ _id })
    })
    toast("Edit your Credentials!")

    await getPassword()
  }



  const AddEntry = async () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      setForm({ site: "", username: "", password: "" })
      getPassword()
    } else if (form.site.lenght <= 3) {
      toast("Site Name should be greater than 3")
    } else if (form.site.username <= 3) {
      toast("Username should be greater than 3")
    } else {
      toast("Password should be greater than 3")
    }

  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })


  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-teal-500/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        <Navbar />

        {/* Main Vault Container */}
        <main className="max-w-4xl w-full mx-auto px-4 py-12 sm:px-6 lg:px-8 grow flex flex-col justify-start">

          {/* Header Info */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              Your Secure Credentials Vault
            </h1>
            <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto">
              Store and manage your passwords locally with modern visual design and instant access.
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-2xl shadow-slate-950/50">

            {/* Input Section */}
            <div className="space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">Site / Service</label>
                <input
                  type="text"
                  value={form.site}
                  placeholder="e.g. www.google.com or GitHub"
                  onChange={handleChange}
                  name="site"
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-slate-100 placeholder-slate-500 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
                <div className="md:col-span-5 flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">Username / Email</label>
                  <input
                    type="text"
                    value={form.username}
                    placeholder="e.g. chirag@domain.com"
                    name="username"
                    onChange={handleChange}
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-slate-100 placeholder-slate-500 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium"
                  />
                </div>

                <div className="md:col-span-4 flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">Password</label>
                  <div className="relative">
                    <input
                      ref={ref}
                      type="password"
                      value={form.password}
                      placeholder="Enter password"
                      name="password"
                      onChange={handleChange}
                      className="w-full bg-slate-950/60 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-slate-100 placeholder-slate-500 px-4 py-3 pr-10 rounded-xl transition-all duration-200 text-sm font-mono font-medium"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer invert p-1" onClick={toggleShowPassword}>
                      <img ref={imgRef} src={showIcon} alt="show/hide" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <button onClick={AddEntry} className="w-full bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold py-3 px-5 rounded-xl shadow-lg shadow-emerald-950/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/20">
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Entry
                  </button>
                </div>
              </div>
            </div>

            {/* Passwords Vault Table */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-4 px-1">
                <h2 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  Your Saved Credentials
                </h2>
                <span className="text-xs bg-emerald-950/50 border border-emerald-800/80 text-emerald-400 font-semibold px-2.5 py-1 rounded-full">
                  {passwords.length} Saved Vault
                </span>
              </div>


              <div className="overflow-x-auto rounded-xl border border-slate-800/80 bg-slate-950/40 shadow-xl">
                <table className="w-full border-collapse text-left text-sm text-slate-300">
                  <thead className="bg-slate-900/60 border-b border-slate-800/80 text-slate-400">
                    <tr>
                      <th scope="col" className="px-6 py-4 font-semibold text-slate-300">Site URL</th>
                      <th scope="col" className="px-6 py-4 font-semibold text-slate-300">Username / Email</th>
                      <th scope="col" className="px-6 py-4 font-semibold text-slate-300">Password</th>
                      <th scope="col" className="px-6 py-4 font-semibold text-slate-300 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {passwords.map((item, index) => {
                      return <Entry key={index} site={item.site} username={item.username} password={item.password} handleEdit={handleEdit} handleDelete={handleDelete} _id={item._id} handleCopy={handleCopy} />
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}

export default App
