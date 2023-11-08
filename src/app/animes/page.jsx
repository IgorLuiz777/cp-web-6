
import { Card } from "@/components/card"
import { listaProdutos } from "@/components/listaProdutos"

export default function Animes() {


    return(
        <main>
            <h2>Produtos de Animes</h2>
            <div>
            {
                    listaProdutos.map((prod) => {
                        if (prod.cat === 'Anime') {
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
        </main>
    )
}