// var GroceryListItems = ['Cucumber', 'Milk', 'Chocolate']

// var GroceryList = (props) => {

//   var onListItemClick = (event) => {
//     console.log("how");
//   console.dir(event);
//   }

//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.groceryListItems[0]}</li>
//       <li>{props.groceryListItems[1]}</li>
//       <li>{props.groceryListItems[2]}</li>
//     </ul>
//   );
// };

// var App = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryList groceryListItems={GroceryListItems}/> // Here we are creating an instance of the `groceryList` component
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));



// class Layout extends React.Component {
//   constructor(props) {
//     super(props);
//     this.GroceryListItems = ['Cucumber', 'Milk', 'Chocolate'];
//   }

//   render() {
//     return (
//       <div>
//         <h2>Grocery List</h2>
//         <GroceryList groceries={this.GroceryListItems}/>
//       </div>
//     )
//   };

// }


// class GroceryList extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//       <ul>
//         {this.props.groceries.map(grocery =>
//           <li key={grocery}>{grocery}</li>
//         )}
//       </ul>
//     );

//   }
// }
//ReactDOM.render(<Layout />, document.getElementById("app"));

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.GroceryListItems = ['Cucumber', 'Milk', 'Chocolate'];
  }

  render() {
    return (
      <div>
        <h2>Grocery List</h2>
        <GroceryList groceries={this.GroceryListItems}/>
      </div>
    )
  };

}


class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.list = this.props.groceries.map(grocery => 
      <GroceryListItem key={grocery} name={grocery} />);
  }
  render() {
    return (
      <ul>
        {this.list}
      </ul>
    );

  }
}


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  onListItemClick() {
    this.setState({isClicked: !this.state.isClicked
    });
  }

  render() {
    var style = {
      textDecoration: this.state.isClicked ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} >{this.props.name}</li>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById("app"));










