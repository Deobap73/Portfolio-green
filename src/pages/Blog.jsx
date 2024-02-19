import { useCallback } from 'react';
import BlogMain from '../components/BlogMain';
import Footer from '../components/Footer';
import './Blog.scss';

const Blog = () => {
  const onDeoIconGold1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='blog'>
      <section className='blogpresentationname'>
        <h1 className='my-blog'>My Blog</h1>
      </section>
      <BlogMain />
      <Footer
        coordinatesId='/deo-icongold-12@2x.png'
        onDeoIconGold14Click={onDeoIconGold1Click}
        vector={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/51cb0699-c86d-4cf0-8c9f-aaaeadc5737d_1708270452035740490?Expires=-62135596800&Signature=fYF2Nrc5p9~1mueGEV~HC2UIHIdcqdvsOEJQHGjGU~SC7q81Z60b8qPNNXJnN9upqqyWFqy159DAGuOx6tEc4jNWkhUfL9tGnT~PQ6I1d8E2wdSMoQcP38N44f8hX7YYyyTlCx3NczLfBsT8Hw~AVBdEQucnzLuFK8e7V067hZ0z4~P39v0C74omyIPrC5BI2M4-FRCHVzVsa5R-CYsEegSAJOGYa7cV46CI9VK2ZAzBqQ44yuCo3t8eu0BoAQ-l43dekwv-hquiwkosiH9~Ye3aSvXVmToaMG-dfgVaLhNir4SsVy~IdzSGQziArGDBR11Y-TGkUxnT6pj3wxEvbg__&Key-Pair-Id=K1P54FZWCHCL6J`}
        vector1={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/0d16eae5-c6d0-4d4f-9b28-589ded8b72af_1708270452035843265?Expires=-62135596800&Signature=ZD57Vli6ccIggqnE2fHizHd3afI0Vaud85v-4O3SWWQmoZdQfM2ZPPx7jLGgQ0rQCosvpsJ6lyYJK-9Z3es5oIbrqhgwpEkGFI3KasLFX1UaoaImSa3AJtPcYRuo6Nb2FjpOZVNOLq0T-z-t2ltbO-VRw-zFPBrWxHXsCy1ZrhDRYXPI3cAkszzTlabqniWZb8k0wPJL0~079xAn8WR7tMJG~GYy-lyJ8UJGUVUDmPar4dHERDZqn9b~kCu9oDoSMNwVg00sibXFBLNB96vrcF2-co5GWpGGlOqrPJdKWNfCkIIz47QFQOZonISBQlk3kMDA7mcBbOaWSlcxR3-7cg__&Key-Pair-Id=K1P54FZWCHCL6J`}
        vector2={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/087c8c74-f858-4708-b070-129f0fa0da84_1708270452035935245?Expires=-62135596800&Signature=joK8JEcAGpeD3ncygbKoJynpJ79yKjytpQ~zpU0PLx5WOf1mWiWH-s5k22V7slM7vElqgKMxhMKezCqFvfnrISurCfTIWq6X5YUhyA7xyJvYU55M5fU9nmwERrnwhtvX7Kp9K8LYnc4B6f9ZFOwVQvIMI~p7q~EHSqyMQH8SY0ptp5Ku31rE09-vfvpEZ9E0upeD8p~3ZHgcwy9toVLqrPAdaWB5tr--AnvH5FpVBDrEad2suOXkfJKcHMGyBr2hZXkNxNjE5UHCTKSC7tLIg6LRVippKnLk8IH4TB~w5lVXk8jKDOHwmaNcT6Xoz7M9WuUpgLpssupvQLjRmN2ZWw__&Key-Pair-Id=K1P54FZWCHCL6J`}
        vector3={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/95b95396-ef96-41d7-a45e-6473284a5d36_1708270452036024280?Expires=-62135596800&Signature=T4BjzjE0~WRLixj7k1c4Dlq9WiS4L7r-brSWjQWhV1j~WkNDFVkLBAj9KvgHJQevJSTKUdtLYKs3vmth-LgoaTLBPSYqBR02JfrJCLsNF1d~~tEysqaCP-9K0JQo3GtndXk~Nb4eMqK7EzkHja4s0sXfuoj1VyXuFHB5rZuGt7e9vwoaFqHbCOQ-r65PXY9C8O2u80NHo9cS2kg4mAwXUgLaRpAtXp62IxNG5o80Vs8709edLM2CpWLMGcqPrjeKaRf-qRUBTXkPu9kD9ov6UTiv3FQxS5Qb3pS2YkUR5K9Zzs0ZW8YCYbDeI3LSAhAdVhuawh8m7X82VIgJEYTPiQ__&Key-Pair-Id=K1P54FZWCHCL6J`}
        gitHub={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/c255815a-4d00-47bd-b816-34c6d61248e6_1708270452036114959?Expires=-62135596800&Signature=vre9XvKVMrFNpzVo~XSU0lECpsCrLoVyXMAT0cbU5NkP3h69W09DycykJb0ELHnUfVM0~manT-nmwUDlL6rxJponb3j3DD6GiR~572OIkYZruEeA27U12RTrU4jRLQhXDLdaPH2QuApC9Vk-zO8Mxv8L5e~gN28Tq1sVKI-uZsJI3o9fEZq7zhj6uOoHJg8mo~uSC3GMDHGD4r6mStAlEErdmtfU7p1KhBflAESvvX7nv8Y5MraiGTk6tA-iM2aReYxingGdpXauyE-YK9cinaP4jDyxuOo2sci5SbVsI7vs9ul2mGMvZnPDRQoRyuirvtWWwVVR52Z785Aym4Kkqg__&Key-Pair-Id=K1P54FZWCHCL6J`}
        linkedIn={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/a06cd13c-3eb7-40c8-9f0c-3f9c860f9626_1708270452036202323?Expires=-62135596800&Signature=v9G-MdmBrDas3-Wd8fUpv~GnKHkQ8H-se1Ww64bRJxY4i57Pmxc1mUr~CwkGw2ITzdY3gCxwxK93Ocn8gjl1VojMDNBBDn4bcg9krGNcQwgp-okhIlRG8~Tjppi6yMCcm7Fvb~gjCxLagA8eCUTEmf-C76YnKFVfTruPpqivFbLfkMRr5Xx49X-syFCPRTDV6Fo5tD2fKrk1dqkZRKhj5cJlitMBUb7btmPkQCxiuP2a3WkRburqc5Yk54WicgkZv8EEvOg5CKM8kPSMpd0Zq2sDmMt9gSeWcTAkj3dC41yxG0iSsBrQ7Q9L1cIcjt9au0Ivi8DYXTVowXVIpVjfJQ__&Key-Pair-Id=K1P54FZWCHCL6J`}
        instagram={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/443e6cd9-6dcf-401a-9180-1d4f4d3140ed_1708270452036288782?Expires=-62135596800&Signature=p5A2Q3KM-1zOLdLut4LMwczcL3gEqiuTeVX89L-IUUlXcnPZBUTXGHhAxwXtWaIcJv~MmyjIWXGnfdtzvYKlgBx9n4Rc7730T-V8tSoeUk8T1Am9ldzz9rToBVavp~G5v7Er46hhoXm5fvWCVrSiRDxe2G3sta5AKv6KeBrFTogtWX6IFFgMTDDiTb2q4~Po6HDPqe1BV8wEsPeITuimvZX5iHNzoh1t94Nygl0w14yiAMv4YAv7B~OBG2R6b5RDB-D6m9Qubd-CBPXUgRPGXm~HTP9x6v27wtpQ~2m2Uegod2gnxDhGtn~4R0B7-6lp26giC5bG38LhtFUOYO01Gw__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default Blog;
