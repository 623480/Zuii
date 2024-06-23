import { CDN_URL } from '../utils/constant';

const RestaurantCard = ({ resData }) => {
  // const{resData}=props
  const { name, avgRating, costForTwo, cloudinaryImageId, cuisines } =
    resData?.info;
  return (
    <div className='m-4 p-4 w-[260px] h-64 rounded-lg bg-gray-300 hover:bg-orange-200'>
      <img
        className='h-40 w-64 rounded-lg'
        src={CDN_URL + cloudinaryImageId}
        alt='res-logo'
      />

      <h3 className='p-[5px] text-sm truncate'>{name}</h3>
      <h4 className='p-[5px] text-xs truncate'>{cuisines.join(', ')}</h4>
      <div className='p-[5px] flex justify-between'>
        <h4 className='text-xs'>{avgRating}</h4>
        <h4 className='text-xs truncate'>{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute ml-[35px] mr-10 mt-[22px] rounded-[4px] w-10 bg-gray-800  text-white'>open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
