import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";
import styled from "styled-components";
const ContentWrapper = styled.div`
    width:447px;
    `;
function General() {
    return (
        <ContentWrapper className='d-inline-flex flex-column'>
            <Profile/> {/* Фото компании, название, тип и адрес */}
            <Preferences/> {/* Инпуты, где можно поменять название, тип и адрес */}
        </ContentWrapper>
    );
}

export default General;