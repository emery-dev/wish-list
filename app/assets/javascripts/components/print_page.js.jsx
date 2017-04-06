var PrintPage = React.createClass({
//brute force from localStorage -
//concern: rerender issue
  render() {
    return (
      <div>
        <div id="header">
          <form onSubmit={this.handleSubmit}>
            <h1>{localStorage.getItem('name')} Wish List <span className="glyphicon glyphicon-gift"></span></h1>
          </form>
        </div>
        <PrintList />
      </div>
    )
  }
});
