import React from 'react';
import '../App.scss';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            zipcode:'',
         }
        this.inputUpdated=this.inputUpdated.bind(this);

    }
    inputUpdated(e){
        const { value }=e.target;
        this.setState({zipcode: value});
    }
    render(){
        return (
            <section className="searchContainer">
                <div className="formContainer">
                    <form className="form">
                        <label htmlFor="zipcode" className="zipLabel">Enter Zip Code</label> 
                        <input
                            className="form-input"
                            type="input"
                            name="zipcode"
                            value={this.state.zipcode}
                            onInput={this.inputUpdated}
                            />
                    <button type="submit" className='search-btn'>See Pets!</button>
                    </form>
                </div>
                
            </section>
        )
    }
}

export default Search;