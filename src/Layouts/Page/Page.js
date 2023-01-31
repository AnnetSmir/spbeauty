import Header from "./Header/Header";
import styled from "styled-components";
import AboutCompany from './AboutCompany/AboutCompany';

const ContentWrapper = styled.div`
    padding-top:64px;
    padding-left:72px;
    padding-right:72px;
    width:1140px;
    `;

function Page() {
  return (
    <div className='flex-grow-1'>
      <Header/>
      <ContentWrapper>  {/* Bootstrap контейнер */}
        <AboutCompany/>  {/* Страница выбирается нажатием на сайдбаре. Сейчас это только AboutCOmpany. */}
      </ContentWrapper>
    </div>
  );
}

export default Page;