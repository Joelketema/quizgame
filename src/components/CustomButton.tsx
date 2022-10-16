import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

type Props = {
    text: string,
    url?:string
}
const CustomButton = ({ text, url }: Props) => {
    
    const navigate = useNavigate()
    const handleClick = (): void => {
        navigate(url)
    }
    return (
        <Button onClick={handleClick} bg={"#FFBF00"} minWidth={"200px"} _hover={{backgroundColor:"#ff8300",color:"white"}}>
            {text}
        </Button>
    )
}

export default CustomButton