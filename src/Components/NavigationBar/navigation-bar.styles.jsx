import styled from 'styled-components';
import {Link} from 'react-router-dom';

import * as palette from '../../global-variables.styles';
export const NavigationContianer = styled.div`
    background-color:${palette.PRIMARY_COLOR};
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
`;


export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: end;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    color: white;
    padding: 10px 20px 10px 20px;

    &:hover{
        border-bottom: 3px solid white;
    }

    &:active{
        color: $secondary-color;
    }
`;


