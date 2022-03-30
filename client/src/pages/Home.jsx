import { Text, VStack } from "@chakra-ui/react";
import { Logo } from "../Logo";

export default function Home(){
    return (
        <>
        <Text fontSize={'4xl'}>Selamat datang di Final Chapter 8 Binar Academy</Text>
        <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
             Silahkan Klik Register Untuk membuat akun baru
            </Text>
          </VStack>
        </>
    )
}