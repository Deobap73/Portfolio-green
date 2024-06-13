// Portfolio-green/src/components/Blog/Pagination/Pagination.jsx

import './Pagination.scss';

export const Pagination = () => {
  /* export const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter(); */

  return (
    <div className='paginationContainer'>
      <button className='paginationButton'>Previous</button>
      <button className='paginationButton'>Next</button>
      {/* <button
        className='paginationButton'
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}>
        Previous
      </button>
      <button
        disabled={!hasNext}
        className='paginationButton'
        onClick={() => router.push(`?page=${page + 1}`)}>
        Next
      </button> */}
    </div>
  );
};
