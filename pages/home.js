import {CompleteTable} from '../components/table/CompleteTable'
import {CompleteTable2} from '../components/table/CompleteTable2'
import { Auth } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar/Navbar'
import '../configureAmplify'

export default function Home(){

    // const [clientes, setClientes] = useState([])
    // const fetchClientes = async () => {
    //     const response = await fetch('/api/clientes')
    //     const data = await response.json()
    //     setClientes(data)
    // }
    // fetchClientes()
    // console.log(clientes)


    const [user, setUser] = useState(null)
    const router = useRouter()
    useEffect(() => {
        checkUser()
    }, [])
    async function checkUser() {
        try {
            const user = await Auth.currentAuthenticatedUser()
            setUser(user)
        } catch(err){ 
            setUser(null)
            router.push('/profile')
        }
    }
    if(!user) return null
    return (
        <>
            <div>
                <Navbar />
                <CompleteTable2/> 
            </div>
        </>
    )
}
