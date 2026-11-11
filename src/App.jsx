import { Routes , Route } from "react-router"
import { Home } from "./components/Home"
import { Projects} from "./components/Projects"
import { Contact } from "./components/Contact"
import { Notfound } from "./components/Notfound"
import { Navbar } from "./components/Navbar"
export const App = () => {
  return (

    <>
    {/*etiqueta vacia*/}
   <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/Proyectos' element={<Projects />} />
        <Route path='/Contacto' element={<Contact />} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
        <Navbar / >
    </>
      
  )
}