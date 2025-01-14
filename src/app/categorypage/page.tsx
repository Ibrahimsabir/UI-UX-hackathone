import React from 'react'
import { CategoryTop } from '../components/categorytop'
import CasualCard from '../components/casualcard'


const CategoryPage = () => {
  return (
    <div className="max-w-[1440px] max-h-full flex-grow justify-start items-center mb-0">
    <CategoryTop/>
  <div className="flex flex-col sm:flex-row max-w-[90%] max-h-full justify-center items-start mb-48 mt-8 m-auto p-2">
  {/* First Div */}
       <div className="w-[295px] h-[1120px] border-2 border-gray-200 mt-12 rounded-xl sm:mb-0 sm:mr-4">
        
       </div>

  {/* Second Div (with CasualCard component) */}
  <div className="w-[925px] max-h-[11800px] p-2">
    <CasualCard />
  </div>
    </div>

    </div>
  )
}
export default CategoryPage;