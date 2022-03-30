import {
    Button,
    FormControl,
    FormLabel,
    Input,
    useToast,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { useFormik } from 'formik';
  import { useState } from 'react';
  
  export default function RegisterPage() {
    const [userEdit, setUserEdit] = useState({});
    const toast = useToast();
    const formik = useFormik({
      initialValues: {
        username: '',
        email: '',
        experience: '',
        level: '',
      },
      onSubmit: values => {
        setUserEdit({
          username: values.username,
          password: values.password,
        });
  
        toast({
          position: 'top',
          title: `Berhasil mengubah data player ${userEdit.username}`,
          description: 'data kamu telah terubah disistem',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      },
    });
  
    return (
      <>
        <VStack spacing={8}>
          <Text fontSize={'4xl'}>Edit Player</Text>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="email" mt={'5'}>Username</FormLabel>
              <Input
                id="username"
                type="text"
                placeholder='Masukkan Username'
                value={formik.values.emusernameail}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="username" mt={'5'}>Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder='Masukkan Email'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="bod" mt={'5'}>Experience</FormLabel>
              <Input
                id="experience"
                type="text"
                placeholder='Masukkan Experience'
                value={formik.values.experience}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="gender" mt={'5'}>Level</FormLabel>
              <Input
                id="level"
                type="text"
                placeholder='Masukkan Level'
                value={formik.values.level}
                onChange={formik.handleChange}
              />
              <Button type="submit" mt={'5'}>Edit Player</Button>
            </FormControl>
          </form>
        </VStack>
      </>
    );
  }