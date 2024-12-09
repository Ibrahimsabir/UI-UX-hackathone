import { ProductDetailComponent } from "../components/productdetail/productdetail";
import Customer from "../components/productdetail/productreviews";
import YouMayLike from "../components/productdetail/productyoulike";

export default function ProductDetail() {
  return (
  <div className="max-w-[1440px] max-h-full flex-grow justify-start items-center">
   <ProductDetailComponent/>
   <Customer/>
   <YouMayLike/>
  </div>
  );
}
