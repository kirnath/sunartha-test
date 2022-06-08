import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import AuthContext from './contexts/AuthContext'
const BranchDetails = () => {
  const branchId = useParams().Id
  const [branchDetails, setbranchDetails] = useState([])
  const Auth = useContext(AuthContext)
  useEffect(() => {
    async function fetchData() {
      const accessToken = 'Bearer ' + Auth["auth"]["access_token"]
      try {
        const response = await axios.get('http://119.8.167.126:90/api/BranchReps', {headers:{ 'Authorization': accessToken }})
        setbranchDetails(filterData(response?.data)[0].BranchDetails);
      } catch (error) {
        alert("Youre not Authorized")
      }
      
      }
      fetchData();
      
    }, [branchId]);
  
    function filterData(data) {
      return data.filter((x) => (x.BranchNbr === branchId));
    }
  
    console.log(branchDetails)
  return (
    <>
      <div className="relative w-full">
        <Navbar />
        {/* Header */}
        <div
            className="absolute top-0 w-full h-full bg-gray-900"
            
          >
            
          </div>
        <div className="relative bg-gray-900 md:pt-32 pb-32 pt-0">
          
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
                        Branches Details
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
                          Access Role
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Account Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Legal Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Address
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Attention
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Screen No
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Tax ID
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        {branchDetails.AccessRole}
                      </td>
                      <td>
                        {branchDetails.AccountName}
                      </td>
                      <td>
                      {branchDetails.LegalName}
                      <p className='text-sm'>{branchDetails.Web}</p>
                      </td>
                      <td>
                        {branchDetails.AddressLine1}
                        <p>{branchDetails.City}, {branchDetails.State}, {branchDetails.Country}</p>
                      </td>
                      <td>
                        {branchDetails.Attention}
                        <p className='text-sm lowercase'>{branchDetails.Email}</p>
                      </td>
                      <td>
                      {branchDetails.ScreenNo}
                      </td>
                      <td>
                      {branchDetails.TaxRegistrationID}
                      </td>
                    </tr>
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

export default BranchDetails