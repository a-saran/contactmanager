import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/textInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        const newContact = {
            name,
            email,
            phone
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);

        dispatch({ type: 'ADD_CONTACT', payload: res.data })

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
                                        value="submit"
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
export default AddContact;