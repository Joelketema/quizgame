import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

type Props = {
    text: String,
    url?:String
}
const CustomButton = ({ text, url }: Props) => {
    
    const navigate = useNavigate()

    return (
        <Button bg={"#FFBF00"} minWidth={"200px"} _hover={{backgroundColor:"#ff8300",color:"white"}}>
            {text}
        </Button>
    )
}

export default CustomButton