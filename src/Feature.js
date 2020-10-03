import React, {Component} from 'react';
import FeatureOption from './FeatureOption'

class Feature extends Component {
    render() {
       return Object.keys(this.props.features).map((feature, idx) => {
            return (<FeatureOption updateFeature={this.props.updateFeature} state={this.props.state} USCurrencyFormat={this.props.USCurrencyFormat} idx={idx} features={this.props.features} feature={feature}/>)
        });
    }
}

export default Feature