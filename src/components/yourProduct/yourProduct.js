import React , {Component} from 'react';
import data from '../../data/data.json';
import nike1 from '../../assets/nike1.png';
import trash from '../../assets/trash.png';
import './index.scss';


export default class YourProduct extends Component {
   
    render() {
             

        return (
          
            <div className='your-card cart-list-leave-active'>
                <div className='your-card__left'>
                    <div className='your-card__image' style={{backgroundColor: this.props.bgColor}}>
                        <img src={this.props.image} />
                    </div>
                </div>

                <div className='your-card__right'>
                    <div className='your-card__name'>
                    {this.props.name}
                    </div> 
                    <div className='your-card__price'> $
                    {this.props.price}
                    </div>     
                    <div className='your-card__action'>
                      <div className='your-card__math'>
                            <div className='your-card__button' onClick={() => {
                                this.props.countSub()
                               
                            }}>-
                            </div>
                            <div className='your-card__number'>{this.props.count}</div>
                            <div className='your-card__button' onClick={() => { 
                                 this.props.countAdd()
                            }}>+
                            </div>
                           
                      </div>
                        
                      <div className='your-card__remove' onClick = {() => {
                          this.props.onClick();
                            }}>
                        <img src={trash} />
                       
                      </div>
                    </div>

                </div>



            </div>

        );
    }
}