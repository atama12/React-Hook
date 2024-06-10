import React from 'react'
import { useState } from 'react';
import { NumberInput,NumberInputField,Button, VStack,Stack, Box } from '@chakra-ui/react';


const State = () => {
    const [currentValue,setValue] = useState(0);
    const [inputValue,setInputValue] = useState(0);

    const handleSubmit = () => {
        setValue(inputValue)
    }

    return (
        
        <>
            <VStack>
                <Stack>
                    <NumberInput>
                        <NumberInputField onChange={(e) => setInputValue(Number(e.target.value))} required={true}/>
                    </NumberInput>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Stack>
                <Box>現在の値：{currentValue}</Box>
            </VStack>

        </>
    )

}

export default State;