import AuthLayout from "../components/AuthLayout";
import Link from "next/link";
import {RequiredSymbol} from "../components/Helper";
import {useState} from "react";

export default function Login(){

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })


    function handleInput(e){
        let {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        valiDateInput()
    }

    function valiDateInput(){
        let keys = Object.keys(formData);
        keys.forEach(inputNameAttr => {
            var element = document.querySelector(`input[name=${inputNameAttr}]`);
            if(formData[inputNameAttr] === ""){
               element.style.border = "1px solid red";
            }
            else{
                element.style.border = "1px solid var(--bs-info)";
            }
        })
    }


    return <AuthLayout title='Login'>
        <form onSubmit={handleSubmit}>
            <div className='form-group mb-3'>
                <label className='form-label'>Username <RequiredSymbol/></label>
                <input onChange={handleInput} type='text' name='username' value={formData.username} className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Password <RequiredSymbol/></label>
                <input onChange={handleInput} type='password' value={formData.password} name='password' className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <input type='checkbox' className='form-check-input' name='remember-me'/> <label className='form-check-label'>Remember Me</label>
            </div>
            <div className='form-group mb-3'>
                <input type='submit' className='btn btn-dark w-100' value='Login'/>
            </div>
            <Link href='register' className='nav-link text-center'>Create a account!</Link>
        </form>
    </AuthLayout>
}