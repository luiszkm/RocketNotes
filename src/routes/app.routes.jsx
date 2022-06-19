import { Routes, Route} from 'react-router-dom'

import {Home} from '../pages/Home'
import {ProFile}  from '../pages/ProFile'
import {NoteCreate} from '../pages/NoteCreate'
import {Details} from '../pages/Details'


export function AppRoutes() {


  return (
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/profile' element = {<ProFile/>} />
      <Route path='/notecreate' element = {<NoteCreate/>} />
      <Route path='/details/:id' element = {<Details/>} />
    </Routes>
  )
}