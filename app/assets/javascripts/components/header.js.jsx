var Header = React.createClass({
  getInitialState() {
    return {
      editName: true,
      myName: localStorage.getItem('name') || ''
    };
  },

  handleSubmit(event) {
    if (this.state.myName != ''){
      this.setState({ editName: !this.state.editName });
    }
    event.preventDefault();
  },

  handleEditName(event) {
    this.setState({ myName: event.target.value });
    localStorage.setItem('name', event.target.value);
  },

  render() {
    var myName = this.state.editName ? <input type="text"
                                              className="form-control text-center"
                                              id="nameID"
                                              value={this.state.myName}
                                              placeholder="Chuck's"
                                              onChange={this.handleEditName} />
                                      : `${this.state.myName}`;
    var button;
    if (this.state.editName == false) {
      button = <h6><button onClick={this.handleSubmit} className="btn btn-info">Change Name</button></h6>;
    }
    return (
      <div id="header">
        <form onSubmit={this.handleSubmit}>
          <h1>{myName} Wish List <span className="glyphicon glyphicon-gift"></span></h1>
          {button}
        </form>
      </div>
    )
  }
})
