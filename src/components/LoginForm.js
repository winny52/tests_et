import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setToken,setUser }) {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { value, name } = e.target;
    setLoginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      method: 'POST',
      url: 'https://expense-tracker-7yjh.onrender.com//login',
      data: {
        email: loginForm.email,
        password: loginForm.password,
      },
    })
      .then((response) => {
        const { access_token } = response.data;
        setToken(access_token);
        localStorage.setItem('email', loginForm.email);
        alert('Login Successful');

        // After successful login, fetch user information
        axios
          .get(`https://expense-tracker-7yjh.onrender.com//profile/${loginForm.email}`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          })
          .then((userInfoResponse) => {
            const username=userInfoResponse.data.username
            console.log(username)
            setUser(username)
            console.log('User Information:', userInfoResponse.data);
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });

        navigate('/homepage');
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          if (error.response.status === 401) {
            alert('Invalid credentials');
          }
        }
      });
  }

    return (
      <div className="h-screen w-full bg-blue-200 flex items-center pt-9rem">
        <form className="bg-blue-800 w-25rem min-h-20rem mx-auto p-5 flex flex-col gap-1rem rounded-lg" onSubmit={handleSubmit}>
            <h1 className="text-3xl text-white">Login</h1>
            <h4 className="mt-4 mb-4 font-bold text-white">Please login to keep track of your expenses</h4>
            <div className="flex flex-col gap-1rem">
                <label htmlFor="email" className="block text-blue-200 mb-4">Email</label>
                <input className="mb-4 h-10 p-2 bg-lightblue text-darkblue outline-none rounded" value={loginForm.email} onChange={handleChange} text={loginForm.email} type="text" name="email" id="email" />
            </div>
            <div className="flex flex-col gap-1rem">
                <label htmlFor="password" className="block text-blue-200 mb-4">Password</label>
                <input className=" mb-4 h-10 p-2 bg-lightblue text-darkblue outline-none rounded" value={loginForm.password} onChange={handleChange} text={loginForm.password} type="password" name="password" id="password" />
            </div>
            <input className="p-2 w-40 mt-2rem mx-auto font-bold text-darkblue rounded bg-blue-200 hover:bg-blue-400" type="submit" value="Log In" />
            <p className="mx-auto my-3 font-semibold text-black">Don't have an account? <Link to ={"/signup"} className="text-blue-200 rounded">Sign up</Link></p>
            
        </form>

      </div>
    );
  }
  
  export default Login;
  