import { useCallback } from 'react';
import ProjectsMain from '../components/ProjectsMain';
import ProjectsTheProjects from '../components/ProjectsTheProjects';
import Footer from '../components/Footer';
import './Projects.scss';

const Projects = () => {
  const onDeoIconGold1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='projects'>
      <header className='projectspresentationname'>
        <b className='take-a-look'>Take a look at</b>
        <b className='my-projects'>My projects</b>
      </header>
      <ProjectsMain />
      <ProjectsTheProjects />
      <Footer
        coordinatesId='/deo-icongold-12@2x.png'
        onDeoIconGold14Click={onDeoIconGold1Click}
        vector={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/b307e072-dfc0-46bc-bdea-4765d4082354_1708270470708959865?Expires=-62135596800&Signature=otRBP-fXIxo4yIhnUyWDdJMEaWVkhsfG25bwmXXUkQymrkyjs~ixLbmoo2FyG7CPHF1PH~Erfnui2JgIL2AAlM8WqXvmrzB~so328H9l6f1Uu3CSlMUxwhxgoBYZxwKB~soLZ2-NripJOGVkk~iu3npqGVEl9DVgQ3XcEZWFflHrtwaa8Ho6dhkqBkkzHAFN7UtoQ3NlgJI~d2jGSjM09PI5k6ADDW9pIKo1kL0CIh7qtAbqfNlycR~nh0Jpj8rVKkmOVQTO-3EqxvdODrGgbSML5A71gacYZ-dRnQAlPqv9mOpBuytgMHYHVvMWyLIiJzVUhw-MykV2T-MiBVX4yg__&Key-Pair-Id=K1P54FZWCHCL6J`}
        vector1={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/468b5550-77ed-4a75-a06d-e966986545d0_1708270470709040992?Expires=-62135596800&Signature=LPua4L8fr0EEX5rJo8uyUDHqjCARnABm7YMXKd~gp8JKc-~jVHHhDD8G0RhdwL1-FC~UTOBfLOpUhvokOU8YVomJn3JOtjB49fkGq~4CFoveTznrItEtYTVdIwogGFYWwIYspVOOo75MU6JNVnPynpLygzP42ZFqs1Ex3g1caf1WCDFRGxQkRFMWPZDEtJzFtjkjqyJ39kA2o2g6e2xUZuzFcD-4Nu9P-0nbwDS8NnZKgllNy7Q4MAEZx1mECLjdivbyU~6Xt4qlZh6eQSSk8L3CK6RCNy4mPfNwzlHwHRWgnwamOwIgL7FUYpNz0ByBA9YRFlTOIIGTVZ10zYw5Uw__&Key-Pair-Id=K1P54FZWCHCL6J`}
        vector2={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/58a940f6-3221-4533-a4b8-aae969fc1ce2_1708270470709138693?Expires=-62135596800&Signature=H~ohZRmByIiCOLOjbzL2QZiqx3PNXYFEkxV0CccMO1vZPLGiZHLsXEuYyv39XfJpe4A4Cj9ctoJMA4LAYio2XfANu30uU04XEvuJV8HjwhWV75nzizUdLFqcIcCdvo4towBFbm2fcPX8EWOzQmPqxpr2XNm613caDHE7rCPINqMqhrrSqWg17cNO6jcwjBi~cCf9VGx9Ca86wG3qKOw3SB1z48ME~tWfIjAocvqmDuah6dMVaxigR9~kijjXabzzc3uBSGHr5GfOQSBlhSp0ahPzO8iyQzdMUHVphFkVvmljVqCd5NH3fRV~AsYWDXCkQBVrynX3hA5N1TMiF57bZg__&Key-Pair-Id=K1P54FZWCHCL6J`}
        vector3={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/37993c45-6065-4c03-a8af-c18552c4a6e6_1708270470709227747?Expires=-62135596800&Signature=vQvAMxeVXUrDkcRPITE3HRsQ5U0RauIhbhHTviQ~dSupnrQ-6Q5rClT2j2itC8OGFcONHS8lmO9wEC5gAOUermnyR8u1ugzYzGCb5TOHJJGsUB747Y4-fpju3ICT5138d9z0ADMevMvfmnUWbzQqqUCe-pyS-SrZZiQoDumXiKbzgbqklJozI1VVft4s1OFksTdwLyhbzCX~n7mtDh06pvfSM2v3qNO-E-nKo2ape3pVf8gnAssDMbzYYcrTNBs64EDsp42bdIDIFiYpbG~rOP~1tWM~hEbOAT-sQhh9u-6JDN1Ptt8QHB7l4TNN~CiF96qj6J7gQD0NWJWmvPWWmg__&Key-Pair-Id=K1P54FZWCHCL6J`}
        gitHub={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/e832e954-6b32-4188-a23f-bbaa4814df9a_1708270470709313311?Expires=-62135596800&Signature=GW4G0mJDwy8m5d3jO5JnBTX6fCzcnOeq7vr-R8tNOD-gZADqnA5WnMw7sNEvlzwjkQeFTIBnNJ8QuH0mas9atIPzwWYW4q9-oESXCOCHHmjwUnc7jMXPy-We8gWLLAZ15yHI8oGlK8MMComhgtC~dvMAbElU7trjpPPoVffO8YQkVdJJxYZMypCHAxu8R0oZWKZLgHv2lLM7G~saaAnE0Qe8rtf5khmDFVq0WwLhi-4b10zHT62l3tz9lK2mqOkEYbL8bBfaFBbzQi8-435htZSNXwr~6NFlgZaOgkKR1EqmTb3zyCdFFkDsKHXbFqqWGOEpyHDjMb~7UtPb9W8kCw__&Key-Pair-Id=K1P54FZWCHCL6J`}
        linkedIn={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/f5905f5f-e820-42f0-af0f-e8da3ea52dd8_1708270470709429694?Expires=-62135596800&Signature=e9v74YVP9Sx0q5arjICDdBBIQIaMhgPcZmTMMimgOZJl~AZdi4P4D3-tm7j537JvxyFPDbljlI3l9rztAqP3dTPZx2bvXhWVwZnaKIbYdQt9Z9ODEl89c3oCjdBiNBuPIJQQ6-ubrtui3ZR1YrXJfKfUcOAp5iCbR9LkID27OQCOyMVRkJWzZqupjxO8W9RRxKX7HAjevW7ofOmb5jpe6ujf-flQqPtcNlU3zF74xUDmTwU18deiSliU-9Rj53C55lBZxcSdgctSIM8~2wBb4StfWY9NHW8LtrGwSvG4-i0CDCUtVY3a4EpzilOJXkoT19wm2qPvvFUW1lXBVhUACg__&Key-Pair-Id=K1P54FZWCHCL6J`}
        instagram={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/d18cc3b5-aa5e-42c6-a375-c4246d2be95e_1708270470709531587?Expires=-62135596800&Signature=JsXmEIxF3S3c~b~nD1rTFWD8T0HXQHSugC-bPjC4fGtcPhHi25pI3079H8kj-c3F0crz2kl7YPzHHGBq4e-EJK2hLgyUXjNRlx5qmzzb1w0Un1ldmCJVwkey7TUwyfdUXCYGPUExdtd7p8BEETCnwf0liL-6kkrj2RI2BcnZZqJILU2FataooKldvYeT3dDq285CwjgDYBmQ5X-1EhlCpLUWh0frj4JU7~wH05yJ8tFYYsp9kaX1nxQgsdax6Cm5P3C8BPIaoiXy3mx-eV4vGET8NDJWhAp9f52nL8~JOJHPYis3lzWuO33mItdfoSjyodsV6qk6eSsRgpWfqk73dA__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default Projects;
