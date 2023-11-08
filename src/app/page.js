
import { Card } from "@/components/card"
import { listaProdutos } from "@/components/listaProdutos"

export default function Home() {
  return (
    <main>
      <h1>PRODUTOS EM PROMOÇÃOS</h1>
      <div>
        {
          listaProdutos.map((prod) => {
            if (prod.id === 1 || prod.id === 5 || prod.id === 11 || prod.id === 6) {
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
