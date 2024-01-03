"use client"

import { useState, useEffect } from 'react'
import axios from "axios";
import { useRouter } from "next/navigation";

const EditUser = ({userData}) => {

    const [noteToEdit, setNoteToEdit] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const id = userData

    const getUser = () => {
      if (id) {
        const fetchData = async () => {
          try {
            const res = await axios.get(`/api/user/${id}`);
            setNoteToEdit(res.data);
            setIsLoading(false); 
          } catch (error) {
            console.error('Error fetching user:', error);
            
          }
        };
        fetchData();
        setIsLoading(true); 

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
     
      
      <form onSubmit={handleEditSubmit} className='w-full '>
        {JSON.stringify(noteToEdit)}
          

        <div className='flex flex-row w-full mt-12'>
          <div className='w-2/3 flex flex-row items-center'>
            <img src={noteToEdit.image} className='rounded-full' width="70px" height="70px" />
            <div>
       
          <div class="ml-6">
          <label for="name" class="block  text-sm font-medium text-gray-900 dark:text-zinc-500">Username</label>
         
                
                <input type="text" value={noteToEdit.name || ''} onChange={handleChange} id="name" name="name" className=" border pl-2 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-zinc-900/50 dark:border-zinc-700 bg-zinc-100 border-zinc-200  placeholder-zinc-500 dark:text-white text-black" placeholder="name@company.com" required="" />
         
           
          </div>
        </div>
          </div>
          <div className='w-1/3 flex justify-end'><button type="submit" className='bg-primary p-4 text-black rounded-md'>Save</button></div>
        </div>

        <hr className='my-8 border dark:border-zinc-700 border-zinc-200' />
      

        <label for="email" class="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          
          <div class="relative mb-6">
               
                <input type="text" value={noteToEdit.email || ''} onChange={handleChange} id="email" name="email" className=" border pl-2 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-zinc-900/50 dark:border-zinc-700 bg-zinc-100 border-zinc-200  placeholder-zinc-500 dark:text-white text-black" placeholder="name@company.com" required />
            </div>
        

        <label for="homepage" class="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">HomePage</label>
          
          <div class="relative mb-6">
               
                <input type="text" value={noteToEdit.homepage || ''} onChange={handleChange} name="homepage" id="homepage" className=" border pl-2 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-zinc-900/50 dark:border-zinc-700 bg-zinc-100 border-zinc-200  placeholder-zinc-500 dark:text-white text-black" placeholder="name@company.com" required />
            </div>
        

        <label for="aboutyou" class="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">About You</label>
         
          <div class="relative mb-6">
                
                <textarea rows="4" type="text" value={noteToEdit.aboutyou || ''} onChange={handleChange} name="aboutyou" id="aboutyou" className=" border pl-2 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-zinc-900/50 dark:border-zinc-700 bg-zinc-100 border-zinc-200  placeholder-zinc-500 dark:text-white text-black" placeholder="name@company.com" required />
            </div>

        <label for="githubname" class="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">Github Name</label>
          
          <div class="relative mb-6">
                
                <input type="text" value={noteToEdit.githubname || ''} onChange={handleChange} id="githubname" name="githubname" aboutyou className=" border pl-2 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-zinc-900/50 dark:border-zinc-700 bg-zinc-100 border-zinc-200  placeholder-zinc-500 dark:text-white text-black" placeholder="name@company.com" required />
            </div>
       

        <label for="twittername" class="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">Twitter Name</label>
         

          <div class="relative mb-6">
                
                <input type="text" value={noteToEdit.twittername || ''} onChange={handleChange} id="twittername" name="twittername" className=" border pl-2 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-zinc-900/50 dark:border-zinc-700 bg-zinc-100 border-zinc-200  placeholder-zinc-500 dark:text-white text-black" placeholder="name@company.com" required />
            </div>

        
        
           
  
    </form>
      )}
      </div>
  
  )
}

export default EditUser