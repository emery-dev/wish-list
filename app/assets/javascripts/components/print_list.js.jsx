var PrintList = React.createClass({
  getInitialState() {
    return { items: [] };
  },

  componentDidMount() {
    $.getJSON('./../api/items.json', (response) => {
      this.setState({ items: response })
    });
  },

  render() {
    var wishListTotalCost = 0;
    var printItems = this.state.items.map((item) => {
      wishListTotalCost = wishListTotalCost + Number(item.price);
      return (
        <div key={item.id} className="row">
          <div className="col-md-9" >
            <h1>{item.name}</h1>
            <h3><a href={item.url}>{item.url}</a></h3>
          </div>
          <div className="col-md-3">
            <h1>${item.price}</h1>
          </div>
        </div>
      )
    });

    return (
      <div className="container">
        <div>
          <a className="btn btn-info" href="./.." id="backToWishList">Back to Wish List</a>
        </div>
        {printItems}
        <h1 id="totalCost">Total Cost: ${wishListTotalCost}</h1>
      </div>
    )
  }
});
