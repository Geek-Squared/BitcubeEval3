import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';

export default function AddStudent() {
    return (
        <Form>
            <FormGroup>
                <Label>Student Name</Label>
                <Input type="text" placeholder="Enter student name"></Input>
            </FormGroup>
            <Button type="submit">Add</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}