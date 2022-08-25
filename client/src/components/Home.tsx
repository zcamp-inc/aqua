import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from "formik";
import {Box, Button, FormLabel, FormControl, Input, FormErrorMessage } from "@chakra-ui/react"


const Home = () => {
    const router = useRouter();
    const [username, setUserName] = useState('');

    const handleSubmit = ({e}: {e: Event}) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        router.push('/chat');
    };
    function validateName({value}: {value: String}){
        let error
        if(!value){
            error='Name is required'
        } else if(value.toLowerCase() === 'john'){
            error = "SMPB John!!!"
        }
        return error
    };

    return (
        <Formik
      initialValues={{ name: 'Sasuke' }}
      onSubmit={(values, actions) => {
        handleSubmit
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }: { field: any , form: any}) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>First name</FormLabel>
                <Input {...field} placeholder='name' onChange={(e) => setUserName(e.target.value)} />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>

    )
}

export default Home;