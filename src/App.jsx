import { useState } from 'react'
import './App.css'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { SignIn } from '@clerk/react'



function App() {
 return (
   <div className="App">
     <h1>Hello, World!</h1>
      <h2>Welcome back!</h2>
      <h4>Sign in to access your account and manage your profile.</h4>
      <Show when="signed-in">
        <SignIn fallbackRedirectUrl="/dashboard"
        fallRedirectUrl="/dashboard"/ >
        <UserButton />
      </Show>
      <Show when="signed-out">
        <SignIn />
      </Show>
   </div>
 )
}

export default App