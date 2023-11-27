import data from '@/utils/productData'
import OrderDetSec, {Iproduct} from './child/OrderDetSec';

<<<<<<< HEAD
=======
export interface Iproduct{
    id: number;
    img: string;
    name: string;
    price: number;
    offer: number;
    stars: number;
    category: string[];
    sale: boolean | undefined;
}

const page = () => {
    
    const router = useRouter();

    const params = useParams()

    const [productData, setProductData] = useState<Iproduct>({
        id: 0,
        img: "",
        name: "",
        price: 0,
        offer: 0,
        stars: 0,
        category: [],
        sale: true,
    })
>>>>>>> 4ea2ba25a5c3849f91eb194fe627ba6fb461b876

const page = ({params}: {params: {id: string}}) => {

    const id = params.id;
<<<<<<< HEAD
    const product = data.find((i: Iproduct) => i.id.toString() === id)
=======
    useEffect(() => {
        const id = params.id;
        const getProductData = products.filter((item) => item.id.toString()===id)[0]
        setProductData(getProductData)
    })
    // -----------------------------------------------
    const discountdot = (productData?.price / 100) * productData?.offer;
    const discountnotdot = Math.round(discountdot)
    const disPrice =productData?.price - discountnotdot;
    
    // --------------------------------------
    const [dropItems, setdropItems] = useState<number>(1);
    const handelQulity=(event: ChangeEvent<HTMLSelectElement>)=>{
        setdropItems(Number(event.target.value))
    }
    const itempriceTotl = productData?.price * dropItems;
    const discountTotal = discountnotdot*dropItems;
    const totalDisPrice = disPrice * dropItems;
    // -----------------------------------------------------------
>>>>>>> 4ea2ba25a5c3849f91eb194fe627ba6fb461b876
    
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
