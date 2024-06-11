import React,{createContext, useContext, useState} from 'react'
import { Button, VStack,Stack, Flex, Text, Input } from '@chakra-ui/react';

const midashi = "useContext … コンポーネントツリーの様々な階層からContextに収容されたデータへアクセスする"
const ThemeContext = createContext('')

const Sample1 =() => {
    const title = "サンプル① コンポーネントその1"

    const theme = useContext(ThemeContext)

    return (
        <>
            <VStack backgroundColor={theme}>
                <Flex w="100%" >{title}</Flex>

                <Flex w="100%" >子コンポーネント</Flex>
            </VStack>
            <Sample2 />        
        </>

    )
}
const Sample2 =() => {
    const title = "サンプル② コンポーネントその2"

    const theme = useContext(ThemeContext)

    return (
        <VStack backgroundColor={theme}>
            <Flex w="100%" >{title}</Flex>

            <Flex w="100%" >サンプル①の子コンポーネント</Flex>
        </VStack>

    )
}
const Context = () => {

    const [theme,setTheme] = useState('white')
    const [inputValue,setInputValue] = useState('');

    const handleSubmit = () => {
        setTheme(inputValue)
    }
    return (
        
        <ThemeContext.Provider value={theme}>
            <VStack margin="10px" alignItems="flex-start" spacing={5}>
                <Text fontSize="x-large">
                    {midashi}
                </Text>
                <Stack direction="row" spacing={10}>
                    <Input variant='outline' placeholder='色を英語で入力,もしくはカラーコード入力' backgroundColor="white" onChange={(e) => setInputValue(String(e.target.value))}/>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Stack>
                
                <Stack direction="row" spacing={10}>
                    <Sample1 />
                </Stack>
                
            </VStack>
        </ThemeContext.Provider>
    )

}

export default Context;