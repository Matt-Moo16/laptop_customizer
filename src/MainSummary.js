import React, {Component} from 'react';
import SummaryOption from './SummaryOption'
import SummaryTotal from './SummaryTotal'

class MainSummary extends Component {
    render() {
        return (
        <section className="main__summary">
        <h2>Your cart</h2>
        <SummaryOption state={this.props.state} USCurrencyFormat={this.props.USCurrencyFormat}/>
       <SummaryTotal state={this.props.state} USCurrencyFormat={this.props.USCurrencyFormat}/> 
      </section> 
      )
    }
}

export default MainSummary 