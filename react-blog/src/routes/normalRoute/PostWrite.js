import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Form, FormGroup, Label, Progress, Button, Input } from 'reactstrap'
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import { editorConfiguration } from '../../components/editor/EditorConfig'
import Myinit from '../../components/editor/UploadAdapter'

const PostWrite = () => {
    const { isAuthenticated } = useSelector((state) => state.auth)
    const [form, setValues] = useState({ title: "", contents: "", fileUrl: "" })
    const diapatch = useDispatch

    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        await e.preventDefault()
        const { title, contents, fileUrl, category } = form
    }

    const getDataFromCKEditor = (event, editor) => {
        console.log("editor")
    }

    return (
        <div>
            {isAuthenticated ? (
                <Form onSubmit={onSubmit}>
                    <FormGroup className="mb-3">
                        <Label for="title">Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            className="form-control"
                            onChange={onChange}
                        />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for="category">Category</Label>
                        <Input
                            type="text"
                            name="category"
                            id="category"
                            className="form-control"
                            onChange={onChange}
                        />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for="content">Content</Label>
                        <CKEditor
                            editor={ClassicEditor}
                            config={editorConfiguration}
                            onInit={Myinit}
                            onBlur={getDataFromCKEditor}
                        />
                        <Button
                            color="success"
                            block
                            className="mt-3 col-md-2 offset-md-10 mb-3"
                        >
                            ????????????
                        </Button>
                    </FormGroup>
                </Form>
            ) : (
                <Col width={50} className="p-5 m-5">
                    <Progress animated color="info" value={100} />
                </Col>
            )}
        </div>
    )
}

export default PostWrite

