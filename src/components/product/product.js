import React , {Component} from 'react';
import './index.scss';

export default class Product extends Component {
    
    render() {
    
       const Notifi = (props) => {
           if (props.msg === false) {
               return <button disabled className="shop__item-button inactive">
                            <div className="shop__item-button-cover">
                                <div className="shop__item-button-cover-check-icon"> </div>
                            </div>

                        </button>
           }
            return <button className="shop__item-button" onClick={ () => {
                        this.props.onClick();
                
                    }} >
                        
                        <p>ADD TO CART</p>
                        </button> 
       }

        return (
            <div className="shop__item">
                <div className="shop__item-image" style={{backgroundColor: this.props.bgColor}}>
                    <img src={this.props.image} alt="" />
                </div>
                <div className="shop__item-title">{this.props.name}</div>
                <div className="shop__item-desc">{this.props.content}
                </div>
                <div className="shop__item-bottom">
                    <div className="shop__item-price">$
                        {this.props.price}</div>
                        <Notifi msg={!this.props.checked} />                        
                
                </div>
            </div>
        );
    }

}