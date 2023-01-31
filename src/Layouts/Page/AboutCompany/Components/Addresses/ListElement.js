import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    border: none;
    background-color: none;
    color: #0F172A;
`;
const OptionWrapper = styled.div`
    padding-right:12px;
`;
const ButtonRightWrapper = styled.div`
    margin-right:4px;
`;
function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch'>
            <OptionWrapper className='flex-grow-1'>
                <Option className='pе=0 my-3 text-rg'>{props.children}</Option>   
            </OptionWrapper>
            <ButtonRightWrapper>
            <IconOnlyButton icon={<EditIcon/>}/>
            </ButtonRightWrapper>
            <IconOnlyButton icon={<RemoveIcon/>}/>
        </div>
    );
}

export default ListElement;