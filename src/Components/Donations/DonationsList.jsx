/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationListCardDetails from './DonationListCardDetails';

const Donations = () => {
  const [donateCards, setDonateCards] = useState([]);
  const [seemore, setSeeMore] = useState(false);
  const [slice, setSlice] = useState(4);
  const donations = useLoaderData();
  const donateId = JSON.parse(localStorage.getItem('donateId'));
  const donateIdList = donations.filter((donation) =>
    donateId?.includes(String(donation.id))
  );
  useEffect(() => {
    setDonateCards(donateIdList);
  }, []);
  const handleSeeMore = () => {
    setSeeMore(!seemore);
    setSlice(donateIdList.length);
  };
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
                {seemore
                  ? donateCards
                      .slice(0, slice)
                      .map((listCardDetails) => (
                        <DonationListCardDetails
                          key={listCardDetails.id}
                          listCardDetails={listCardDetails}
                        />
                      ))
                  : donateCards
                      .slice(0, slice)
                      .map((listCardDetails) => (
                        <DonationListCardDetails
                          key={listCardDetails.id}
                          listCardDetails={listCardDetails}
                        />
                      ))}
              </div>
              {donateCards.length > 4 && !seemore && (
                <div className='seemorebtn my-5 text-center'>
                  <button
                    onClick={handleSeeMore}
                    className='text-white bg-tertiary font-semibold text-lg px-4 py-2 rounded-lg transition active:bg-[#056a34]'
                  >
                    See All
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donations;
