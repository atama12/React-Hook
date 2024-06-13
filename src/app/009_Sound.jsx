import React from 'react'
import {useSound} from 'use-sound'
import { Button, VStack,Stack, Flex, Text,Input } from '@chakra-ui/react';
import Sounds from '../test.mp3'

const midashi = "useSound … コンポーネント内でオーディオの制御を行う"

const Sample1 = () => {
    const [play,{stop ,pause}] = useSound(Sounds);

    const title = "サンプル① 音声の再生、停止"

    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Stack direction="row">
                <Button onClick={() => play()}>play</Button>
                <Button onClick={() => stop()}>stop</Button>
                <Button onClick={() => pause()}>pause</Button>
            </Stack>
        </VStack>

    )
}
const Sample2 = () => {
    const [playBig] = useSound(Sounds,{volume:1});
    const [playMiddle] = useSound(Sounds,{volume:0.5});
    const [playSmall] = useSound(Sounds,{volume:0.2});

    const title = "サンプル② 音声の再生、停止"

    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Stack direction="row">
                <Button onClick={() => playBig()}>Big</Button>
                <Button onClick={() => playMiddle()}>Middle</Button>
                <Button onClick={() => playSmall()}>Small</Button>
            </Stack>
        </VStack>

    )
}
const Sample3 = () => {
    const [playFast] = useSound(Sounds,{playbackRate:2});
    const [playNormal] = useSound(Sounds,{playbackRate:1});
    const [playSlow] = useSound(Sounds,{playbackRate:0.5});

    const title = "サンプル② 音声の再生、停止"

    return (
        <VStack>
            <Flex w="100%" >
                {title}
            </Flex>
            <Stack direction="row">
                <Button onClick={() => playFast()}>Fast</Button>
                <Button onClick={() => playNormal()}>Normal</Button>
                <Button onClick={() => playSlow()}>Slow</Button>
            </Stack>
        </VStack>

    )
}
const Sound = () => {
    return (
        
        <>
            <VStack w="60%" margin="10px" alignItems="flex-start" spacing={5}>
                <Text fontSize="x-large">
                    {midashi}
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

export default Sound;