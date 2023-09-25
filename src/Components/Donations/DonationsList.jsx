import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationListCardDetails from './DonationListCardDetails';

const Donations = () => {
  const [donateCards, setDonateCards] = useState([]);
  const donations = useLoaderData();
  const donateId = JSON.parse(localStorage.getItem('donateId'));
  const donateIdList = donations.filter((donation) =>
    donateId?.includes(String(donation.id))
  );
  useEffect(() => {
    setDonateCards(donateIdList);
  }, []);
  console.log(donateIdList);
  return (
    <div>
      <div className='container mx-auto px-4'>
        <div className='my-10'>
          {donateCards.length === 0 ? (
            <>
              <div className='text-4xl h-screen flex justify-center'>
                No donation found 😭
              </div>
            </>
          ) : (
            <>
              <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                {donateCards.map((listCardDetails) => (
                  <DonationListCardDetails
                    key={listCardDetails.id}
                    listCardDetails={listCardDetails}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donations;
