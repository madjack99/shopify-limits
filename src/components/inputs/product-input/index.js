import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';

class ProductInput extends Component {
  loadProducts(input, callback) {
    setTimeout(function () {
      callback(null, {
        options: [
          {
            id: '11978396623',
            title: '5 Panel Camp Cap',
            handle: '5-panel-hat',
          },
        ],
        complete: true,
      });
    }, 5000);
  }

  onChange(product) {
    this.props.onChange(product);
  }

  render() {
    return (
      <AsyncSelect
        name='product'
        loadOptions={this.loadProducts.bind(this)}
        multi={this.props.multi || false}
        value={this.props.value}
        valueKey='id'
        labelKey='title'
        onChange={this.onChange.bind(this)}
        loadingPlaceholder='Enter the product name'
        placeholder='Enter the product name'
      />
    );
  }
}

export default ProductInput;
