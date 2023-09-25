import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationsCategories from './DonationsCategories';
import Hero from './Hero';

const Home = () => {
  const donationsCategories = useLoaderData();
  const [searchCategories, setSearchCategories] = useState(donationsCategories);
  const searchFunc = (str) => {
    const searchCate = [];
    donationsCategories.filter((cate) => {
      if (cate.category.toLowerCase().includes(str.toLowerCase())) {
        searchCate.push(cate);
      }
    });
    setSearchCategories(searchCate);
  };
  return (
    <div>
      <Hero searchFunc={searchFunc} />
      <DonationsCategories donationsCategories={searchCategories} />
    </div>
  );
};

export default Home;
