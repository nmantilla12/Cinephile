import { Outlet } from 'react-router-dom';
import Header from "./components/header/Header";

// 1. Borramos o comentamos el Footer porque el log indica que está ahí y quizás no exista aún
// import Footer from "./components/footer/Footer"; 

// 2. CAMBIO CLAVE: Cambiamos .css por .scss o borramos la línea si ya lo importas en main.scss
import "./App.scss"; 

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* El Outlet es donde se verán tus páginas como Landing */}
        <Outlet /> 
      </main>
      {/* <Footer /> */}
    </div>
  );
}