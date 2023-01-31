import TitledTextInput from "../../../../../../Components/TitledTextInput";
import TitledSelector from "../../../../../../Components/TitledSelector";
import PrimaryButton from "../../../../../../Components/PrimaryButton";
import styled from "styled-components";
const PrimaryButtonWrapper = styled.div`
    padding-top: 8px;
`;
function Preferences() {
    return (
        <div className='d-inline-flex flex-column gap-3 mt-5' style={{color: '#94A3B8'}}>
            <TitledTextInput title='Название компании' def='SPBEAUTY'/>
            <TitledSelector title='Тип организации' options={[
                'Салон красоты',
                'Парикмахерская'
            ]}/>
            <TitledTextInput title='Основной телефон для связи' def='+7 (912) 345-67-89'/>
            <PrimaryButtonWrapper>
            <PrimaryButton>Сохранить</PrimaryButton>
            </PrimaryButtonWrapper>
        </div>
    );
}

export default Preferences;