import React, { Component } from "react";
import axios from 'axios';

class Search extends Component {

    state = {
        searchText: "",
        apiUrl: "https://pixabay.com/api/",
        apikey: "29606167-557fbe0f17fcfbbe495fbed6d",
        images: []
    };


    onTextChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            axios
                .get(
                    `${this.state.apiUrl}?key=${this.state.apikey}&q=${this.state.searchText}&image_type=photo&safesearch=true`
                )
                .then(res => this.setState({ images: res.data.hits }))
                .catch(err => console.log(err));

        });

    }

    render() {
        return (
            <>
                <div>
                    <input type="text"
                        style={{
                            bacgroundcolar: 'black',
                            color: 'black',
                            marginleft: 570,
                            margintop: 100,
                            paddingTop: 20,
                            paddingleft: 70,
                            fontSize: 30,
                            borderTopStyle: "hidden",
                            borderRightstyle: "hidden",
                            borderleftstyle: "hidden",
                            outline: "none",
                            borderBottomStyle: "groove",

                        }}
                        placeholder="search for images"
                        name="searchText"
                        value={this.state.searchText}
                        onChange={this.onTextChange}
                    />

                </div>

                <div>
                    {this.state.images.map(row => {
                        return (
                            <img src={row.largeImageURL} style={{ height: "500px", width: "500px" }} alt="" />
                        )
                    })}
                </div>
            </>
        )
    }


}

export default Search;