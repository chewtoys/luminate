import React from 'react'
import {useCreateAccountMutation} from '../graphql'
import {Input, Card, Button} from '@luminate/components'
import {Formik, Form, Field} from 'formik'
import {navigate} from 'gatsby'

interface RegisterFormProps {
  isModal?: boolean
}

const RegisterForm = ({isModal}: RegisterFormProps) => {
  const [createAccount] = useCreateAccountMutation()
  return (
    <Formik
      initialValues={{
        name: '',
        username: '',
        password: '',
      }}
      onSubmit={(values, {setSubmitting}) => {
        createAccount({variables: {input: values}})
          .then(res => {
            console.log(res)
            setSubmitting(false)
            navigate('/login')
          })
          .catch(err => {
            console.log({err})
          })
      }}
    >
      <Form>
        <Card>
          <div className="p-6">
            <div className="mb-4">
              <label className="block my-2" htmlFor="name">
                Account Name
              </label>
              <Field name="name" id="name" type="text" label="Account Name" as={Input} />
            </div>
            <div className="my-4">
              <label className="block my-2" htmlFor="username">
                Username
              </label>
              <Field name="username" id="username" type="text" label="Username" as={Input} />
            </div>
            <div className="my-4">
              <label className="block my-2" htmlFor="password">
                Password
              </label>
              <Field name="password" id="password" type="password" label="Password" as={Input} />
            </div>
          </div>
          <Card.Footer>
            <div className="flex justify-end mt-4 px-3">
              <div>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>
            </div>
          </Card.Footer>
        </Card>
      </Form>
    </Formik>
  )
}

export default RegisterForm
