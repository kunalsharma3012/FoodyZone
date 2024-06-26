import styled from "styled-components"
import "./App.css"
import { useEffect, useState } from "react";
import SearchResult from "./components/serachResult";

 export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [Data,setData] = useState(null);
  const [filterdata,setFilterdata] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [selectedBtn , setSelectedBtn] = useState("all");

  
  useEffect(()=>
  {
   
      const fetchFoodData = async ()=>{
        setLoading(true);
        
        
        try {
        const response = await fetch(BASE_URL);

        const json =await response.json();

        setData(json);
        setFilterdata(json);
        setLoading(false);
      } catch (error) {
          setError("Unable to fetch data from backend")
      }
      }

      fetchFoodData();

      
    },[])

    

    if(error) return <div>Error</div>
    if(loading) return <div>Loading...</div>

    const searchfood = (e) =>{
      const value = e.target.value;

      if(value == ""){
        setFilterdata(null);
      }

      const filter = Data?.filter((food) =>
          food.name.toLowerCase().includes(value.toLowerCase())
      )

      setFilterdata(filter);
    }


    const filtermeals = (type) => {
       
if(type == "all"){
  setFilterdata(Data);
  setSelectedBtn("all")
  return  ;
}
       

       const filteredmeal = Data?.filter((food) =>
        food.type.toLowerCase().includes(type.toLowerCase())
    )

    setFilterdata(filteredmeal)
    setSelectedBtn(type);
    }

    const filterbtn = [
      {
        name:"All",
        type:"all"
      },
      {
        name:"Breakfast",
        type:"breakfast"
      },
      {
        name:"Lunch",
        type:"lunch"
      },
      {
        name:"Dinner",
        type:"dinner"
      },
      {
        name:"Midnight",
        type:"midnight"
      }
    ]


  return(
    <>
<Container>
      <Topcontainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input onChange={searchfood} type="text"  placeholder="serach Food..." />
        </div>
      </Topcontainer>

      <FilterContainer>
      {  filterbtn.map((value) => (
       
        <Button 
        key={value.name} 
        onClick={() => filtermeals(value.type)}
        isSelected = {selectedBtn === value.type}>{value.name}</Button>
  ))}
       
      </FilterContainer>

    

    </Container>
   <SearchResult Data = {filterdata}/>
   </>
  )
};

export default App;

 export const Container  = styled.div`
max-width:1200px;
margin:0 auto;
`
const Topcontainer = styled.section`
min-height:140px;
display:flex;
justify-content:space-between;
align-items:center;
padding:16px;
`;
 

const FilterContainer = styled.section`
display:flex;
justify-content:center;
gap:15px;
padding-bottom: 40px;
`;

export const Button = styled.button`
background:${({ isSelected }) => (isSelected ? "green" : "#ff4343")};
color:white;
cursor:pointer;
padding:6px 12px;
border:1px solid black;
border-radius:5px;

`;

