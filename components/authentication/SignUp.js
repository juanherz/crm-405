import {Auth} from "aws-amplify"
import Input from "./Input"

export default function SignUp({
    onChange, setUiState, signUp
}) {
    return (
        <div>
            <p className='text-3xl font-black'>Registrarte</p>
            <div className='mt-10'>
                <label>Correo electrónico</label>
                <Input onChange={onChange} name='email' type='email' required placeholder='Correo electrónico'/>
            </div>
            <div className='mt-4'>
                <label>Contraseña</label>
                <Input onChange={onChange} name='password' type='password' required placeholder='Contraseña'/>
            </div>
            <button
                onClick={signUp}
                className='text-white w-full mt-6 bg-green-600 p-3 rounded'
            >Registrarte</button>
            <p className='mt-12 text-sm font-light'>
                ¿Ya tienes una cuenta?
                <span
                    onClick={() => setUiState('signIn')}
                    role='button'
                    className='cursor-pointer text-pink-600'
                > Inicia sesión aquí.</span>
            </p>
        </div>
    )
}