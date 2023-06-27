import {BrowserRouter} from "react-router-dom"
import { Navigation } from "./router/Navigation"
import { supabase } from "./supabase"


console.log(supabase)

const App = () => {
  return (
   <BrowserRouter>
    <Navigation/>
   </BrowserRouter>
  )
}

export default App