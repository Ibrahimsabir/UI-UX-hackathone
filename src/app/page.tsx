import {Hero} from "./components/hero/hero";
import { LogoSection } from "./components/logosection/logosection";
import NewArrival from "./components/newarrival/newarrival";
import TopSeller from "./components/topsell/topsell";

import Customer from "./components/customer/customer";

import ResponsiveGrid from "./components/category/category";

export default function Home() {
  return (
  <div className="max-w-full h-full flex-grow justify-start items-center">
    <Hero/>
    <LogoSection/>
    
    <NewArrival/>
    <TopSeller/>
    <ResponsiveGrid/>
    <Customer/>
  </div>
  );
}
