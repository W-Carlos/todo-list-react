import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerItems = styled.div`
    background: #fff;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
        padding: 0;
        margin-top: 60px;
    }
`

export const Input = styled.input`
    width: 342px;
    height: 40px;
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    outline: none;
    padding-left: 20px;
    margin-right: 28px;

    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    color: #000000;
`

export const Button = styled.button`
    width: 130px;
    height: 40px;

    background: #8052EC;
    border-radius: 5px;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;

    color: #FFFFFF;
    cursor: pointer;
    border: none;
`

export const ListItem = styled.div`
    width: 500px;
    height: 60px;
    margin-bottom: 30px;
    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${ props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    text-decoration: ${ props => props.ischecked ? 'line-through' : 'none' };

    li {
        list-style: none;
    }
`