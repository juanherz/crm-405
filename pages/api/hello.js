import { withSSRContext } from "aws-amplify"

export default async (req, res) => {
  const {Auth} = withSSRContext({req})
  const user = await Auth.currentAuthenticatedUser()
  res.status(200).json({ name: user })
}
