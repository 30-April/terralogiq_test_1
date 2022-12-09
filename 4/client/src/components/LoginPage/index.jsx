import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Box, Button, Center, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightAddon, Text, VStack } from "@chakra-ui/react"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { userLogin } from "../../redux/action/userLogin"



const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const userSelector = useSelector((state) => {return state.auth})

    const dispatch = useDispatch()
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },

        validationSchema: Yup.object().shape({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required")
        }),

        validateOnChange: false,

        onSubmit: (values) => {
            dispatch(userLogin(values, formik.setSubmitting))
        }
    })

    useEffect(() =>{
        if(userSelector?.role === "admin"){
            router.push("/admin")
        } else if (userSelector?.role === "guest"){
            router.push("/homepage")
        }
    }, [userSelector?.username])

    return (
        <Center h='100vh' p={5}>
            <VStack w='35%' h='55%' p={2} spacing={10} borderRadius='.5em' boxShadow='dark-lg'>
                <Box w='full' align='center'>
                    <Text fontSize={30}>Login</Text>
                </Box>
                
                <VStack w='90%' spacing={7}>
                    <FormControl>
                        <InputGroup>
                            <Input 
                                variant='filled'
                                className="inputPlaceholder"
                                required 
                                rounded={'none'} 
                                onChange ={(event) => formik.setFieldValue("username", event.target.value)}
                            />
                            <FormLabel className="labelPlaceholder">&nbsp;Username&nbsp;</FormLabel>
                        </InputGroup>
                        <FormHelperText textAlign={'left'} ml={3} color='red'>{formik.errors.username}</FormHelperText>
                    </FormControl>

                    <FormControl>

                        <InputGroup>
                            <Input 
                                variant='filled'
                                className="inputPlaceholder"
                                required 
                                rounded={'none'}
                                type={showPassword ? 'text' : 'password'}
                                onChange = {(event) => formik.setFieldValue("password", event.target.value)}
                            />
                            <FormLabel className="labelPlaceholder">&nbsp;Password&nbsp;</FormLabel>
                            <InputRightAddon 
                                cursor='pointer' 
                                backgroundColor='lightgray'
                                onClick={() => setShowPassword(!showPassword)}    
                            >
                                {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                            </InputRightAddon>
                        </InputGroup>
                        <FormHelperText textAlign={'left'} ml={3} color='red'>{formik.errors.password}</FormHelperText>
                    </FormControl>
                </VStack>

                <Box w='90%'>
                    <Button 
                        w='full' 
                        colorScheme='green'    
                        disabled={formik.values.password && formik.values.username ? false : true}
                        onClick={
                            formik.handleSubmit
                        }
                    >
                        Login!
                    </Button>
                </Box>
            </VStack>
        </Center>
    )
}

export default LoginPage