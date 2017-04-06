var ItemList = React.createClass({

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  handleEdit(item) {
    this.props.handleEdit(item);
  },

  render() {
    var items = this.props.items.map((item) => {
      return (
          <Item key={item.id}
                item={item}
                handleDelete={this.handleDelete.bind(this, item.id)}
                handleUpdate={this.handleEdit} />
      )
    });

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
        <div id="arrowPrintButtonHolder">
          <span className="glyphicon glyphicon-arrow-down"></span>
          <a className="btn btn-success" id="printWishList" href="./print">Print List</a>
        </div>
      </div>
    )
  }
})
