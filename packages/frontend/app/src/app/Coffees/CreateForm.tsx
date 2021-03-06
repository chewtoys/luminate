import React from 'react'
import {Formik, Form, Field} from 'formik'
import {Combobox, Card, Button, Input} from '@luminate/components'
import {
  useCreateCoffeeMutation,
  useListAllCountriesQuery,
  useListRegionsQuery,
  OperatorEnum,
  CreateCoffeeMutation,
  ListCoffeesDocument,
  CreateCoffeeInput,
} from '../../graphql'
import {useHistory} from 'react-router-dom'

interface CoffeeCreateFormProps {
  fields?: Array<keyof CreateCoffeeInput>
  initialValues?: Partial<CreateCoffeeInput>
  /* Add functionality when entity successfully creates - default is to redirect to detail view*/
  onCreateSuccess?: (data: CreateCoffeeMutation) => void
  /* Add functionality when entity fails to create */
  onCreateError?: (err: any) => void
  onCancel?: (dirty: boolean) => void
}

const CoffeeCreateForm = ({fields, initialValues, onCreateSuccess, onCreateError, onCancel}: CoffeeCreateFormProps) => {
  const history = useHistory()
  const [createCoffee, {data, error, loading}] = useCreateCoffeeMutation({
    refetchQueries: [{query: ListCoffeesDocument}],
    onCompleted: data => {
      if (onCreateSuccess) {
        onCreateSuccess(data)
      } else {
        history.push(`/coffees/${data.createCoffee?.id}`)
      }
    },
    onError: err => {
      if (onCreateError) {
        onCreateError(err)
      }
    },
  })

  const {
    data: countryData,
    error: countryError,
    loading: countryLoading,
    refetch: countryRefetch,
  } = useListAllCountriesQuery()
  const {data: regionData, error: regionError, loading: regionLoading, refetch: regionRefetch} = useListRegionsQuery()

  const countryOptions = countryData?.listCountries.edges.map(({node}) => {
    return {
      name: node?.name,
      value: node?.id,
    }
  })

  const regionOptions = regionData?.listRegions.edges.map(({node}) => {
    return {
      name: node?.name,
      value: node?.id,
    }
  })

  return (
    <Formik
      initialValues={{
        name: '',
        country: '',
        region: '',
        ...initialValues,
      }}
      onSubmit={async (values, {setSubmitting}) => {
        await createCoffee({
          variables: {
            input: {
              ...values,
              country: values.country?.length ? values.country : null,
              region: values.region?.length ? values.region : null,
            },
          },
        })
        setSubmitting(false)
      }}
      enableReinitialize
    >
      {({dirty, setFieldValue, values}) => {
        return (
          <Form>
            <Card>
              <div className="p-6">
                {!fields || fields.includes('name') ? (
                  <div className="mb-3">
                    <label className="block mb-2" htmlFor="name">
                      Name
                    </label>
                    <Field name="name" id="name" as={Input} />
                  </div>
                ) : null}
                {!fields || fields.includes('country') ? (
                  <div className="mb-3">
                    <label className="block mb-1" htmlFor="country">
                      Country
                    </label>
                    <Combobox
                      id="country"
                      options={countryOptions}
                      initialSelectedItem={countryOptions?.find(option => option.value === values.country)}
                      loading={countryLoading}
                      onChange={value => {
                        if (value.selectedItem) {
                          if (value.selectedItem.value !== values.country) {
                            setFieldValue('region', '')
                          }
                          regionRefetch({
                            query: [
                              {field: 'country', operator: 'eq' as OperatorEnum, value: value.selectedItem.value},
                            ],
                          })
                        }
                        setFieldValue('country', value.selectedItem?.value)
                      }}
                    />
                  </div>
                ) : null}
                {!fields || fields.includes('region') ? (
                  <div className="mb-3">
                    <label className="block mb-1" htmlFor="region">
                      Region
                    </label>
                    <Combobox
                      id="region"
                      options={regionOptions}
                      initialSelectedItem={regionOptions?.find(option => option.value === values.region)}
                      loading={regionLoading}
                      onChange={value => setFieldValue('region', value.selectedItem?.value)}
                    />
                  </div>
                ) : null}
              </div>
              <Card.Footer>
                <div className="flex justify-end">
                  <div className="order-1">
                    <Button type="submit" variant="primary">
                      Submit
                    </Button>
                  </div>
                  {onCancel ? (
                    <div className="mr-3">
                      <Button type="button" variant="outline" onClick={() => onCancel(dirty)}>
                        Cancel
                      </Button>
                    </div>
                  ) : null}
                </div>
              </Card.Footer>
            </Card>
          </Form>
        )
      }}
    </Formik>
  )
}

export default CoffeeCreateForm
