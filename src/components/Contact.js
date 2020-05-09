import React, { Fragment } from 'react'
import styled from 'styled-components'
import { take, join } from 'ramda'
import { useForm } from 'react-hook-form'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 26px;
    grid-row-gap:26px;
    max-width: 1200px;
`

const Tags = styled.div`
    text-transform: uppercase;
    font-family: "Open Sans";
    font-size: 14px;
    color: black;
    text-align: center;
    font-weight: 600;
`



const Title = styled.div`
    font-family: "Rosarivo";
    font-size: 32px;
    color: black;
    text-align: center;
`

const Description = styled.div`
    font-family: "Rosarivo";
    font-size: 18px;
    color: black;
    text-align: center;
`

const Row = styled.div`
    height: 850px;

    ${Tags} {
        margin-top: 11px;
    }

    ${Title} {
        margin-top: 40px;
    }

    ${Description} {
        margin-top: 65px;
    }

`
const Image = styled.img`
    max-width:100%;
    height: auto;
`


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F6F5F3;
    padding-top: 66px;

`


const Line = styled.div`
    display: flex;
    flex-direction: column;
`

const Error = styled.div`

`

const Field = ({name, label, required, register, errors}) => {

    const placeholder = required && { placeholder: "required" }

    return (
        <Line>
            <Label>{label}</Label>
            <Input name={name} ref={register({ required })} {...placeholder} />
            {errors[name]?.type === "required" && <Error>{`${label} is required`}</Error>}
        </Line>
    )
}

const Input = styled.input`
    outline: none;
    padding-left: 5px;
    padding-top: 3px;
    ::placeholder {
        color: ${props => props.error && 'red' || 'grey'};
  }

`



const TextArea = styled.textarea`
    outline: none;
    padding-left: 5px;
    padding-top: 3px;
    border-color: #CBC9C3;
    resize: none;
    height: 200px;
`

const Form = styled.form`
    ${Line} {
        margin-bottom: 18px;
    }
`

const Label = styled.label`
    text-transform: uppercase;
    font-family: "Open Sans";
    font-size: 18px;
    color: black;
    font-weight: 600;

`

const MultilineField = ({name, label, required, register, errors}) => {

    const placeholder = required && { placeholder: "required" }
    debugger
    return (
        <Line>
            <Label>{label}</Label>
            <TextArea name={name} ref={register({ required })} {...placeholder} />
            {errors[name]?.type === "required" && `${label} is required`}
        </Line>
    )
}

const Submit = styled.input.attrs({ type: 'submit' })`
    outline: none;
    text-transform: uppercase;
    font-family: "Open Sans";
    background-color: transparent;
    font-weight: 600;
    font-size: 18px;
    color: #1D1D1D;
    letter-spacing: 0.5px;
    text-decoration: none;
    text-align: center;
    line-height: 58px;
    height: 58px;
    width: 225px;
    border-width: 1px;
    border-color: #D9D5D1;
    border-style: solid;
`

export default ({
    content
  }) => {

    const { register, handleSubmit, errors, reset } = useForm();

    const url = process.env.API_URL + '/contact'

    const onSubmit = async (data) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          if (response.status === 200) {
            reset()
          }


    }

    return (
        <Container>
            <Grid >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Field name="name" label="Name" required={true} register={register} errors={errors}/>
                    <Field name="email" label="Email" required={true} register={register} errors={errors}/>
                    <Field name="subject" label="Subject" required={true} register={register} errors={errors}/>
                    <MultilineField name="message" label="Message" required={true} register={register} errors={errors}/>
                    <Submit value="Submit"/>
                </Form>
            {
                "Hey!"
            }
            </Grid>
        </Container>
    )
  }