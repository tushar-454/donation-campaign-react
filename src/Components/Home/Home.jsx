import { useLoaderData } from 'react-router-dom';
import DonationsCategories from './DonationsCategories';
import Hero from './Hero';

const Home = () => {
  const donationsCategories = useLoaderData();
  return (
    <div>
      <Hero />
      <DonationsCategories donationsCategories={donationsCategories} />
    </div>
  );
};

export default Home;
