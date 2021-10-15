import './style.scss'
import logo from '../../assets/images/logo.png'

export default function Header() {
    return (

        <section className="navbar">
            <div className="navbar__img-container">
                <img src={logo} alt="Ilustração da logo" />
            </div>
            <div className="navbar__search-container">
                <form className="navbar__form">
                    <input
                        className="navbar__input"
                        type="text"
                        placeholder="Specify your taste"
                    />
                    <a className="navbar__link" href="http://">
                        Search
                    </a>
                </form>
            </div>
        </section>


    )
}