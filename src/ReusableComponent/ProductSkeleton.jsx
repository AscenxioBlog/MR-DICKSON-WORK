import React from 'react'

function ProductSkeleton() {
  return (
    <div>
         <div className="flex-shrink-0 ">
      <div className="bg-[#e7e2e2] shadow-md rounded-md overflow-hidden">
        {/* Image Skeleton */}
        <div className="relative pt-[80%] bg-[#cdd6de] flex justify-center items-center animate-pulse">
            <h1 className=' font-extrabold text-[#0000004a]'>Product loading!!!!</h1>
          <div className="absolute top-2 left-2 w-10 h-5 bg-gray-300 rounded"></div>
          <div className="absolute top-2 right-2 w-10 h-5 bg-gray-300 rounded"></div>
        </div>
        
        {/* Content Skeleton */}
        <div className="p-4">
          <div className="h-4 bg-[gray] rounded w-3/4 mb-2 animate-pulse"></div>
          <div className="h-4 bg-[gray] rounded w-1/2 mb-4 animate-pulse"></div>
          <div className="flex justify-between items-center">
            <div className="h-6 bg-[gray] rounded w-1/3 animate-pulse"></div>
            <div className="h-8 bg-[gray] rounded w-16 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductSkeleton