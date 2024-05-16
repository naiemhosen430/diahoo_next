'use client'
import { useState } from "react"
import mformData from "./FormData"
import Link from "next/link"
import UseAuthContext from "@/Hooks/UseAuthContext"



function RegisterForm() {
    const {hyndleSignup, loading, error, setError} = UseAuthContext()

const [formData, setFormData] = useState(mformData)

const hundleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleFormSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    if (formData.email === "" || formData.password === "" || formData.name === "" || formData.confirmpassword === "") {
        setError("Every fields are required");
    } else {
        if (formData.password === formData.confirmpassword){
             hyndleSignup({name: formData.name, email: formData.email, password: formData.password});
        }else{
            setError("Confirm Password not matched!");
        }
    }
  };



    return (
        <>
        <div className="lg:py-0">

            <p className="text-center border rounded-lg text-white m-4">{error}</p>
            <div className="bg-slate-950 rounded-lg p-10 m-auto">

            <form  >
                <h1 className="text-3xl py-10 pt-0 text-slate-400 p-4 font-bold text-center">
                    Create an account here
                </h1>
                <div>
                <label className="block mx-2 text-xl text-slate-200" htmlFor="name">
                    Write your full name
                </label>
                <input 
                    className="text-sm text-slate-400 block rounded-xl my-5 p-4 w-full bg-slate-900 border-slate-700" 
                    type="text" 
                    placeholder="Write your full name" 
                    value={formData.name}
                    name="name"
                    id="name"
                    onChange={hundleOnchange}
                    />
                </div>

                <div>
                <label className="block mx-2 text-xl text-slate-200" htmlFor="email">
                    Write your email
                </label>
                <input 
                    className="text-sm text-slate-400 block rounded-xl my-5 p-4 w-full bg-slate-900 border-slate-700" 
                    type="email" 
                    placeholder="Write your email" 
                    value={formData.email}
                    name="email"
                    id="email"
                    onChange={hundleOnchange}
                    />
                </div>

                <div>
                <label className="block mx-2 text-xl text-slate-200" htmlFor="password">
                    Write your password
                </label>
                <input 
                    className="text-sm text-slate-400 block rounded-xl my-5 p-4 w-full bg-slate-900 border-slate-700" 
                    type="password" 
                    placeholder="Write your password" 
                    value={formData.password}
                    name="password"
                    id="password"
                    onChange={hundleOnchange}
                    />
                </div>

                <div>
                <label className="block mx-2 text-xl text-slate-200" htmlFor="confirmpassword">
                    Write your confirm-password
                </label>
                <input 
                    className="text-sm text-slate-400 block rounded-xl my-5 p-4 w-full bg-slate-900 border-slate-700" 
                    type="password" 
                    placeholder="Write your confirmpassword"
                    value={formData.confirmpassword}
                    name="confirmpassword"
                    id="confirmpassword"
                    onChange={hundleOnchange}
                     />
                </div>
                <input className="text-2xl px-5 py-2 bg-slate-800 rounded-lg cursor-pointer text-white font-bold" onClick={handleFormSubmit} type="button" value={loading ? "Processing...": "Register"} />
            </form>

            <div className="flex items-center p-10 text-white font-bold">
            <div className="h-1 w-5/12 bg-slate-800"></div>
            <h1 className="px-5">Or</h1>
            <div className="h-1 w-5/12 bg-slate-800"></div>
          </div>

          <div className="text-center">
            <h1 className="px-5">
              <Link
                className="text-white text-sm bg-slate-800 shadow-2xl p-2 px-4 rounded-2xl hover:text-white hover:underline"
                href={"/login"}
              >
                
                Login now?
              </Link>
            </h1>
          </div>
          </div>

        </div>

        </>
    )
}

export default RegisterForm