import {Auth} from "aws-amplify"
import Input from "./Input"

export default function ForgotPassword({
    onChange, setUiState, forgotPassword
}) {
    return (
        <div>
            <p className='text-3xl font-black'>¿Olvidaste tu contraseña?</p>
            <div className='mt-10'>
                <label> Ingresa tu correo y recibirás un código para cambiarla</label>
                <Input onChange={onChange} name='email' type='email' required placeholder='Correo electrónico'/>
            </div>
            <button
                onClick={forgotPassword}
                className='text-white w-full mt-6 bg-pink-600 p-3 rounded'
            >Aceptar</button>
            <button
                onClick={() => setUiState('signIn')}
                className='text-sm mt-6 text-pink-600'
            >Cancelar</button>
        </div>
    )
}