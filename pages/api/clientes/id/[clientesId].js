import { sql_query } from "../../../../lib/db";
import { withSSRContext } from "aws-amplify"

const handler = async (req, res) => {
    try{
        const {Auth} = withSSRContext({req})
        const user = await Auth.currentAuthenticatedUser()
        const {clientesId} = req.query
        const results = await sql_query(`
            SELECT * FROM clientes WHERE clientes.id = ${clientesId}
        `)
        return res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
}

export default handler;