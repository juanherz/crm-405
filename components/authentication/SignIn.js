import {Auth} from "aws-amplify"
import Input from "./Input"

export default function SignIn({
    onChange, setUiState, signIn
}) {
    return (
        <div>
            <p className='text-3xl font-black'>Iniciar sesión</p>
            <div className='mt-10'>
                <label>Correo electrónico</label>
                <Input onChange={onChange} name='email' type='email' required placeholder='Correo electrónico'/>
            </div>
            <div className='mt-4'>
                <label>Contraseña</label>
                <Input onChange={onChange} name='password' type='password' required placeholder='Contraseña'/>
            </div>
            <button
                onClick={signIn}
                className='text-white w-full mt-6 bg-pink-600 p-3 rounded'
            >Iniciar sesión</button>
            <p className='mt-12 text-sm font-light'>
                ¿Aún no tienes una cuenta?
                <span
                    onClick={() => setUiState('signUp')}
                    role='button'
                    className='cursor-pointer text-pink-600'
                > Regístrate aquí.</span>
            </p>
            <p className='mt-12 text-sm font-light'>
                <span
                    onClick={() => setUiState('forgotPassword')}
                    role='button'
                    className='cursor-pointer text-pink-600'
                >¿Olvidaste tu contraseña?</span>
            </p>
        </div>
    )
}