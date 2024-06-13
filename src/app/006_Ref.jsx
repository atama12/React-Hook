import React, { useState,useEffect,useRef } from 'react'
import { Button, VStack,Stack, Flex, Text,Input } from '@chakra-ui/react';

const midashi = "useRef … レンダリング不要な値の参照"

const Sample1 =() => {
    const title = "サンプル① 入力エリアのフォーカス"

    const inputRefObject = useRef(null)

    const handleSubmit = () => {
        inputRefObject.current.focus();
    }
    
    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Input variant='outline' placeholder='文字列を入力' backgroundColor="white" ref={inputRefObject}></Input>
            <Button w="100%" onClick={handleSubmit}>Submit</Button>
        </VStack>

    )
}
const Sample2 =() => {
    const title = "サンプル② テキスト入力時のレンダリング無し"

    const inputRefObject = useRef(null)
    const [text,setText] = useState("");

    useEffect(() => {
        console.log("rendered!")
    })
    const handleSubmit = () => {
        setText(inputRefObject.current.value);
    }

    const handleReset = () => {
        setText("");
        inputRefObject.current.value = "";
    }
    
    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Input variant='outline' placeholder='文字列を入力' backgroundColor="white" ref={inputRefObject}></Input>
            <Text>現在の値：{text}</Text>
            <Button w="100%" onClick={handleSubmit}>Submit</Button>
            <Button w="100%" onClick={handleReset}>Reset</Button>
        </VStack>

    )
}

const Ref = () => {
    return (
        
        <>
            <VStack w="60%" margin="10px" alignItems="flex-start" spacing={5}>
                <Text fontSize="x-large">
                    {midashi}
                </Text>
                <Stack direction="row" spacing={10}>
                    <Sample1 />
                    <Sample2 />
                </Stack>
                
            </VStack>

        </>
    )

}

export default Ref;