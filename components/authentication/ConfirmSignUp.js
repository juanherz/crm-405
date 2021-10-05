import {Auth} from "aws-amplify"
import Input from "./Input"

export default function ConfirmSignUp({
    onChange, setUiState, confirmSignUp
}) {
    return (
        <div>
            <p className='text-3xl font-black'>Confirma tu registro</p>
            <div className='mt-10'>
                <label>Código de confirmación enviado a tu correo</label>
                <Input onChange={onChange} name='authCode'/>
            </div>
            <button
                onClick={confirmSignUp}
                className='text-white w-full mt-6 bg-pink-600 p-3 rounded'
            >Confirmar registro</button>
            <button
                onClick={() => setUiState('signIn')}
                className='text-sm mt-6 text-pink-600'
            >Cancelar</button>

        </div>
    )
}