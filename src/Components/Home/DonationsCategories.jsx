import PropTypes from 'prop-types';
import DonationCategory from './DonationCategory';
const DonationsCategories = ({ donationsCategories }) => {
  return (
    <div className='container mx-auto px-4 mb-20'>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {donationsCategories?.map((category) => (
          <DonationCategory key={category.id} donationCategory={category} />
        ))}
      </div>
    </div>
  );
};
DonationsCategories.propTypes = {
  donationsCategories: PropTypes.array.isRequired,
};
export default DonationsCategories;
