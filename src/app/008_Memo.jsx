import React,{useMemo, useState} from 'react'
import { Button, VStack,Stack, Flex, Text } from '@chakra-ui/react';

const midashi = "useMemo … 計算結果をキャッシュし再レンダリングをスキップする"

const square = (params) => {
    const testData = [...Array(1000).keys()]

    testData.forEach(()=> {
        console.log(`[計算：B+1]がボタンクリックされ、square関数実行、
            ループ処理を${testData.length}回実行中。。。`)
    })

    return params * params
}

const Sample1 = () => {
    const title = "サンプル① useMemoを使う場合"

    const [buttonA,setbuttonA] = useState(0);
    const [buttonB,setbuttonB] = useState(0);
    

    
    const incrementButtonA = () => {
        setbuttonA((prevCount) => prevCount + 1);
        console.log("計算：A + 1ボタンがクリックされました")
    }

    const incrementButtonB = () => {
        setbuttonB((prevCount) => prevCount + 1);
        console.log("計算：B + 1ボタンがクリックされました")
    }

    const squareArea = useMemo(() => square(buttonB),[buttonB])

    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Text>Aボタンのクリック数：{buttonA}</Text>
            <Text>Bボタンのクリック数：{buttonB}</Text>
            <Stack direction="row">
                <Button onClick={incrementButtonA}>A+1</Button>
                <Button onClick={incrementButtonB}>B+1</Button>
            </Stack>
            <Text>計算：B × B ＝ {squareArea}</Text>
        </VStack>

    )

}
const Sample2 = () => {
    const title = "サンプル② useMemoを使わない場合"

    const [buttonA,setbuttonA] = useState(0);
    const [buttonB,setbuttonB] = useState(0);
    

    
    const incrementButtonA = () => {
        setbuttonA((prevCount) => prevCount + 1);
        console.log("計算：A + 1ボタンがクリックされました")
    }

    const incrementButtonB = () => {
        setbuttonB((prevCount) => prevCount + 1);
        console.log("計算：B + 1ボタンがクリックされました")
    }

    const squareArea = useMemo(() => square(buttonB))

    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Text>Aボタンのクリック数：{buttonA}</Text>
            <Text>Bボタンのクリック数：{buttonB}</Text>
            <Stack direction="row">
                <Button onClick={incrementButtonA}>A+1</Button>
                <Button onClick={incrementButtonB}>B+1</Button>
            </Stack>
            <Text>計算：B × B ＝ {squareArea}</Text>
        </VStack>

    )

}
const Memo = () => {
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
export const MobileMemo = () => {
    return (
        
        <>
            <VStack w="60%" margin="10px" alignItems="flex-start" spacing={5}>
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
export default Memo;