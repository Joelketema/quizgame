import { Box, Input, Button,Text,Image } from "@chakra-ui/react"
import { useState,useEffect,useRef} from "react"
import { Link, useNavigate } from "react-router-dom"
// import LoginButton from "../components/LoginButton"
// import logo from "../public/music.svg"
import { Auth } from "../components/Auth"
import axios from "axios";
import { Toaster } from "react-hot-toast"
import toast from "react-hot-toast"

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,useDisclosure,Tooltip
} from '@chakra-ui/react'  


const AuthForm = () => {

    const [haveAccount, setHaveAccount] = useState<boolean>(false)
   const navigate = useNavigate()
    const [pass,setPass] = useState<boolean>(false)

    useEffect(() => {
        if (localStorage.getItem("TOKEN")) {
           navigate("/")
        } 
        else
            setPass(true)
            
    })
    
    if (pass) {
        return (
            <>
              <Box w={"86vw"} color={"white"} position={"absolute"} top={0}bg={"#293745"} pt={"5"} right={0} h={"100vh"} display={"flex"}
    justifyContent={"center"}  alignItems={"center"}>
        
                    <Toaster
                        toastOptions={{
                            success: {
                                style: {
                                    background: 'green',
                                    color:"white"
                                },
                              },
                              error: {
                                style: {
                                      background: 'red',
                                      color:"white"
                                },
                              },
                                }}
                    />
                </Box>
                <Box position={"absolute"} w={"90%"} top={0} right={0}>
                    {haveAccount && <Login setHaveAccount={setHaveAccount} />}
                    {!haveAccount && <Signup setHaveAccount={setHaveAccount} />}
                </Box>

            </>
        )
    }
    else return <></>
}

function Login({ setHaveAccount } : {setHaveAccount:Function}) {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} textAlign={'center'} 
        w={"100%"}
            flexDirection={"row"}
            shadow={"md"} 
            mt={50}
        >
            <Box w={"fit-content"} justifyContent={"center"} gap={2} alignItems={"center"} display={"flex"} flexDirection={"column"} bg={"white"} h={"80%"} p={10} rounded={"lg"}>
                <Auth register={false} login={true} />
                <Text fontSize={"small"} cursor={"pointer"} onClick={onOpen}>Forgot your password?</Text>
                {/* <LoginButton text={"Login With Google"} /> */}
                <Button bg={"#FFBF00"} minWidth={"200px"} _hover={{backgroundColor:"#ff8300",color:"white"}} mt={5} onClick={()=>setHaveAccount(false)}> Don't have an account?</Button> 
           {isOpen && <ResetPassword  isOpen={isOpen}  onClose={onClose} />}
            </Box>
    </Box> 
        
    )
}
 

function Signup({ setHaveAccount } : {setHaveAccount:Function}) {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} textAlign={'center'}
        w={"100%"}
            flexDirection={"row"}
            shadow={"md"} 
            mt={50}
        >
            <Box w={"fit-content"}  bg={"white"} h={"80%"} p={10} alignSelf={"center"}  rounded={"lg"}>
                <Auth register={true} login={false} />
                <Button bg={"#FFBF00"} minWidth={"200px"} _hover={{backgroundColor:"#ff8300",color:"white"}} mt={5} onClick={() => setHaveAccount(true)}>have an account?</Button>
                {/* <LoginButton text={"Signup With Google"} /> */}
            </Box>
    </Box> 
        
    ) 
}

function ResetPassword({ isOpen, onClose } :{isOpen:boolean,onClose:()=>void}) {

    const cancelRef= useRef<HTMLButtonElement>(null)
    const [findEmail, setFindEmail] = useState<string>("")
    
    const handleFindEmail = (e:any) => {
        setFindEmail(e.target.value)
    }

    const handleRequest = () => {
        if (findEmail !== "") {
            axios.post("https://server-cproject.vercel.app/auth/forgotpassword", { "email": findEmail }).then(res => {
                console.log(res)
                res.status === 200 ? toast.success("A Password Reset Link has been sent to your Email") : toast.error("Invalid Email!")
            }).catch(e => {
                console.log(e)
                toast.error("Sorry an Expected Error Occured!")
            })
        }
        else {
            toast.error("Please Enter your Email")
        }
    }
    return (
        <>
  
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                 Enter your Email To Reset Your Password!
                </AlertDialogHeader>
    
                <AlertDialogBody>
                        
                                <Box display={"flex"} flexDirection={"column"} gap={3}>
                                    <Input value={findEmail} placeholder={"Enter Your Email"} onChange={handleFindEmail} type={"email"} />
                                </Box>   
                         
                  
  
                </AlertDialogBody>
    
                        <AlertDialogFooter>
                            
                  <Button ref={cancelRef}onClick={onClose}>
                    Cancel
                    </Button> 
                    
                  <Button colorScheme={"green"} onClick={handleRequest} ml={3}>
                    Reset My Password
                  </Button>
                    
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </>
      )
}

export default AuthForm