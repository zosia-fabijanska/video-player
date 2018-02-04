import React, { Component } from 'react';
import styled from 'styled-components';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state={term:''};
    }

    
    render() {
        const InputContainer = styled.div`
            text-align: center;
            margin-bottom: 32px;
            margin-top: 32px;
        `;

        const Input = styled.input`
            min-width: 85%;
            border-radius: 3px;
        `;
        return(
            <InputContainer>
                <Input 
                value = {this.state.term}
                onChange={event => this.setState({ term: event.target.value })} 
                />
            </InputContainer>
        ) 
    }
}


export default SearchBar;