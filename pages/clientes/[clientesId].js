import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'
import { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../../configureAmplify'
import axios from 'axios';

function DetallesCliente() {
    const router = useRouter()
    
    const [user, setUser] = useState(null)
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
    
    const {clientesId} = router.query
    const [clientes, setClientes] = useState([])
    useEffect(() => {
        axios.get(`../api/clientes/id/${clientesId}`)
            .then(res => {
            setClientes(res.data)
            })
            .catch(err => {
            console.log(err)
            })
    }, [])

    console.log(clientes)

    const [corridas, setCorridas] = useState([])
    useEffect(() => {
        axios.get(`../api/robot`)
            .then(res => {
            console.log(res)
            setCorridas(res.data)
            })
            .catch(err => {
            console.log(err)
            })
    }, [])

    


    if(!user) return null
    return (
        <>
            <div>
                <Navbar />
                <h1>Detalles sobre cliente con id {clientesId}</h1>

                <h2>Datos generales</h2>
                    <ol>
                        {
                            clientes.map(cliente => {
                                return (
                                    <>
                                        <li key={cliente.id}>Nombre: {cliente.nombre}</li>
                                        <li key={cliente.id}>Cuenta: {cliente.cuenta}</li>
                                        <li key={cliente.id}>Telefono 1: {cliente.telefono1}</li>
                                        <li key={cliente.id}>Telefono 2: {cliente.telefono2}</li>
                                        <li key={cliente.id}>Telefono 3: {cliente.telefono3}</li>
                                        <li key={cliente.id}>Whatsapp: {cliente.telefonowa}</li>
                                        <li key={cliente.id}>Status: {cliente.status}</li>
                                        <li key={cliente.id}>Fecha de modificación: {cliente.date_modified}</li>
                                    </>
                                )
                            })
                        }
                    </ol>
                        
            </div>
        </>
    )
}

export default DetallesCliente

// .then(() => {
//     const {cuenta} = clientes.find(cliente => cliente.id == {clientesId})
//     useEffect(() => {
//         axios.get(`../api/robot/${cuenta}`)
//             .then(res => {
//             console.log(res)
//             setCorridas(res.data)
//             })
//             .catch(err => {
//             console.log(err)
//             })
//     }, [])
// })