import React from 'react';
import HeroCategory from './component/HeroCategory';
import FilterSidebar from './component/FilterSidebar';
import SmallDog from './component/SmallDog';
import Footer from './component/Footer';

function Category() {
  return (
    <div>
        <HeroCategory />
        <div className="min-h-screen flex">
      <FilterSidebar />
      <div className="flex-grow">
        <SmallDog />
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Category;
