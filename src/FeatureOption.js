import React, {Component} from 'react'
import FeatureButton from './FeatureButton'

class FeatureOption extends Component {
    render() {
        const featureHash = this.props.feature + '-' + this.props.idx;
        return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{this.props.feature}</h3>
              </legend>
              <FeatureButton 
                updateFeature={this.props.updateFeature}
                state={this.props.state} 
                USCurrencyFormat={this.props.USCurrencyFormat} 
                features={this.props.features}
                feature={this.props.feature}
                /> 
            </fieldset>
          );
    }
}

export default FeatureOption