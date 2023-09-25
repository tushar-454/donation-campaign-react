import PropTypes from 'prop-types';
const DonationCategory = ({ donationCategory }) => {
  const {
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
  } = donationCategory;
  return (
    <div className={`rounded-lg`} style={{ backgroundColor: card_bg_color }}>
      <div className='cardImg'>
        <img src={picture} className='w-full' />
      </div>
      <div className='cardCategory px-5 py-3'>
        <h1
          className={`text-sm font-medium px-3 py-1 rounded-lg inline-block`}
          style={{ backgroundColor: category_bg_color, color: text_color }}
        >
          {category}
        </h1>
      </div>
      <div className='cardTitle px-5 pb-4'>
        <h1 className={`text-xl font-semibold`} style={{ color: text_color }}>
          {title}
        </h1>
      </div>
    </div>
  );
};
DonationCategory.propTypes = {
  donationCategory: PropTypes.object.isRequired,
};
export default DonationCategory;
