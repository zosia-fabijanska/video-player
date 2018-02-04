import React, { Component } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    text-align: center;
    margin-bottom: 32px;
    margin-top: 32px;
`;

const Input = styled.input`
    min-width: 75%;
    border-radius: 3px;
    border: 1px solid #ccc;
`;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            term:''
        };
    }
    
    render() {
        return(
            <InputContainer>
                <Input 
                value = { this.state.term }
                onChange = { event => this.onInputChange(event.target.value) } 
                />
            </InputContainer>
        ) 
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;