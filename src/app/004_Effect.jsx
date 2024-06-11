import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, VStack,Stack, Flex, Text,Center } from '@chakra-ui/react';

const midashi = "useEffect … コンポーネントを外部システムと同期させる"

const Sample1 =() => {
    const title = "サンプル① タイマーセット"

    const [currentValue,setValue] = useState(0);

    const countIncrement = () => {
        setValue((prevCount) => prevCount + 1);
        console.log("カウントが 1 上昇しました")
    }

    useEffect( () => {
    
        const timer = setInterval(countIncrement,1000)

        return() => {
            clearInterval(timer);
            console.log("useEffect timer削除")
        }
    },[])

    const handleReset = () => {
        setValue(0)
        console.log("カウンタリセット")
    }
    
    return (
        <VStack>
            <Flex w="100%" >{title}</Flex>
            
            <Center>現在の値：{currentValue}</Center>
            
            <Button w="100%" onClick={handleReset}>Reset</Button>

            <Flex w="100%" >※ブラウザデバッグコンソールを要確認</Flex>
        </VStack>

    )
}

const Effect = () => {
    return (
        
        <>
            <VStack margin="10px" alignItems="flex-start" spacing={5}>
                <Text fontSize="x-large">
                    {midashi}
                </Text>
                <Stack direction="row" spacing={10}>
                    <Sample1 />
                </Stack>
                
            </VStack>

        </>
    )

}

export default Effect;