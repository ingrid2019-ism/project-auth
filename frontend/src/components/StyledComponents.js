import styled from 'styled-components/macro'
export const MainContainer = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 600px) {
  flex-direction: row;
}
`
export const Container = styled.div`
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
border-radius: 3px;
width: 50%;
background-image: linear-gradient(to right, #4CA3B0, #E1FAFA);
padding: 20px;
margin: 20px;
@media (min-width: 600px) {
  width: 25%;
}
`
export const Title = styled.h1`
font-family: 'Quicksand', sans-serif;
color: white;
margin-bottom: 50px;
font-size: 24px;
`
export const SmallTitle = styled.h3`
font-family: 'Quicksand', sans-serif;
color: #016952;
margin-bottom: 50px;
font-size: 19px;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
`
export const InputField = styled.input`
font-family: 'Quicksand', sans-serif;
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
border-radius: 3px;
border: none;
width: 60%;
margin-bottom: 15px;
padding: 5px
`
export const Button = styled.button`
font-family: 'Quicksand', sans-serif;
background: #3A7F8A;
color: white;
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
border-radius: 3px;
border: none;
width: 30%;
margin-top: 20px;
margin-left: 10%;
padding: 5px;
&:hover {
  cursor: pointer;
}
`
