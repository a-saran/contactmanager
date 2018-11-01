import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/textInputGroup';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })


    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        const updContact = {
            name,
            email,
            phone
        }
        const { id } = this.props.match.params;

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

        dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

        //clear state
        this.setState({
            name: '',
            email: "",
            phone: ''
        })

        this.props.history.push('/');
    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter name.."
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        placeholder="Enter email.."
                                        value={email}
                                        type="email"
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter phone.."
                                        value={phone}
                                        onChange={this.onChange}
                                    />

                                    <input
                                        type="submit"
                                        className="btn btn-light btn-block"
                                        value="Update Contact"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }


}
export default EditContact;