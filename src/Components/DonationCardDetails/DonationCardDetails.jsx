import { useLoaderData, useParams } from 'react-router-dom';

const DonationCardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find((card) => card.id === parseInt(id));
  const { picture, title, description, donate, text_color } = card;
  return (
    <div className='container mx-auto px-4 -z-10'>
      <div className='my-10'>
        <div className='cardPicture relative'>
          <img src={picture} className='w-full rounded-lg' />
          <div className='priceOverlays flex items-center absolute bottom-0 w-full h-[10vh] bg-[#00000050] rounded-br-lg rounded-bl-lg'>
            <h1
              className='text-white px-4 py-2 ml-5 rounded-lg inline-block'
              style={{ backgroundColor: text_color }}
            >
              Donate ${donate}
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
