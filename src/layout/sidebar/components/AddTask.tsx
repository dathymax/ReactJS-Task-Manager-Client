import React from 'react'
import Form from '../../../components/data-entry/form'
import FormItem from '../../../components/data-entry/form/item'
import Input from '../../../components/data-entry/input/Input'
import Button from '../../../components/interactions/button/Button'
import { ITask } from '../../../types'

const AddTask = () => {
    const onFinish = (values: ITask) => {
        console.log(values)
    }

    return (
        <Form onFinish={onFinish}>
            <FormItem label='Task name' name='taskName'>
                <Input />
            </FormItem>

            <Button type='submit'>Create task</Button>
        </Form>
    )
}

export default AddTask