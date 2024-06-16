import data from '@/utils/productData'
import OrderDetSec, {Iproduct} from './child/OrderDetSec';

const page = ({params}: {params: {id: string}}) => {

    const id = params.id;
    const product = data.find((i: Iproduct) => i.id.toString() === id)
    
  return (
    <main>
        {product && (
        <OrderDetSec
        id={product.id}
        key={product.id}
        name={product.name}
        img={product.img}
        price={product.price}
        offer={product.offer}
        stars={product.stars}
        category={product.category}
        />
    )}
    </main>
  )
};



export default page
