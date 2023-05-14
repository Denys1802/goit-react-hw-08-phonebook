import { HomeContainer, HomeTitle, HomePageLink } from './Home.styled';

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>
        Hello, Welcome to Contacts Book aplication.In order to enter, you need
        to {<HomePageLink to="/register"> Registration </HomePageLink>} or{' '}
        {<HomePageLink to="/login"> Login </HomePageLink>}{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </HomeTitle>
    </HomeContainer>
  );
}
