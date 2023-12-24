"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { useRouter } from "next/navigation";

const EditUser = ({userData}) => {

    const [noteToEdit, setNoteToEdit] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const id = userData

    const getUser = () => {
      if (id) {
        const fetchData = async () => {
          try {
            const res = await axios.get(`/api/user/${id}`);
            setNoteToEdit(res.data);
            setIsLoading(false); // 数据加载完成，设置 isLoading 为 false
          } catch (error) {
            // 处理请求错误
            console.error('Error fetching user:', error);
            
          }
        };
    
        setIsLoading(true); // 开始加载数据，设置 isLoading 为 true
        fetchData();
      }
    };
    
    

    const handleEditSubmit = (e) => {
      e.preventDefault(); 
      axios
      .patch(`/api/user/${userData.id}`, noteToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.refresh();
      });
      
    };

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setNoteToEdit((prevState) => ({ ...prevState, [name]: value }));
    };

    useEffect(() => {
      getUser();
    }, [id]);

  return (
    <div>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
     
      
      <form onSubmit={handleEditSubmit} className='w-full bg-white border border-zinc-200 dark:border-zinc-600 rounded-md p-8  dark:bg-zinc-800'>
            <input type="text" value={noteToEdit.name || ''}  className='bg-black'/>

        <div className='flex flex-row w-full'>
          <div className='w-2/3 flex flex-row items-center'>
            <img src={noteToEdit.image} className='rounded-full' width="70px" height="70px" />
            <div>
       
          <div class="ml-6">
          <label for="name" class="block  text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" value={noteToEdit.name || ''} onChange={handleChange} id="name" class=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-xl focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full p-2.5  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
          </div>
        </div>
          </div>
          <div className='w-1/3 flex justify-end'><button type="submit" className='bg-primary p-4 text-white rounded-md'>Save</button></div>
        </div>

        <hr className='my-8 border border-zinc-700' />
      
       <div>
        <label for="email" class="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <div class="flex">
            <span class="inline-flex items-center px-4 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-600 dark:text-zinc-400 dark:border-zinc-600">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </span>
            <input type="text" value={noteToEdit.email || ''} onChange={handleChange} id="email" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block text-xl flex-1 min-w-0 w-full  p-2.5  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
          </div>
        </div>
        
        <div>
        <label for="homepage" class="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">HomePage</label>
          <div class="flex">
            <span class="inline-flex items-center px-4 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-600 dark:text-zinc-400 dark:border-zinc-600">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </span>
            <input type="text" value={noteToEdit.homepage || ''} onChange={handleChange} id="homepage" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full p-2.5 text-lg dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
          </div>
        </div>
        
        <div>
        <label for="aboutyou" class="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">About You</label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-600 dark:text-zinc-400 dark:border-zinc-600">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </span>
            <textarea rows="4" type="text" value={noteToEdit.aboutyou || ''} onChange={handleChange} id="aboutyou" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
          </div>
        </div>
       
        <div>
        <label for="githubname" class="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">Github Name</label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-600 dark:text-zinc-400 dark:border-zinc-600">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </span>
            <input type="text" value={noteToEdit.githubname || ''} onChange={handleChange} id="githubname" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
          </div>
        </div>
       
        <div>
        <label for="twittername" class="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">Twitter Name</label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-600 dark:text-zinc-400 dark:border-zinc-600">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </span>
            <input type="text" value={noteToEdit.twittername || ''} onChange={handleChange} id="twittername" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
          </div>
        </div>
        
        {JSON.stringify(noteToEdit)}
           
  
    </form>
      )}
      </div>
  
  )
}

export default EditUser