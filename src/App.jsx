import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Red Apple Stool',
          img: 'apple.jpg',
          desc: ' This can be combined as you like into a customised solution for you and your home',
          category: 'chair',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Armachair',
          img: 'futuristic.jpg',
          desc: 'A bold design with a strong character and charmingly rounded shapes, upholstered in an easy-care fabric.',
          category: 'armchair',
          price: '129.99',
        },
        {
          id: 3,
          title: 'Gray Sofa',
          img: 'gray.jpg',
          desc: 'We used resilient foam filling for comfort, thick grain leather on the contact areas because it looks amazing',
          category: 'sofa',
          price: '129.99',
        },
        
        {
          id: 4,
          title: 'Stool',
          img: 'stool.jpg',
          desc: 'Round and round you go! ',
          category: 'stool',
          price: '69.99',
        },
        {
          id: 5,
          title: 'Red Sofa',
          img: 'modern-sofa.jpg',
          desc: 'Warm and welcoming, neat and stylish. The perfect balance between comfort, functions and look.',
          category: 'sofa',
          price: '219.99',
        },
        {
          id: 6,
          title: 'Blue Sofa',
          img: 'blue-wall.jpg',
          desc: 'The BLUE sofa series has sections that can be combined as you like into a customised solution for you and your home.',
          category: 'sofa',
          price: '309.99',
        },
        {
          id: 7,
          title: 'Armchair',
          img: 'living-room.jpg',         
          desc: 'The wing chair offers a soft embracing feel and the footstool is nice to rest your feet on.',
          category: 'armchair',
          price: '149.99',
        },
        {
          id: 8,
          title: 'Armchair',
          img: 'armchair-room.jpg',
          desc: 'Combine the various functions of the series or match with other furniture in a traditional style.',
          category: 'armchair',
          price: '119.99',
        },
       
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
    <div className="wrap">
      <Header orders={this.state.orders}  onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer />
    </div>
  );
 }

 onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
 }


 chooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }

  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
 }

 deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
 }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }

}

export default App;
