import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DonationListCardDetails = ({ listCardDetails }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
    price,
  } = listCardDetails;
  return (
    <div
      className='rounded-lg flex gap-5 items-center'
      style={{ backgroundColor: card_bg_color }}
    >
      <div className='listCardImg h-full w-2/5'>
        <img src={picture} className='w-full h-full rounded-lg' />
      </div>
      <div className='listCardTextInfo w-3/5'>
        <div className='cardCategory px-5 py-3'>
          <h1
            className={`text-sm font-medium px-3 py-1 rounded-lg inline-block`}
            style={{ backgroundColor: category_bg_color, color: text_color }}
          >
            {category}
          </h1>
        </div>
        <div className='cardTitle px-5 pb-3'>
          <h1 className={`text-xl font-semibold`} style={{ color: text_color }}>
            {title}
          </h1>
        </div>
        <div className='cardPrice px-5 pb-3'>
          <p className='font-semibold' style={{ color: text_color }}>
            ${price.toFixed(2)}
          </p>
        </div>
        <div className='cardViewDetailsBtn px-5 pb-4'>
          <Link to={`/${category}/${id}`}>
            <button
              className='text-white font-semibold text-lg px-4 py-2 rounded-lg'
              style={{ backgroundColor: text_color }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
DonationListCardDetails.propTypes = {
  listCardDetails: PropTypes.object.isRequired,
};
export default DonationListCardDetails;
