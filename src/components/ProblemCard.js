import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Link } from 'react-router-dom';

const WhiteBox = styled(Link)`
    margin: 0 auto;
    width: 1000px;
    height: 50px;
    background-color: white;
    border-radius: 3px;
    margin-bottom: 5px;

    @media (max-width: 1400px){
        width: 700px;
    }

    @media (max-width: 1070px){
        width: 500px;
    }

    @media (max-width: 900px){
        width: 100%;
    }
    
    &:link{
        text-decoration: none;
    }
    &:visited{
        text-decoration: none;
    }
    &:hover{
        background-color: ${oc.gray[0]};
        text-decoration: none;
    }
    &:active{
        text-decoration: none;
    }
`

const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    box-sizing: border-box;
`

const Index = styled.h3`
    margin: 0;
    margin-right: 30px;
    margin-left: 10px;
    color: ${oc.red[5]};
    ${props => props.user?`color:${oc.green[5]}`:``};
`

const Title = styled.h3`
    margin: 0;
    color: ${oc.gray[9]};
`

const Spacer = styled.div`
    flex: 1;
`

const TryNum = styled.h3`
    margin: 0;
    color: ${oc.gray[9]};
`
const CorNum = styled.h3`
    margin: 0 10px;
    color: ${oc.gray[9]};
`

const numberFormat = (n) => {
    const str = "" + n;
    const  pad = "0000";
    return pad.substring(0, pad.length - str.length) + str;
}

const ProblemCard = ({index, title, tryNum, corNum, user}) => {
    return (

        <WhiteBox to={"/problem/"+index}>
            <CardWrapper>
                <Index user={user}>{numberFormat(index)}</Index>
                <Title>{title}</Title>
                <Spacer />
                <TryNum>시도 횟수 {tryNum}</TryNum>
                <CorNum>정답 횟수 {corNum}</CorNum>
            </CardWrapper>
        </WhiteBox>
    );
};

export default ProblemCard;