import React , {Component} from 'react';
import './index.scss';
import nike from '../assets/nike.png';
import Product from '../components/product/product';
import YourProduct from '../components/yourProduct/yourProduct';
import dataD from '../data/data.json';


export default class GoldenShoe extends Component {

    constructor (props){
        super (props);
        this.state = {
            data: []
        }
    }

    handleOnClickProduct = (item) => {
        var data = this.state.data;
        data.push({
            ...item,
            count: 1
        });
        this.setState({
            data: data
        })
    }

    removeCard = (index) => {
        var data = this.state.data;
        data.splice(index, 1);
        this.setState({
            data: data
        })
        
    }

    countAdd = (index) => {
       
        var data = this.state.data;

        data[index].count ++;
        
        this.setState ({
            data: data
        })
       
    }

    countSub = (index) => {
        var data = this.state.data;
        if(data[index].count > 0){
            data[index].count --;
            this.setState ({
                data: data
            })
        }else{
            this.removeCard(index);
        }   
    }


    render() {
     var price = this.state.data.map((item) => item.price * item.count);

     var arraylist = this.state.data.map((items) => items.id);
    
     var sumWithInitial = price.reduce((previousValue, currentValue) =>  previousValue + currentValue, 0)

        return (
        <div className="wrapper">
            <section className="card">
            <div className="card__top">
                <img src={nike} alt="" />
            </div>
            <div className="card__title">Our Products</div>

            <div className="card__content">
                <div className="shop__items">
                    {dataD.shoes.map((item) => 
                        <Product name={item.name}
                        image={item.image} 
                        content={item.description} 
                        price={item.price} 
                        bgColor={item.color} 
                        onClick={()=>this.handleOnClickProduct(item)}
                        checked = {arraylist.includes(item.id)}
                        />
                    )}
                </div>
            </div>
        </section>

        <section class="card">
            <div class="card__top">
                <img src={nike} alt="" />
            </div>
            <div class="card__title"> Your cart
                <span class="card__title-price">
                $
                {sumWithInitial.toFixed(2)}
                </span>
            </div>
            <div class="card__content">
                <div class="card__content-empty">
                    {this.state.data.length === 0 &&  <p class="card__content-text">Your cart is empty.</p>}
                    
                </div>
                <div class="card__content-items">
                   
                  
                    {(this.state.data).map((item1, index) => 
                        
                        <YourProduct name={item1.name} 
                        bgColor={item1.color} 
                        image={item1.image} 
                        price={item1.price} 
                        priceAll={item1.price * item1.count} 
                        onClick={() => this.removeCard(index)} 
                        count={item1.count} 
                        countAdd = {() => this.countAdd(index)} 
                        countSub = {() => this.countSub(index)}
                        
                        />
                    )}

                  
                </div>
            </div>
        </section>
    </div>
);
    }
} 