// "use client";

// import React from "react";

// export default function HeaderTop(): React.ReactElement {
//   return (
//     <div className="w-full bg-[#b30c32] text-white text-sm py-4">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
//         {/* Left Side */}
//         <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
//           <span className="flex items-center gap-1">
//             <i className="fa fa-phone"></i>
//             <span className="text-[14px]">Phone: (011)-71573058</span>
//           </span>
//           <span className="flex items-center gap-1">
//             <i className="fa fa-envelope"></i>
//             <span className="text-[14px]">Mail: info@holidayseason.co.in</span>
//           </span>
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-wrap items-center gap-4 text-center md:text-right">
//           <span className="flex items-center gap-1">
//             <i className="fa fa-users"></i>
//             <span className="text-[14px]">Association of Tour Operators (IATO)</span>
//           </span>
//           <span className="flex items-center gap-1">
//             <i className="fa fa-check-circle"></i>
//             <span className="text-[14px]">Approved By (ASTA)</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React from "react";

export default function HeaderTop(): React.ReactElement {
  return (
    <header className="hidden md:block sticky top-0 z-50 w-full bg-[#b30c32] text-white text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <i className="fa fa-phone text-[13px]"></i>
            <span className="text-[14px]">Phone: (011)-71573058</span>
          </span>
          <span className="flex items-center gap-1">
            <i className="fa fa-envelope text-[13px]"></i>
            <span className="text-[14px]">Mail: info@holidayseason.co.in</span>
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <i className="fa fa-users text-[13px]"></i>
            <span className="text-[14px]">
              Association of Tour Operators (IATO)
            </span>
          </span>
          <span className="flex items-center gap-1">
            <i className="fa fa-check-circle text-[13px]"></i>
            <span className="text-[14px]">Approved By (ASTA)</span>
          </span>
        </div>
      </div>
    </header>
  );
}
