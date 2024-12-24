import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Manager =() => {
  const [form, setform]= useState({site:"" , username:"", password:""})
  const [passwordArray , setPasswordArray] =  useState([])
  
  const getPassword = async () =>{
    let req = await fetch("http://localhost:3000/")
    // let passwords= localStorage.getItem("password");
    let passwords = await req.json()
    console.log(passwords)
      setPasswordArray(passwords)
    
  }
  useEffect(() => {
    getPassword()
    
    
  },[])
  
  // savepassword
  const savePassword = async ()=>{  
    if( form.username.length > 4 && form.password.length >6){

      // if any such id exist delete

       await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id: form.id })})

      setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
      await fetch("http://localhost:3000/", {method: "POST", headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ ...form, id: uuidv4() })})
      // localStorage.setItem("passwords",JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
      // console.log([...passwordArray, form ])
      setform({ site: "",username: "", password:""})
    }
  }

  // delete password
  const deletePassword = async (id)=>{  
    console.log("deleteing password with id",id)
    let c= confirm("Do you really wants to delet this password")
    if(c){
      setPasswordArray(passwordArray.filter(items=>items.id!==id))
      // localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(items=>items.id!==id)))
      let res = await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ id })})

    }
    
    
  }

  // edit
  const editpassword =(id)=>{  
    // console.log("edit password with id",id)
    setform({...passwordArray.filter(i=>i.id===id)[0], id:id})
    setPasswordArray(passwordArray.filter(items=>items.id!==id))
    
  }
  // show password in password section
  const ref = useRef()
  const passwordref= useRef()
  const showPassword = () =>{
    
    passwordref.current.type = "text"
    console.log(ref.current.src)
    if (ref.current.src.includes("/ioc.png")){
        passwordref.current.type = "text"
        ref.current.src ="/io.png"
    }
    else{
      ref.current.src ="/ioc.png"
      passwordref.current.type = "password"
    }
  }

  const handleChange = (e)=>{
      setform({...form, [e.target.name]:e.target.value})
  }
  return (
    <>
    
      <div className='text-center flex flex-col' >
        <div className='flex gap-10 bg-indigo-500 m-3 p-2 rounded-xl items-center'>
          <img className='w-10' src='notlogo.png'></img>
          <h1 className='text-white text-2xl font-bold'>PassKey</h1>
        </div>

        <div className='flex sm:flex-row flex-col'>
            {/* Form */}
            <div className='flex justify-center flex-col  w-full p-8 py-8 gap-4 basis-2/5'>
                 <h1 className='text-white text-2xl font-bold'>Add New Password</h1>
                  <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border bg-black text-white border-indigo-500 w-full p-4 py-1' type="text"  name="site" id="" />
                  <input value={form.username} onChange={handleChange} placeholder='Enter Username >5' className='rounded-full bg-black text-white border border-indigo-500 w-full p-4 py-1' type="text"  name="username" id="" />
                  <div className='relative'>
                    <input ref={passwordref} value={form.password} onChange={handleChange} placeholder='Enter Password>6' className='rounded-full bg-black text-white border border-indigo-500 w-full p-4 py-1' type="password"  name="password" id="" />
                    <span className='absolute right-2 top-1 cursor-pointer' onClick={showPassword}>
                      <img ref={ref} className='p-1' width={30} src="/io.png" alt="" />
                    </span>
                  </div>
                

                <div className='flex justify-center'>
                  <button onClick={savePassword} className='flex item-center bg-indigo-400 hover:bg-indigo-600 rounded-full px-4 py-2 gap-2 w-fit'>
                    <lord-icon
                      src="https://cdn.lordicon.com/jgnvfzqg.json"
                      trigger="hover">
                      </lord-icon>
                      save password
                  </button>
              </div>
            </div>
 

            {/* Table */}
            <div className='password sm:p-8 p-2 w-auto basis-3/5'>
              <h2 className='text-white font-bold text-2xl py-4'>Your Password</h2>
              {passwordArray.length === 0 && <div className='text-white'>No Password to show</div>}
              {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                <thead className='bg-gray-900 text-white '>
                  <tr>
                    <th className='py-2'>Website</th>
                    <th className='py-2'>Username</th>
                    <th className='py-2'>Password</th>
                    <th className='py-2'></th>
                  </tr>
                </thead>
                <tbody className='bg-gray-200 '>
                {passwordArray.map((items, index)=>{
                  return <tr key={index}>
                    <td className='text-center sm:w-32 w-8 py-2 '><a href={items.site} target='_blank'>{items.site}</a></td>
                    <td className='text-center w-32 py-2'>{items.username}</td>
                    <td className='text-center w-32 py-2'>{"*".repeat(items.password.length)}</td>
                    <td className='text-center w-1 py-2 px-4 '>
                    <samp onClick={()=>{editpassword(items.id)}}>
                    <lord-icon
                          src="https://cdn.lordicon.com/wuvorxbv.json"
                          trigger="hover"
                          style={{"width":"25px","height":"25px"}}>
                      </lord-icon>
                    </samp>
                    <samp className='ml-4' onClick={()=>{deletePassword(items.id)}}>
                    <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{"width":"25px","height":"25px"}}>
                    </lord-icon>
                    </samp>
                    </td>
                  </tr>
                })}
                </tbody>
              </table>}
              </div>
            </div>
        
        
      
          

      
    </div>

    </>
    
    
  )
}

export default Manager