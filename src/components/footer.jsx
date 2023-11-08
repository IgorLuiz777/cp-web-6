
import './global.scss'

export default function Footer() {

    return(
        <footer>
            <div className="contato">
                <ul>
                    <li>
                        <a href="#"><img src="whats.png" alt="" width="25px" /> 11 3003-5393</a>
                    </li>
                    <li>
                        <a href="#"><img src="ouvi.png" alt="" width="25px" /> 0800-790-5354</a>
                    </li>
                    <li>
                        <a href="#"><img src="tel.png" alt="" width="25px" /> 3333-6797</a>
                    </li>
                    <li>
                        <a href="#"><img src="email.png" alt="" width="25px" /> ouvidoria@loja.com.br</a>
                    </li>
                </ul>
            </div>
            <div className="sobre">
                <ul>
                    <li>
                        <a href="#">Loja</a>
                    </li>
                    <li>
                        <a href="#">Notícias</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                </ul>
          </div>
      </footer>
    )
}