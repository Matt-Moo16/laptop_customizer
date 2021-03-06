import React, {Component} from 'react'

class SummaryOption extends Component {
    render() {
        return Object.keys(this.props.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.state.selected[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {this.props.USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });
    }
}

export default SummaryOption