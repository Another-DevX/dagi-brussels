'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollShadow } from "@nextui-org/react";
import MarkdownRenderer from './MarkdownRenderer';
import {CircularProgress} from "@nextui-org/react";


function Chat() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isMessageSended, setIsMessageSended] = useState(false)
    const { isPending, data, mutate } = useMutation({
        mutationKey: ['getBestColateral'],
        mutationFn: async () =>
            await axios.post('/api')
    })
    const handleGetBestCollaterals = () => {
        setIsMessageSended(true)
        setTimeout(() => {
            mutate()
        }, 2000)
    }

    const extractCollateralsAndCleanText = (text: string) => {
        // Regex para encontrar los tokens {{Token}}
        const regex = /\{\{(\w+)\}\}/g;
        let match;
        const collaterals: string[] = [];

        // Extraer tokens y limpiar el texto
        const cleanedText = text.replace(regex, (_, token) => {
            collaterals.push(token);
            return '';
        });

        return { cleanedText, collaterals };
    };
    return (
        <>
            <Button onClick={onOpen} className="font-semibold absolute bottom-5 right-5">
                Chat
            </Button>
            <Modal size='3xl' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent >
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-black">Supply ETH</ModalHeader>
                            <ScrollShadow size={0} hideScrollBar className='h-[60vh]'>
                                <ModalBody>

                                    <div className='flex flex-col gap-2 p-6 w-3/5 text-white bg-blue-600 rounded-lg rounded-bl-none  '>

                                        <p >You can get further assistance by our AI Specialiced DeFi Agent.</p>
                                        <p className='text-xs font-extralight'>Agent</p>
                                    </div>
                                    <div className='flex w-full justify-end'>
                                        {
                                            isMessageSended &&
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className='flex flex-col text-white justify-end align-end gap-2 p-6 w-3/5  bg-gray-400 rounded-lg rounded-br-none  '>
                                                <p >Give me please the best collaterals to borrow actually.</p>
                                                <p className='text-xs font-extralight'>User</p>
                                            </motion.div>
                                        }
                                    </div>

                                    {
                                        isMessageSended && (data || isPending) &&
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }} className='flex flex-col gap-2 p-6 w-3/5 text-white bg-blue-600 rounded-lg rounded-bl-none  '>
                                            {isPending ? 
                                            <div className='flex justify-center items-center'>
<div className="loader"></div>

                                            </div>
                                            :
                                                (() => {
                                                    const { cleanedText } = extractCollateralsAndCleanText(data?.data.responseData.choices[0].message.content);
                                                    return (

                                                        <MarkdownRenderer markdown={cleanedText} />

                                                    );
                                                })()
                                            }
                                        </motion.div>
                                    }

                                    {data && (() => {
                                        const { collaterals } = extractCollateralsAndCleanText(data?.data.responseData.choices[0].message.content);
                                        return (
                                            <div className='flex gap-2'>
                                                {collaterals.map((collateral, index) => (
                                                    <Button fullWidth key={index} variant='flat'>{collateral}</Button>
                                                ))}
                                            </div>
                                        )
                                    })()


                                    }

                                    {!isMessageSended &&
                                        <div className='w-full'>
                                            <Button onClick={() => handleGetBestCollaterals()} fullWidth variant='shadow'>
                                                Get best collaterals
                                            </Button>
                                        </div>}
                                </ModalBody>
                            </ScrollShadow>

                            <ModalFooter>
                                <Button fullWidth color="primary" onPress={onClose}>
                                    Cheers!
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>

    )
}

export default Chat
