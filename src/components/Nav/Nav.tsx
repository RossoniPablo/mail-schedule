import { Button } from "components/Button/Button";
import { NavLogo } from "./NavLogo";
import { Link } from "react-router-dom";
import { MenuMobile } from "components/Icon/menuMobile";
import { NavMobileItem } from "./NavMobileItem";
import { useNavMobileContext } from "contexts";

export function Nav() {
  const { isVisible, setIsVisible } = useNavMobileContext()

  return (
    <nav className="w-full h-20 bg-gray-100 border-b border-gray-300 ">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between px-4">
        <NavLogo />

        <div className="hidden lg:flex items-center gap-4">
          {/*  Passando rota para o botão */}
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>

          <Link to="/contatos">
            <button>Contatos</button>
          </Link>

          <Link to="/emails">
            <button>E-mails</button>
          </Link>

          <Link to="/escrever-agora">
            <Button variant="primary">Escrever agora</Button>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button onClick={() => setIsVisible(prev => !prev)}>
            {isVisible ? (
              <span className="font-bold text-2xl">X</span>
            ) : (
              <MenuMobile />
            )}

          </Button>
        </div>
      </div>

      {isVisible && (
        <div className="w-full h-[calc(100vh-81x)] bg-white border-2 fixed top-20 left-0 ">
          <div className="flex flex-col items-stretch justify-center">
            <NavMobileItem to="/dashboard">
              Dashboard
            </NavMobileItem>


            <NavMobileItem to="/contatos">
              Contatos
            </NavMobileItem>



            <NavMobileItem to="/emails">
              E-mails
            </NavMobileItem>

            <NavMobileItem variant="primary" to="/escrever-agora">Escrever agora</NavMobileItem>


          </div>
        </div>
      )}
    </nav >

  )
}