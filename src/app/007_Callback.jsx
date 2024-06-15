import React,{useCallback, useState} from 'react'
import { Button, VStack,Stack, Flex, Text} from '@chakra-ui/react';

const midashi = "useCallback … 関数定義をキャッシュし再レンダリングをスキップする"

const Buttons = React.memo(({counterState , buttonValue}) => {
    console.log(`${buttonValue}をクリックしました` )
    return <Button w="100%" onClick={counterState}>{buttonValue}</Button>
})

const Sample1 =() => {
    const title = "サンプル① ボタン関数メモ化"

    const [buttonA,setbuttonA] = useState(0);
    const [buttonB,setbuttonB] = useState(0);
    

    
    const incrementButtonA = useCallback(() =>
        setbuttonA(buttonA + 1),[buttonA]
    )
    const incrementButtonB = useCallback(() =>
        setbuttonB(buttonB + 1),[buttonB]
    )

    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Text>Aボタンのクリック数：{buttonA}</Text>
            <Text>Bボタンのクリック数：{buttonB}</Text>
            <Stack direction="row">
                <Buttons counterState={incrementButtonA} buttonValue="Aボタン" />
                <Buttons counterState={incrementButtonB} buttonValue="Bボタン" />
            </Stack>
        </VStack>

    )
}

const Sample2 =() => {
    const title = "サンプル② useCallback使わない場合"

    const [buttonA,setbuttonA] = useState(0);
    const [buttonB,setbuttonB] = useState(0);
    

    
    const incrementButtonA = () => {
        setbuttonA(buttonA + 1)
    }

    const incrementButtonB = () => {
        setbuttonB(buttonB + 1)
    }

    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Text>Aボタンのクリック数：{buttonA}</Text>
            <Text>Bボタンのクリック数：{buttonB}</Text>
            <Stack direction="row">
                <Buttons counterState={incrementButtonA} buttonValue="Aボタン" />
                <Buttons counterState={incrementButtonB} buttonValue="Bボタン" />
            </Stack>
        </VStack>

    )
}

const Callback = () => {
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
export const MobileCallback = () => {
    return (
        
        <>
            <VStack w="100%" margin="10px" alignItems="flex-start" spacing={5}>
                <Text fontSize="x-large">
                    {midashi}
                </Text>
                <VStack direction="row" spacing={10}>
                    <Sample1 />
                    <Sample2 />
                </VStack>
                
            </VStack>

        </>
    )

}
export default Callback;