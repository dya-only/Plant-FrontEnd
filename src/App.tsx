import {Route, Routes} from "react-router-dom"

import StartPage from "./pages/StartPage/StartPage"
import Dashboard from "./pages/Dashboard/Dashboard"
import SignIn from "./pages/Auth/SignIn/SignIn"
import SignUp from "./pages/Auth/SignUp/SignUp"

function App() {
  return (
    <Routes>
      <Route element={<StartPage/>} path={'/'}/>
      <Route element={<Dashboard/>} path={'/dashboard'}/>
      <Route element={<SignIn/>} path={'/in'}/>
      <Route element={<SignUp/>} path={'/up'}/>
    </Routes>
  )
}

export default App