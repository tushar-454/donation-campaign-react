/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import noDonation from '../../assets/no-donation.gif';
import DonationListCardDetails from './DonationListCardDetails';

const Donations = () => {
  const [donateCards, setDonateCards] = useState([]);
  const [seemore, setSeeMore] = useState(false);
  const [total, setTotal] = useState(0);
  const [slice, setSlice] = useState(4);
  const donations = useLoaderData();
  const donateId = JSON.parse(localStorage.getItem('donateId'));
  const donateIdList = donations.filter((donation) =>
    donateId?.includes(String(donation.id))
  );
  useEffect(() => {
    setDonateCards(donateIdList);
    const totalDonate = donateIdList
      .map((item) => item.price)
      .reduce((acc, cur) => acc + cur, 0);
    setTotal(totalDonate);
  }, []);
  const handleSeeMore = () => {
    setSeeMore(!seemore);
    setSlice(donateIdList.length);
  };
  const handleClear = () => {
    setDonateCards([]);
    localStorage.setItem('donateId', '[]');
  };
  return (
    <div>
      <div className='container mx-auto px-4'>
        <div className='my-10'>
          {donateCards.length === 0 ? (
            <>
              <div className='text-4xl flex justify-center'>
                <img src={noDonation} className='w-full' />
              </div>
            </>
          ) : (
            <>
              <div className='my-5'>
                <div className='totalDonate space-y-3'>
                  <h1 className='text-3xl font-medium'>
                    Your total donate: ${total.toFixed(2)}
                  </h1>
                  <button
                    onClick={handleClear}
                    className='text-xl px-3 py-2 bg-purple-500 text-white rounded-lg'
                  >
                    Clear all donation
                  </button>
                </div>
              </div>
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
