import {Auth} from "aws-amplify"
import Input from "./Input"


export default function ForgotPasswordSubmit({
    onChange, forgotPasswordSubmit
}) {
    return (
        <div>
            <p className='text-3xl font-black'>Confirmación de nueva contraseña</p>
            <div className='mt-10'>
                <label>Código de confirmación</label>
                <Input onChange={onChange} name='authCode'/>
            </div>
            <div className='mt-10'>
                <label>Ingrese su nueva contraseña</label>
                <Input onChange={onChange} name='password' type='password'/>
            </div>
            <button
                onClick={forgotPasswordSubmit}
                className='text-white w-full mt-6 bg-pink-600 p-3 rounded'
            >Confirmar</button>
        </div>
    )
}