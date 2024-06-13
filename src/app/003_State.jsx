import React from 'react'
import { useState,useEffect } from 'react';
import { NumberInput,NumberInputField,Button, VStack,Stack, Flex, Text,Center,Input } from '@chakra-ui/react';

const Sample1 =() => {
    const title = "サンプル① 数値の保持"

    const [currentValue,setValue] = useState(0);
    const [inputValue,setInputValue] = useState(0);

    const handleSubmit = () => {
        setValue(inputValue)
    }
    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <NumberInput>
                <NumberInputField placeholder="数値を入力" onChange={(e) => setInputValue(Number(e.target.value))} backgroundColor="white" required={true}/>
            </NumberInput>
            <Button w="100%" onClick={handleSubmit}>Submit</Button>
            <Center>Submitした時の値：{currentValue}</Center>
        </VStack>

    )
}

const Sample2 =() => {
    const title = "サンプル② カウントアップ・ダウン"

    const [currentValue,setValue] = useState(0);

    const handleCountUp = () => setValue((prevCount) => prevCount + 1);
    const handleCountDown = () => setValue((prevCount) => prevCount - 1);
    const handleCountReset = () => setValue(0);

    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Stack direction="row">
                <Button onClick={handleCountUp}>Up</Button>
                <Button onClick={handleCountDown}>Down</Button>
                <Button onClick={handleCountReset}>Reset</Button>
            </Stack>
            <Center>現在の値：{currentValue}</Center>
        </VStack>

    )
}

const Sample3 =() => {
    const title = "サンプル③ 文字列の保持"

    const [currentValue,setValue] = useState("Initialize String");


    useEffect(() => {
        console.log("rendering!!")
    })

    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Input variant='outline' placeholder='文字列を入力' backgroundColor="white" onChange={(e) => setValue(e.target.value)}></Input>
            <Center>現在の値：{currentValue}</Center>
        </VStack>

    )
}

const State = () => {


    return (
        
        <>
            <VStack w="60%" margin="10px" alignItems="flex-start" spacing={5}>
                <Text fontSize="x-large">
                    useState … 関数コンポーネントでstate管理（保持と更新）する、最も利用される
                </Text>
                <Stack direction="row" spacing={10}>
                    <Sample1 />
                    <Sample2 />
                    <Sample3 />
                </Stack>
                
            </VStack>

        </>
    )

}

export default State;