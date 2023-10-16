import AuthLayout from "../components/AuthLayout";
import Link from "next/link";
import {RequiredSymbol} from "../components/Helper";

export default function Register(){
    return <AuthLayout title='Login'>
        <form>
            <div className='form-group mb-3'>
                <label className='form-label'>Full Name <RequiredSymbol/></label>
                <input type='text' name='name' className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Username <RequiredSymbol/></label>
                <input type='text' name='username' className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Password <RequiredSymbol/></label>
                <input type='password' name='password' className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Confirm Password <RequiredSymbol/></label>
                <input type='password' name='confirm-password' className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <input type='submit' className='btn btn-dark w-100' value='Login'/>
            </div>
            <Link href='/login' className='nav-link text-center'>Have an Account. Login!</Link>
        </form>
    </AuthLayout>
}