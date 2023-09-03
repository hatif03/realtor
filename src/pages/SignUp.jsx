import { useState } from "react";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  return (
    <section>
      <h1 className=" text-3xl text-center font-bold mt-6">Sign Up</h1>
      <div className=" flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className=" md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img 
              src="https://plus.unsplash.com/premium_photo-1661558563494-60cbd006c068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="image" 
              className=" w-full rounded-2xl"
            />
        </div>
        <div className=" w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input 
                  type="text" 
                  id="name" 
                  className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Full Name"

                  />
            <input 
                type="email" 
                id="email" 
                className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email Address"

                />
            <div className=" relative mb-6">
              <input 
                  type={showPass? "text": "password"}
                  id="password" 
                  className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Password"
                    
                  />
                  {showPass? 
                    <AiFillEyeInvisible className=" absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowPass(!showPass)}/> : 
                    <AiFillEye className=" absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowPass(!showPass)}/>
                  }
            </div>
            <div className="justify-between flex whitespace-nowrap text-sm sm:text-lg">
              <p className=" mb-6">Have an account? <Link to="/sign-in" className=" text-red-600 hover:text-red-700 transition duration-200 ease-in-out">Sign in</Link></p>
              <p><Link to="/forgot-password" className=" text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out">Forgot Password</Link></p>
            </div>
            <button type="submit" className=" w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">Sign Up</button>
          </form>
          <div className=" my-4 flex items-center  before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
            <p className=" text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth/>
        </div>
      </div>
    </section>
  )
}

export default SignUp;