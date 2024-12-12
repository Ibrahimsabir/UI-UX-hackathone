import { ProductDetailComponent } from "../components/productdetail/productcategory";
import ResponsiveGrid1 from "../components/productdetail/productpics";
import Customer from "../components/productdetail/productreviews";
import YouMayLike from "../components/productdetail/productyoulike";

export default function ProductDetail() {
  return (
  <div className="max-w-[1440px] max-h-full flex-grow justify-start items-center">
   
   <ProductDetailComponent/>
   <ResponsiveGrid1/>
   <Customer/>
   <YouMayLike/>
  </div>
  );
}
