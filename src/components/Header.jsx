import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const matchRoute = (route) => {
        if(route === location.pathname){
            console.log("here");
            return true;
        }
    };
    return (
        <div className=" bg-white shadow-sm border-b sticky top-0 z-50">
            <header className=" flex justify-between items-center px-3 mx-auto max-w-6xl">
                <div>
                    <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="realtor.com" className=" h-5 cursor-pointer" onClick={() => navigate("/")} />
                </div>
                <div>
                    <ul className=" flex space-x-10">
                        <li className={` cursor-pointer py-3 font-semibold text-sm ${matchRoute('/')? " text-black border-b-[3px] border-b-red-500": " text-gray-400 border-b-[3px] border-b-transparent"}`} onClick={ () => navigate("/") }>Home</li>
                        <li className={` cursor-pointer py-3 font-semibold text-sm ${matchRoute("/offers")? " text-black border-b-[3px] border-b-red-500": " text-gray-400 border-b-[3px] border-b-transparent"}`} onClick={ () => navigate("/offers") }>Offers</li>
                        <li className={` cursor-pointer py-3 font-semibold text-sm ${matchRoute("/sign-in")? " text-black border-b-[3px] border-b-red-500": " text-gray-400 border-b-[3px] border-b-transparent"}`} onClick={ () => navigate("/sign-in") }>Sign In</li>
                    </ul>
                </div>
            </header>
        </div>
    )
};

export default Header;