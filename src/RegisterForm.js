import React from 'react';


//create the state
export default class Form extends React.Component {
    state = {
        name: "",
        birthDate: "",
        email: "",
        hobbies: "",
        hometown: ""
    };

    //getting the values

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    //Submit function

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            name: "",
            birthDate: "",
            email: "",
            hobbies: "",
            hometown: ""
        });
        console.log(this.state);
    };

    //form function
    render() {
        return (
            <form>
                <label htmlFor="name"> Naam en achternaam </label>
                
                <input
                name="name"
                placeholder="Naam"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                />

                <label htmlFor="birthDate"> Geboortedatum </label>

                <input
                type="date"
                name="birthDate"
                placeholder="geboortedatum"
                value={this.state.birthDate}
                onChange={e => this.change(e)} 
                required/>


                <label htmlFor="email">Email</label>

                <input
                type="email"
                name= "email"
                placeholder="email"
                value={this.state.email}
                onChange={e => this.change(e)} 
                required/>

                <label htmlFor="hobbies">Hobby's en interesses</label>

                <input
                name= "hobbies"
                placeholder="hobby's en interesses"
                value={this.state.hobbies}
                onChange={e => this.change(e)} 
                required/>


                <label htmlFor="hometown"> Geboorteplaats</label>
                <input
                name= "hometown"
                placeholder="geboorteplaats"
                value={this.state.hometown}
                onChange={e => this.change(e)} 
                required/>     

                <a className="big-button" onClick={e=> this.onSubmit(e)}>Indienen</a>
                
            </form>
        )
    }
}