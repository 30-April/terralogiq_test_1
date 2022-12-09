import { Box, Button, Center, Text, VStack } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import jsCookie from "js-cookie"
import auth_types from "../../redux/reducer/types/auth"
import { useRouter } from "next/router"

const AdminPage = () => {
    const userSelector = useSelector((state) => state.auth)
    console.log(userSelector)

    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = () =>{
        jsCookie.remove("auth_token")
        
        dispatch({
            type: auth_types.AUTH_LOGOUT
        })
        router.push("/")
    }

    return (
        <Center>
            <VStack w='50%' mt={20} align='center'>
                <Text>Selamat Datang {userSelector?.role}, dengan username : {userSelector?.username}</Text>
                <Box w='full'>
                    <Button onClick={handleLogout}>Log out</Button>
                </Box>
            </VStack>
        </Center>
    )
}

export default AdminPage