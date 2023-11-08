
import { Card } from "@/components/card"
import { listaProdutos } from "@/components/listaProdutos"
import './page.scss'

export default function Marvel() {

    return (
        <main>
            <h2>Marvel</h2>
            <div>
                {
                    listaProdutos.map((prod) => {
                        if (prod.cat === 'Marvel') {
                            return (
                                <Card
                                    key={prod.id}
                                    img={prod.img}
                                    title={prod.title}
                                    price={prod.price}
                                    type={prod.type}
                                    desc={prod.desc}
                                    cat={prod.cat}>
                                </Card>
                            );
                        }
                    })
                }
            </div>
            <div className="tabela">
                <table border={3}>
                    <thead>
                        <tr>
                            <th colSpan="4">Tabela de Preço - Coleção Clássicos Marvel</th>
                        </tr>
                        <tr>
                            <th>Vol.1 - Vol.50</th>
                            <th>Vol.51 - Vol.100</th>
                            <th>Vol.1001 - Vol.150</th>
                            <th>Box coleção completa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>24.99</td>
                            <td>29.99</td>
                            <td>44.99</td>
                            <td>3739.99</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tabela">
                <table border={3}>
                    <thead>
                        <tr>
                            <th colSpan="3">Tabela de Preço - Coleção X-MEN Premium</th>
                        </tr>
                        <tr>
                            <th>Vol.1 - Vol.10</th>
                            <th>Vol.11 - Vol.17</th>
                            <th>Box coleção completa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>22.90</td>
                            <td>24.90</td>
                            <td>370.90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}