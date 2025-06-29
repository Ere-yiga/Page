import "./Header.css";
import ni from "./assets/ni.png";
function Header(){
    return(
        <>
            <header>
                <div className="logo">
                    <img src={ni} className="ni" alt=""/>
                    <p>Shiii</p>
                </div>

                <nav>
                    <ul>
                        <li>About Us</li>
                        <li>Reviews</li>
                        <li>Trainers</li>
                        <li>Classes</li>
                    </ul>
                </nav>
            </header>
        </>
        
    )
}

export default Header;