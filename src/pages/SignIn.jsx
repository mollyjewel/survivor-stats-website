/*
  Would be good to use this react google library in the future:
    https://github.com/anthonyjgrove/react-google-login
  But right now, it still uses the legacy google sign-in
*/
import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AuthService from "services/auth.service"

export default function GoogleSignin() {
  const [googleUser, setGoogleUser] = useState(undefined)

  useEffect(() => {
    const handleGoogleSignIn = (res) => {
      if (!res.clientId || !res.credential) return
      AuthService.auth(res.credential).then((res) => {
        const { user, token } = res.data
        // Save the JWT inside a cookie
        Cookie.set('token', token)
        if (user.role === 'admin') {
          Cookie.set('canEdit', 'true')
        } else {
          Cookie.remove('canEdit')
        }
        setGoogleUser(user.displayName)
      }).catch((err) => {
        throw new Error(err)
      })
    }

    const handleWindowLoad = () => {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogleSignIn
      })
      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      )
      window.google.accounts.id.prompt() // also display the One Tap dialog
    }

    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.addEventListener('load', function () {
      window.addEventListener('load', handleWindowLoad)
    })
    script.async = true
    script.defer = true
    script.id = "google-client-script"
    document.body.appendChild(script)
  }, [])

  return (
    <Container maxWidth="xl">
      <Box m={2}>
          {googleUser && <Alert severity="success">Logged in as {googleUser}</Alert>}
          <Box
            m={2}
            display="flex"
            alignItems="center"
            justifyContent="center">
              <div id="buttonDiv"></div>
          </Box>
      </Box>
    </Container>
  )
}
