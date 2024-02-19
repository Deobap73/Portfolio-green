import { useCallback } from 'react';
import AboutMeMain from '../components/AboutMeMain';
import AboutMeSkillsContainer from '../components/AboutMeSkillsContainer';
import Footer from '../components/Footer';
import './AboutMe.scss';

const AboutMe = () => {
  const onDeoIconGold1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='aboutme'>
      <header
        className='aboutmepresentationname'
        data-scroll-to='aboutMePresentationName'>
        <h1 className='deolindo-baptista1'>
          <span>{`Hi, I am `}</span>
          <span className='deolindo-baptista2'>Deolindo Baptista</span>
        </h1>
        <p className='as-a-junior'>
          My journey as a Junior Full Stack Web Developer is marked by
          resilience, constant learning and an unwavering passion for building
          exceptional web applications
        </p>
      </header>
      <AboutMeMain />
      <AboutMeSkillsContainer />
      <Footer
        coordinatesId='/deo-icongold-16@2x.png'
        onDeoIconGold14Click={onDeoIconGold1Click}
        vector={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/231cac21-308f-4fd2-8dd2-e6bfe1452a80_1708270499923068040?Expires=-62135596800&Signature=Ga9bKG0DM4Uo6ug~7INOdN0LCrNoddzs2QWh-mCK~C8fgGDBkrN7NDmW2S7g3vrGh0cLN~lP6TjdwLbqXc-~xEPgkD0Vrw38fXlG84Xc5kezWc9yHDRJxV2OhpxWMIRG6LdDDTV4UBTNWQ1MONGyup6RGdqQ7yi3Wp0Qf69Lan8m8nElypX85AcyzpsHV5x8a9lRIKDBJiXEDt3fP05CMAgOFkg4Ehy5s0Bgg6DW1Me5aeG4pBVnEb0HBshqRHa4q1QesMPpNxMiiQ5xEr~bhUEOlILS0tzFRhmEMb10TTvOlAX2tMs7n4pkYoyR9k3RbN4nFm1vzqsNA55-wxpVxQ__&Key-Pair-Id=K1P54FZWCHCL6J`}
        vector1={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/926a7725-7cfa-4801-9a02-1f6e07503ec5_1708270499923147416?Expires=-62135596800&Signature=j7p8wDwp2qJgKSKAUdkQOWgJzq0YE4qADw6pHLmI8ZcJRFpDfvIFKgKWK0cqc5e0fX9UINMGBEcUkCxwkW3uSoaqRv88iwqgwCPidk5TPPKqFqJHDPpyQ4ORlLudJFSU05S0hco7XVQPu49uPxdkPoEsLWilMWqfPesEdf2H8ZOaZqf2n-1GHFUbsZGMsP5QPZNgtFLDw2rSbZO0m~7xMfwQrzUvXQugPOTH00drOz7UXPJztCoQAyR7FXPvMmlwOgkslg2dnfp-xxGBlHp75B84Q7L9TmRmNuRafJNr~ZQ70UXJgznA5dan0vtUuF~lmb0a-dbfuBgL-iE7JH09BQ__&Key-Pair-Id=K1P54FZWCHCL6J`}
        vector2={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/6c337377-0ca9-4948-b72e-b1541428dd31_1708270499923233797?Expires=-62135596800&Signature=cRzaC8oyOSJVoAEkJw9COHkDsvx2vgj14G~K~huurjkQdGIFATXLdjOZNknj4x0QSfES33YcfgpBsQnYN9Wwc0gKAgWIyFw4VqCTY3~EJeabV1lBJxe0bxWAklfZ9RKWiqB5w~UA7TB7rW0DI9Xchh~RYlQPj~g0IGBKffGfuk3fXw0iQ~5ZEk2fWjB2-LYnjWOBxbIfj1pFAXE0drb-97rflAd8xoOp83m6bUvw98vlidmi9Uh3LUsM73052SjlquphcyNo2V5FL9fgYtsew6uw4rA01mG7oO2nXgF7jPS1LRv88ieqb3mP5sRVrrh4f~yWxXGBpvU5LPMG1JfMuw__&Key-Pair-Id=K1P54FZWCHCL6J`}
        vector3={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/8cb685e5-5d9e-4682-9dc2-50b4d7368e55_1708270499923314070?Expires=-62135596800&Signature=Hx-9QNRuNtKgG-haXWKtXxGQKJDrnfuCB8fxEuLvEhrRuqPOmVFhTNmAwO~s2nUk7JOqY2b7cgkf2PNCnHSpTcWMplwZikVBXKRhZl2YCynE2ZtHq5PS7VZEoM6Jmqp316MGNyO7kR~6ZgVBMu9zcXW0UlrIGaFwgKORxVxmVnl0rZVmrqFytHZKee-4HVz56pRYlXpFALjYEaLvinNcGJQUTsZrfIszrPwlE3eM1-rSCb~wjZy3wxfpa~T1F5Tlrr5OOSItaT-Bx~0IX4-iwHh5ltJW2wKMnzCOjMKiIAsdOudBkcFOV4fMpTzbBzb-eobr6tBho~3mUKC9A6Dq-w__&Key-Pair-Id=K1P54FZWCHCL6J`}
        gitHub={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/344bd92a-5136-4717-9b56-6179e5df34b3_1708270499923394710?Expires=-62135596800&Signature=Pk1EJ8llI9Q02n4dfyxZmd-u2u8moPG5EkZ0y7mGKDkiLi-eChsUKo87~yKoTdrhYwweRCY5BIYzT8hQL0bpO5XvVjv9Gc4OCvaR-~JTlo0V1AihDe3RdQj4xRVnzAngvELVHQCvAkHiv4tzO71gFNuXpE~mvOMdLc0n35Nehp5RXQmfKJJVBlt3oF2ZnHLYV5ARD3cYUQ-hOdrQl9G00yHWL1gWWW43ifrPUwWdMl10SdxxfzGQ51Z81HaGkJKHAiXMbVh4d1jeL~yDMSKZGOHy4AAyC5ewY1FpFtKs93rSWEgt1wSi5aD3s0dPPYSIo2SLnQi2lEvp5ZbVnqFh1Q__&Key-Pair-Id=K1P54FZWCHCL6J`}
        linkedIn={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/879fa978-cc47-4d1e-b98b-11d0ca47ae45_1708270499923490198?Expires=-62135596800&Signature=EYYfTVbuFGJC-x8l2b7qbNpuzCcWdJ~YqzB-2Rwk3jbj0Xl2LQYsPtKg5RnAM1wZ9YichHVfsaubTGVNV-r2vF0Cb0dCWQZcMHbuxK5HdcIh6iQmXWX4HkW0udEoxNn5sKd68ZTcKlHYs-qcpyDidIg9xcd8uBMutQqX7CPWGodA7krdC~rK-xG35HJUcrJ7vb8MiiVPnlgBqrAtbsGDHnkRJyO8RQ1~RDC3i9SyDiVczutDLfvk8NklGof7Ik9Bx8d9M3zhLjh3Ud4VHy~S1~wdT~ilgg2e2k-v6AJn80uHttRgWU2pfezs6vyHuU-UXToKW2XrGe2TKRArud9LPg__&Key-Pair-Id=K1P54FZWCHCL6J`}
        instagram={`https://d1xzdqg8s8ggsr.cloudfront.net/65d21b38de8cea67ca872163/28c03279-a579-4726-a333-1077e3cb3c68_1708270499923569125?Expires=-62135596800&Signature=viGIlNsqwj5FCWnoFdZ18K-9FrgFpDNLshap6Vc7c5nL3tdAuth0sY0~dIyo8Fh6Fjrucfi01lGacll4Md9fZI0JTEo66oLkT9RX~daH49rciyZvDF3PaCoPJGA-pC76nzDC0WYKXXLL8DltZZH0l7~goRccG5cvnv9cQywto90vWzeLj~GmNBfBPuRr7zl8V6c4KYr4dl1BK9vWkyaHawJv4ZaD1Ssc-RI0EX9sKmV3FdKcHvQkKPw~pJxsZV5Ky9e~CLVTLU6kwGRA~KCxksCJjtoMcWugnCIgRXxrGj8sc7lK6~CXlYtx2ajMQO41FKv2xP8BujQl7EE5zpqIGw__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
    </div>
  );
};

export default AboutMe;
