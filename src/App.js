import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from './components/contexts/AuthContext';
import bgImage from './img/bg.jpg'

function App() {
  const { setAuth } = useContext(AuthContext)
  const navigates = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [successMsg, setsuccessMsg] = useState('')
  const [ErrMsg, setErrMsg] = useState('')

  useEffect(() => {
    setErrMsg('')
    setsuccessMsg('')
  }, [username, password])
  

  const submitHandler = async (e) =>{
    
    e.preventDefault();
    const dataReady = JSON.stringify({username, password})
    // 
    try {
      const response = await axios.post("http://119.8.167.126:90/api/auth/Login", dataReady, {headers: {'Content-Type': 'application/json'}})
      setsuccessMsg('Login successfully')
      
      const access_token = response?.data?.token
      setAuth({access_token})
      console.log({access_token})
      navigates('/branch')
      
    } catch (err) {
      console.log(err.response.status)
      setErrMsg('Invalid Username or Password')
    } 
    
  }
  return (
    <div className="App">
      <main>
        <section className="absolute w-full h-full">
        <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage:
                {bgImage},
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div>

          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in
                      </h6>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                    <p className={ErrMsg ? 'text-red-800 text-sm font-bold' : 'hidden'}> {ErrMsg}</p>
                    <p className={successMsg ? 'text-green-800 text-sm font-bold' : 'hidden'}> {successMsg}</p>
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    
                    <form onSubmit={submitHandler}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Username"
                          style={{ transition: "all .15s ease" }}
                          value={username}
                          onChange={(e)=>setUsername(e.target.value)}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
