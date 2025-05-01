import React from 'react'
import { CategoryPills } from "./CategoryPills";
import { categories } from "@/app/data/home";
import { useState } from "react";


function SideBar() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
 
  return (
    <div>
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>sidebar</div>
        <div className="overflow-x-hidden">
          <div className="sticky top-0 bg-info z-10">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={(category) => setSelectedCategory(category)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
