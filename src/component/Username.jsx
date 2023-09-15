import {useState} from "react";
import { Input, Button,Heading } from "@chakra-ui/react";
import Userinfo from "./Userinfo";

const Username = () => {
    const[name,setName]=useState('')
    const[user,setUser]=useState('');
    const handlechange=(e)=>{
 setName (e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
      setUser(name)
   }
   
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <Input
          colorScheme='teal' variant='outline'
          placeholder="Username here"
          _placeholder={{ color: "inherit" }}
          width={{ base: "40%", sm: "25%", md: "25%" }}
          m={{ base: "30px", sm: "50px", md: "25px" }}ml={{sm:'35%',lg:"40%"}}
          height={{base:'5vh',sm:'5vh',lg:'7vh'}}
          onChange={handlechange}
        />
        <Button colorScheme='teal' size='md' type="submit"> Search </Button>
      </form>
      {!user?<Heading ml='45%' size='md' mt='20px'>please enter details...</Heading>:<Userinfo name={user}></Userinfo>}
      
    </div>
  );
};

export default Username;
