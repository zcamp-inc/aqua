import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from "formik";
import {Box, Button, Flex, FormLabel, FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import { Layout } from '../src/components/Layout';

const Index = () => {
    const router = useRouter();
    const [name, setName] = useState('');

    function validateName(value: string){
        let error
        if(!value){
            error='name is required'
        } else if(value.toLowerCase() === 'john'){
            error = "SMPB John!!!"
        }
        return error
    };

    return (
      <Layout>
        <Formik
      initialValues={{ name: '' }}
      onSubmit={(values, actions) => {
        localStorage.setItem('name', values.name)
        setName(values.name)
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
        router.push('/chat')
      }}
    >
      {(props) => (
        <Box bg='white' mt={10} p={7} borderRadius='lg' h='300px'>
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }: { field: any , form: any}) => (
              <Box >
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Name</FormLabel>
                <Input {...field} placeholder='name' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
              </Box>
            )}
          </Field>
          <Flex justify='center'>
          <Button
            mt={4}
            colorScheme='blue'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>

          </Flex>

        </Form>
        </Box>
      )}
    </Formik>
    </Layout>

    )
}

export default Index;