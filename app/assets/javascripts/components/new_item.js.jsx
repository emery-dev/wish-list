var NewItem = React.createClass({
  handleClick(event) {
    event.preventDefault();
    var name = this.refs.name.value;
    var url = this.refs.url.value;
    var price = this.refs.price.value;
    $.ajax({
      url: 'api/items',
      type: 'POST',
      data: { item: { name: name, url: url, price: price }},
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },

  render() {
    return (
      <div className="text-center">
        <h2>Add a new item to your list</h2>
        <form className="form-inline">
          <input className="form-control" ref='name' placeholder='Enter the item' />
          <input className="form-control" ref='price' placeholder='Enter the price' />
          <input className="form-control" ref='url' placeholder='Enter the URL' />
          <button className="btn btn-success" id="submitButton" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    )
  }
});
