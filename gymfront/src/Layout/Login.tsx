import { UserCredential } from 'firebase/auth';
import React, { useState } from 'react'

interface LoginProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    loginEmailPassword: any;
}

const Login = ({ email, setEmail, password, setPassword, loginEmailPassword} : LoginProps ) => {

    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    function handleSubmit() {
        setEmail(input.email);
        setPassword(input.password);

        loginEmailPassword()
    }

    // let tempEmail
    // let tempPass

    // type State = {
    //     text: string;
    //   };
    //   class App extends React.Component<Props, State> {
    //     state = {
    //       text: "",
    //     };
    //   }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        console.log(`Email: ${input.email} Password: ${input.password}`)
    }

  return (
    <div className='loginPage'>
        <div className='loginForm'>
            <img src="" alt="" />
            <h1>Login</h1>
            <form>
                <label>E-mail
                    <input 
                        type="text" 
                        value={input.email}
                        name="email"
                        onChange={handleChange}
                    />
                </label>
                <label>Password
                    <input
                        type="password"
                        value={input.password}
                        name='password'
                        onChange={handleChange}
                    />
                </label>
                <button
                    type='button'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>

        <div className='signinForm'>
            <img src="" alt="" />
            <h1>Signin</h1>
            <label>E-mail
                <input type="text" />
            </label>
            <label>Password
                <input type="password" />
            </label>
            <button type="submit">Signin</button>
        </div>
    </div>
  )
}

export default Login