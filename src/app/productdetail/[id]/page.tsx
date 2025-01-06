import ProductsDetail from "../../components/productdetail/productcart";
import { ProductDetailComponent } from "../../components/productdetail/productcategory";
import Customer from "../../components/productdetail/productreviews";
import YouMayLike from "../../components/productdetail/productyoulike";
import { ProductsData } from "@/app/components/Allproductsdata/PruductData";
import { useParams } from "next/navigation";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  price: string;
  priceWas: string;
  color: string;
  aosDelay: number;
}
export default function ProductDetail() {
  return (
  <div className="max-w-[1440px] max-h-full flex-grow justify-start items-center">
   
   <ProductDetailComponent/>
   
   <Customer/>
   <YouMayLike/>
  </div>
  );
}
