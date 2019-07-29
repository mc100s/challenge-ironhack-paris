import React, { Component } from "react";
import axios from "axios";

export default class Celebrity extends Component {
  state = {
    celebrities: [],
    selectedId: null
  };
  handleClick(id) {
    this.setState({
      selectedId: id
    });
  }
  render() {
    let selectedContact;
    if (this.state.selectedId) {
      selectedContact = this.state.celebrities.find(
        c => c.id === this.state.selectedId
      );
    }
    return (
      <div>
        <h1>Celebrities</h1>
        <div className="grid">
          <div className="celebrities-list">
            <table>
              <tbody>
                {this.state.celebrities.map(c => (
                  <tr key={c.id} onClick={() => this.handleClick(c.id)}>
                    <td>
                      <img
                        src={"https://image.tmdb.org/t/p/w185" + c.profile_path}
                        alt=""
                      />
                    </td>
                    <td>{c.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="detail">
            {selectedContact && (
              <div>
                <h3>{selectedContact.name}</h3>
                <ul>
                  {selectedContact.known_for.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    for (let page = 1; page <= 10; page++) {
      axios
        .get(
          `https://api.themoviedb.org/3/person/popular?api_key=ac8d871bc92c64c3486c06e7c6f7224b&page=${page}`
        )
        .then(response => {
          this.setState({
            celebrities: [...this.state.celebrities, ...response.data.results]
          });
        });
    }
  }
}
