import Header from "./Header/Header";
import styled from "styled-components";
import AboutCompany from './AboutCompany/AboutCompany';

const ContentWrapper = styled.div`
    padding:72px;
    `;

function Page() {
  return (
    <div className='flex-grow-1'>
      <Header/>
      <ContentWrapper className='container'>  {/* Bootstrap контейнер */}
        <AboutCompany/>  {/* Страница выбирается нажатием на сайдбаре. Сейчас это только AboutCOmpany. */}
      </ContentWrapper>
    </div>
  );
}

export default Page;