// import React from "react";
// import styles from "../styles/styles";
// import { categoriesData, productData,sleeveType,neckType,color,fabric,occasion,fit,gender,size } from "../static/data";

// const FilterOptions = ({ filters, handleFilterChange, sizesFromStock, color, sleeveType, neckType, fabric, occasion, fit, gender }) => {
//     return (
//     <div className={`${styles.filterContainer}`}>
//       {/* Category Filter */}
//       <div>
//         <label className="block mb-2">Category:</label>
//         <select
//           className="w-full p-2 border border-gray-300 rounded-md"
//           onChange={(e) => handleFilterChange("category", e.target.value)}
//           value={filters.category}
//         >
//           <option value="">All</option>
//           <option value="Men">Men</option>
//           <option value="Women">Women</option>
//           {/* Add more options as needed */}
//         </select>
//       </div>

//       {/* Size Filter */}
//       <div>
//         <label className="block mb-2">Size:</label>
//         <select
//           value={filters.size}
//           onChange={(e) => handleFilterChange("size", e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">Any</option>
//           {sizesFromStock.map((option, index) => (
//             <option key={index} value={option.type}>
//               {option.type}
//             </option>
//           ))}
//         </select>
//       </div>
//       <label className="block mb-2">color:</label>

//       {/* Color Filter */}
//       <select
//         value={filters.color}
//         onChange={(e) => handleFilterChange("color", e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded-md"
//         >
//         <option value="">Any</option>
//         {color.map((option, index) => (
//             <option key={index} value={option.name}>
//             {option.name}
//             </option>
//         ))}
//         </select>


//       {/* Sleeve Type Filter */}
//       <div>
//         <label className="block mb-2">Sleeve Type:</label>
//         <select
//           value={filters.sleeveType}
//           onChange={(e) => handleFilterChange("sleeveType", e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">Any</option>
//           {sleeveType.map((option, index) => (
//             <option key={index} value={option.title}>
//               {option.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Neck Type Filter */}
//       <div>
//         <label className="block mb-2">Neck Type:</label>
//         <select
//           value={filters.neckType}
//           onChange={(e) => handleFilterChange("neckType", e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">Any</option>
//           {neckType.map((option, index) => (
//             <option key={index} value={option.title}>
//               {option.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Fabric Type Filter */}
//       <div>
//         <label className="block mb-2">Fabric Type:</label>
//         <select
//           value={filters.fabric}
//           onChange={(e) => handleFilterChange("fabric", e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">Any</option>
//           {fabric.map((option, index) => (
//             <option key={index} value={option.type}>
//               {option.type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Occasion Type Filter */}
//       <div>
//         <label className="block mb-2">Occasion Type:</label>
//         <select
//           value={filters.occasion}
//           onChange={(e) => handleFilterChange("occasion", e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">Any</option>
//           {occasion.map((option, index) => (
//             <option key={index} value={option.type}>
//               {option.type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Fit Type Filter */}
//       <div>
//         <label className="block mb-2">Fit Type:</label>
//         <select
//           value={filters.fit}
//           onChange={(e) => handleFilterChange("fit", e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">Any</option>
//           {fit.map((option, index) => (
//             <option key={index} value={option.type}>
//               {option.type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Gender Type Filter */}
//       <div>
//         <label className="block mb-2">Gender Type:</label>
//         <select
//           value={filters.gender}
//           onChange={(e) => handleFilterChange("gender", e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">Any</option>
//           {gender.map((option, index) => (
//             <option key={index} value={option.type}>
//               {option.type}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default FilterOptions;