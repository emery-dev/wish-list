var Item = React.createClass({
  getInitialState() {
    return { editMode: false};
  },

  handleEdit() {
    if (this.state.editMode == true) {
      var id = this.props.item.id;
      var name = this.refs.name.value;
      var price = this.refs.price.value;
      var url = this.refs.url.value;
      var item = { id: id, name: name, price: price, url: url };

      this.props.handleUpdate(item);
    }
    this.setState({ editMode: !this.state.editMode });
  },

  render() {
    var name = this.state.editMode ? <td><input type='text' className="form-control" ref='name' defaultValue={this.props.item.name} /></td> : <td><p><a href={this.props.item.url} target="_blank"> {this.props.item.name}</a></p></td>;
    var price = this.state.editMode ? <td><input type='text' className="form-control" ref='price' defaultValue={this.props.item.price} /></td> : <td><p>{this.props.item.price}</p></td>;
    var url;
    if (this.state.editMode) {
      url = <td><input type='text' className="form-control" ref='url' defaultValue={this.props.item.url} /></td>;
    }

    return (
      <tr key={this.props.item.id}>
        {name}
        {price}
        {url}
        <td id="buttonItemHolder">
          <button className="btn btn-info" onClick={this.handleEdit}>{this.state.editMode ? 'Confirm' : 'Update' }</button>
          <button className="btn btn-danger" onClick={this.props.handleDelete}>Delete</button>
        </td>
      </tr>
    )
  }
});
