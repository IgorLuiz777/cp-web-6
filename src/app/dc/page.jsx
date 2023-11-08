
import { listaProdutos } from "@/components/ListaProdutos";
import { Card } from "@/components/card";

export default function Dc() {
    return (
        <main>
            <h2>Produtos Dc Comics</h2>
            <div>
                {
                    listaProdutos.map((prod) => {
                        if (prod.cat === 'Dc Comics') {
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
    );
}
