import {useState,useEffect } from "react"
// import axios from 'axios'
import { Card, Button, CardBody, CardFooter,Avatar,Stack,Heading,Text,Divider,ButtonGroup} from '@chakra-ui/react'

const Userinfo = (props) => {
    const [userData,setUserData]=useState([]);

   const user=props.name
  console.log(user)
    useEffect(()=>{
    //  axios.get(`https://api.github.com/users/${user}`)
    //  .then(resp=>setUserData(resp.data))
    //  .catch(err=>console.log(err))
    fetch(`https://api.github.com/users/${user}`).then
    (resp=>resp.json()).then(data=>setUserData(data))
    .catch(err=>console.log(err))
    },[user])

console.log(new Date(userData.created_at).toLocaleDateString().split('').reverse('').join(''))
   

     
  return (
    <div>
     
      <Card maxW='sm'height={{sm:'35vh',lg:'65vh' }}ml={{base:'5%',sm:'25%',lg:'40%'}}mt='10px' border='2px solid rgb(2, 142, 123)' backgroundColor='blue'  boxShadow='dark-lg'  rounded='md' bg='white'>
    
      <CardBody backgroundColor='black 300'>
      <Avatar size='2xl' ml='30%' border='2px solid teal' name='Segun Adebayo' src={userData.avatar_url}/>
        <Stack mt='6' spacing='3'>
        <Heading size='md' ml='30%'>{userData.login}</Heading>
         <Text ml='30%'>
       Name : {userData.name}
          </Text>
          <Text ml='32%'>Created : {new Date(userData.created_at).toLocaleDateString().split('').reverse('').join('')}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='10'>
          <Button variant='solid' colorScheme='blue'>
        Public repos-  {userData.public_repos} 
          </Button>
           
      
          <Button variant='solid' colorScheme='blue'>
          Public gists-{userData.public_gists}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
   
    </div>
  )
}

export default Userinfo