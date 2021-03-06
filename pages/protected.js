import { Auth } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import '../configureAmplify'
import Navbar from '../components/navbar/Navbar'

export default function Protected(){
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
        <div>
            <Navbar />
            <p>Protected</p>
        </div>
    )
}