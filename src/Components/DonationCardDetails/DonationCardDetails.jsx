import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
const DonationCardDetails = () => {
  const cards = useLoaderData();
  const { id, category } = useParams();
  const card = cards.find((card) => card.id === parseInt(id));
  const { picture, title, description, price, text_color } = card;
  const handleDonate = () => {
    let donateList = [];

    if (!localStorage.getItem('donateId')) {
      donateList.push(id);
      localStorage.setItem('donateId', JSON.stringify(donateList));
      swal(
        'Donation Successfull!',
        `You donate on ${category} category about $${price}`,
        'success'
      );
    } else {
      donateList = JSON.parse(localStorage.getItem('donateId'));
      if (donateList.includes(id)) {
        swal(
          'You donate already!',
          `You can't donate any more this category item, please donate another categories item.`,
          'error'
        );
        return;
      }
      donateList.push(id);
      localStorage.setItem('donateId', JSON.stringify(donateList));
      swal(
        'Donation Successfull!',
        `You donate on ${category} category about $${price}`,
        'success'
      );
    }
  };
  return (
    <div className='container mx-auto px-4 -z-10'>
      <div className='my-10'>
        <div className='cardPicture relative'>
          <img src={picture} className='w-full rounded-lg' />
          <div
            className='priceOverlays flex items-center absolute bottom-0 w-full h-[10vh] bg-[#00000050] rounded-br-lg rounded-bl-lg cursor-pointer'
            onClick={handleDonate}
          >
            <h1
              className='text-white px-4 py-2 ml-5 rounded-lg inline-block'
              style={{ backgroundColor: text_color }}
            >
              Donate ${price}
            </h1>
          </div>
        </div>
        <div className='cardTitle py-4'>
          <h1 className='text-3xl sm:text-4xl font-bold text-secoundary'>
            {title}
          </h1>
        </div>
        <div className='cardDesc'>
          <p className='text-justify text-gray'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationCardDetails;
