import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx"
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';
import Error from './components/error/Error.jsx';
import Favorites from "./components/favorites/Favorites.jsx"


function App() {
   const [characters, setCharacters] = useState([]); //Estado inicial de character
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   //Usando Asyncwait
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data; //data= {access: false}
         setAccess(data); //access = true o false
         access && navigate('/home');
      } catch (error) {
         window.alert("Wrong email or password!");
      }
   }

   const handleLogout = () => {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');  //Haciendo || tengo que ingresar 2 veces para entrar a /home
   }, [access, navigate]);
   /*
   useEffect esta mirando a Access por medio del arreglo de dependencia [access], ósea esta atento que si Access sea false o true. 
   Y hace un navigate a barra. Quiere decir que, mientras que Access sea false quédate en barra (prohíbe la entrada) incluso cuando cambiamos el url me regresa a / 
   porque todo el tiempo se pregunta que vale access.
   */

   //Usando Asyncwait
   async function onSearch(id) { // 2 = id que ingrese el usuario => { id : 2}
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
          //console.log(data); objeto con los datos del personaje
         if (!characters.some(character => character.id === data.id)) {
            if (data.name) {
               setCharacters(characters => [...characters, data]); //crea el nombre de un arreglo, hace la copia y le agrega al arreglo un personaje nuevo pasado por id
            } else {
               window.alert('There are no characters with this ID!');
            }
         } else {
            window.alert('There is already a character with this ID!');
         }
      } catch (error) { //CATCH CUANDO SE INGRESA UN PERSONAJE QUE NO ES PERMITIDO
         window.alert('The character with the entered ID does not exist!');
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter( (char) => char.id !== id)) //me quedo con aquellos personajes con id distinto del id que me pasan por parametro, se lo paso a Card a traves de Cards
   }

   //Renderizado condicional: uso el hook useLocation de react-router-dom, para hacer el renderizado condicional, para que Nav se muestre siempre y cuando no estemos en la ruta /.
   const location = useLocation();
   // console.log(location); //es un objeto, una de la propiedades es pathname, el cual tiene la ruta en donde esa parado el usuario
  
   return (
      <div className='App'>
         {
            location.pathname !== "/"
            ? <Nav onSearch={onSearch} handleLogout={handleLogout}/>
            : null
         }
         {/* <hr /> */}
         <Routes>
            <Route exact path="/" element={<Form login={login} />} />
            <Route exact path="/home" element={
               <Cards characters={characters} onClose={onClose} />
            }/>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/detail/:id" element={<Detail />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Error />}/>
         </Routes>      
      </div>
   );
}
//Exact path es como un igual estricto, asi verificamos que sea igual a lo que le indicamos
//Al boton random, le tengo que pasar los caracteres por prop, mediante la funcion onSearch que consume la API

export default App;
