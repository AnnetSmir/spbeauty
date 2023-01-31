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
const OptionLeftWrapper = styled.div`
    padding-right:12px;
`;
function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch'>
            <OptionLeftWrapper className='flex-grow-1'>
                <Option className='pе=0 my-3 text-rg'>{props.children}</Option>   
            </OptionLeftWrapper>
            <IconOnlyButton icon={<EditIcon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/>
        </div>
    );
}

export default ListElement;