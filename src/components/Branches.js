import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import AuthContext from './contexts/AuthContext'
const Branches = () => {
  const navigates = useNavigate()
  const [branches, setbranches] = useState([])
  const Auth = useContext(AuthContext)
  
  useEffect(() => {
    async function fetchData() {
      const accessToken = 'Bearer ' + Auth["auth"]["access_token"]
      try {
        const response = await axios.get('http://119.8.167.126:90/api/BranchReps', {headers:{ 'Authorization': accessToken }})
        setbranches(response?.data)
      } catch (error) {
        alert("Youre not Authorized")
        navigates("/")
      }
      }
      fetchData();
    });
    const detailsHandler = (e) => {
      if(e.target.value){
        navigates(`/branch/${e.target.value}`)
      }
      
    }
  return (
    <>
      <div className="relative">
        <Navbar />
        {/* Header */}
        <div
            className="absolute top-0 w-full h-full bg-gray-900"
            
          ></div>
        <div className="relative bg-gray-900 md:pt-32 pb-32 pt-12">
          
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full px-4">
              <div className="relative flex flex-col min-w-0 break-words text-white bg-gray-600 bg-opacity-75 w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        Branches
                      </h3>
                    </div>
                    
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Branch ID
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Branch Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Last Sync on
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {branches.map((Datax, index) => (
                      
                      <tr
                        key={index}
                      >
                        {Datax.title}
                          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>{Datax.BranchID}</td>
                          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>{Datax.BranchName}</td>
                          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>{Datax.LastSync}</td>
                          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'><button className="bg-pink-600 text-white-700 active:bg-pallete-900 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              style={{ transition: "all .15s ease" }}
                              value={Datax.BranchNbr}
                              onClick={detailsHandler}
                             >View Details</button>
                             </td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Branches