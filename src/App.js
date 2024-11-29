
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Profil from "./components/content/Profil";
import styleCSS from "./style.css";


function App() {
  return (
    <div>
        <Header/>,
        <main>
        <Navigation/>
        <Profil/>
        </main>,
      
        <Footer/>
    </div>
  )

}

export default App;
