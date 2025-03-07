import { Search, Sliders } from "lucide-react";
import { DualRangeSlider } from "./DualRangeSliderDemo";
import { Dog } from "lucide-react";
function Sidebar() {
  return (
    <aside className="w-full lg:w-72 bg-[#1e1e1e] p-6 lg:p-8 space-y-6 shadow-md">
      <a href="/" className="flex items-center text-2xl font-semibold text-gray-200">
        <Dog size={38} className="mr-2 text-blue-500" /> GentlePaws
      </a>
      <div className="relative">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-black text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search products..."
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-300">
          <Sliders className="mr-2 h-5 w-5 text-gray-300" /> Filters
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-400 mb-1">
              Sort by
            </label>
            <select
              id="sort"
              className="w-full p-2 rounded-lg bg-black text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Categories</h4>
            <div className="space-y-2">
              {["Dog", "Cat", "Birds", "Rabbit"].map((category) => (
                <label key={category} className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-gray-300 bg-gray-100 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-200">{category}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Price Range</h4>
            <DualRangeSlider min={0} max={5000} step={100} defaultValue={[100, 4000 ]} />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
