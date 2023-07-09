import React, {Fragment} from 'react'
import {Route, Routes} from "react-router-dom"

import Navi from "./components/Navi/Navi"
import StartPage from "./pages/StartPage/StartPage"
import Dashboard from "./pages/Dashboard/Dashboard"
import SignIn from "./pages/Auth/SignIn/SignIn"
import SignUp from "./pages/Auth/SignUp/SignUp"

function App() {
  return (
    <Fragment>
      <Navi />

      <Routes>
          <Route element={<StartPage />} path={'/'} />
          <Route element={<Dashboard />} path={'/dashboard'} />
          <Route element={<SignIn />} path={'/in'} />
          <Route element={<SignUp />} path={'/up'} />
      </Routes>
    </Fragment>
  )
}

export default App