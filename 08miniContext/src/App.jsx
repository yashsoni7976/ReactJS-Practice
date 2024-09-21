import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {
  return (
    <>
      console.log("Yash SOni")
      < UserContextProvider >
        <Login />
        <Profile />
      </ UserContextProvider>
    </>
  )
}

export default App
