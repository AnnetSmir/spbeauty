import styled from "styled-components";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

const AddressesWrapper = styled.div`
    width:453px;
    min-height:420px;
    border: 1px solid rgba(100, 116, 139, 0.12);
    border-radius: 8px;
    padding: 24px;
`;
const ContentWrapper = styled.div`
    height:266px;
`;   
function Addresses() {
    return (
        <AddressesWrapper>
            <div className='d-inline-flex flex-column w-100 gap-4'>
                <div className='title'>Адреса заведений</div>
                <ContentWrapper className='d-inline-flex flex-column gap-2'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </ContentWrapper>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </AddressesWrapper>
    );
}

export default Addresses;