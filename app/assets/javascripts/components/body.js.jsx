var Body = React.createClass({
  getInitialState() {
    return { items: [] };
  },

  componentDidMount() {
    $.getJSON('/api/items.json', (response) => { this.setState({ items: response }) });
  },

  handleSubmit(item) {
    var updatedList = this.state.items.concat(item);
    this.setState({ items: updatedList });
  },

  handleDelete(id) {
    $.ajax({
      url: 'api/items/' + id,
      type: 'DELETE',
      success: () => {
        this.removeItem(id);
      }
    });
  },

  removeItem(id) {
    var updatedList = this.state.items.filter((item) => {
      return item.id != id;
    });
    this.setState({ items: updatedList });
  },

  handleUpdate(item) {
    $.ajax({
      url: '/api/items/' + item.id,
      type: 'PUT',
      data: { item: item },
      success: () => {
        this.updateItems(item);
      }
    });
  },

  updateItems(item) {
    var updatedItemList = this.state.items.filter((itemEditting) => {
      return itemEditting.id != item.id;

    });
    updatedItemList.push(item);
    this.setState({ items: updatedItemList });
  },

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <ItemList items={this.state.items}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleUpdate} />
      </div>
    )
  }
});
