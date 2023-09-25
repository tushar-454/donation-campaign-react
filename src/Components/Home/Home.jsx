import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationsCategories from './DonationsCategories';
import Hero from './Hero';

const Home = () => {
  const donationsCategories = useLoaderData();
  const [searchCategories, setSearchCategories] = useState(donationsCategories);
  const searchFunc = (str) => {
    const test = donationsCategories.filter((cate) =>
      cate.category.toLowerCase().includes(str.toLowerCase())
    );
    setSearchCategories(test);
  };
  const doFullAllCard = (arr) => {
    setSearchCategories(arr);
  };
  return (
    <div>
      <Hero searchFunc={searchFunc} doFullAllCard={doFullAllCard} />
      <DonationsCategories donationsCategories={searchCategories} />
    </div>
  );
};

export default Home;
