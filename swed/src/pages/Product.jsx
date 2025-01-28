import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Remove from "@mui/icons-material/Remove"
import Add from "@mui/icons-material/Add"
import { useLocation } from "react-router-dom"
import { useEffect,useState } from "react"
import { publicRequest } from "../requestMethod"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"

const Container = styled.div`
    
`
const  Wrapper= styled.div`
    padding:50px;
    display:flex;
`
const  ImageContainer= styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
`
const Title = styled.h1`
    font-weight:200;
`
const  Desc= styled.p`
    margin:20px 0px;
`
const  Price= styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterContainer = styled.div`
    width:50%;
    display:flex;
    justify-content:space-between;
    margin:30px 0px;
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin: 0px 5px;
    cursor:pointer;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    display:flex;
    align-items:center;
    width:50%;
    justify-content:space-between;
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`
const Button = styled.button`
    padding:15px;
    border: 2px solid teal;
    background-color:white;
    cursor:pointer;
    &:hover{
    background-color:teal;
    }
`
const Product = () => {
        const location = useLocation();
        const id = location.pathname.split("/")[2];
        const [product,setProduct]= useState({});
        const [quantity,setQuantity]= useState(1);
        const [color,setColor]= useState("");
        const [size,setSize]= useState("");
        const dispatch =useDispatch();
        useEffect(()=>{
            const getProduct = async()=>{
                try{
                    const res = await publicRequest.get("/products/find/"+id)
                    setProduct(res.data);

                }catch(err){
                    console.log("ERROR");
                }
            };
            getProduct();
        },[id])
        const handleQuantity=(type)=>{
            if(type==="dec" ){
               quantity>1 && setQuantity(quantity-1);
            }else{
                setQuantity(quantity+1);
            }
        }
        const handleClick=()=>{
            //Update Cart
            dispatch(

                addProduct({...product, quantity, color, size})
            )
        }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>
                    {product.title}
                </Title>
                <Desc>
                   {product.desc}
                </Desc>
                <Price>${product.price}</Price>
                <FilterContainer>
                    {/* <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color && Array.isArray(product.color) && product.color.map((c) => (
                             <FilterColor color={c} key={c} onClick={()=>setColor(c)} />
                            ))}


                        
                       
                      
                    </Filter> */}
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onClick={(e)=>setSize(e.target.value)}>
                        {product.size && Array.isArray(product.size) && product.size.map((s) => (
                             <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                        
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                <FilterTitle>Day</FilterTitle>
                    <AmountContainer>
                        <Remove onClick ={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick ={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>Add To Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
