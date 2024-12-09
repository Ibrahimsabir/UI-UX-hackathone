import Card from "../card/card";
import { GoDotFill } from "react-icons/go";



export default function Customer() {
  // Dummy data for cards
  const CustomerData = [
    {
      text: "Sarah M.",
      description:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      date: "2024-12-05",
    },
    {
      text: "Alex K.",
      description:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      date: "2024-12-04",
    },
    {
      text: "James L.",
      description:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      date: "2024-12-03",
    },
    {
      text: "Emily R.",
      description:
        "The customer service at Shop.co is top-notch! They were incredibly helpful in assisting me with my order. I will definitely be returning for more shopping.",
      date: "2024-12-02",
    },
    {
      text: "Michael T.",
      description:
        "I appreciate how Shop.co prioritizes quality without compromising on affordability. Their collection is a breath of fresh air in the fashion world.",
      date: "2024-12-01",
    },
    {
      text: "Olivia P.",
      description:
        "Shop.co has completely revolutionized my shopping experience. Their user-friendly platform, coupled with amazing products, makes for an unbeatable combo!",
      date: "2024-11-30",
    },
  ];

  return (
    <div className="flex font-Satoshi flex-col justify-between items-center m-auto gap-0">
      {/* Header */}
      <div className="w-[90%] h-[80px] flex justify-start   items-center m-auto">
        <div className="flex w-2/3 h-[20px] justify-start gap-2 items-center mx-auto">
        <h1 className="flex gap-4 sm:h-[58px] sm:w-[654px]  w-[286px] h-[20px] left-4 text-[#000000] lg:left-[100px] top-[150px] text-[20px] sm:text-[28px] sm:mt-[50px] leading-[57.px] font-semibold mb-2 mx-auto">
          All Reviews 
          <h2 className=" text-lg items-baseline text-gray-500">(415)</h2>
        </h1>
        
        </div>
        <div className="flex w-1/3 justify-end items-center gap-2 my-auto">
          <GoDotFill className="w-[24px] h-[24px] text-2xl text-gray-700" />
          <GoDotFill className="w-[24px] h-[24px] text-2xl text-gray-400" />
          <GoDotFill className="w-[24px] h-[24px] text-2xl text-gray-400" />

        </div>
      </div>

      {/* Dynamic Cards */}
      <div className="lg:ml-[90px] mt-[50px] border-b-2  border-gray-200 flex flex-wrap gap-6 justify-center">
        {CustomerData.map((customer, index) => (
          <Card
            key={index} // Use index as key for now (prefer unique IDs in real apps)
            text={customer.text}
            p={customer.description}
            date={customer.date} // Pass date as a prop to the Card component
          />
        ))}
        <div className="col-span-full flex justify-center mt-8 mb-12">
          <button className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            Load More Reviews
          </button>
        </div>
      </div>
      
    </div>
  );
}
