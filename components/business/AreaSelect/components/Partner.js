/**
* @file Partner 合作方组件
* @author 谢天
* @version 0.0.1
*/
/* eslint import/no-unresolved: 0*/
import React, { Component, PropTypes } from 'react';
import { Select } from '../../../basic/Select';
import { map, pickBy, isArray } from 'lodash';
/**
 * 组件属性申明
 *
 * @property {function} onChange
 * @property {(string|array)} value
 * @property {bool} multiple
 * @property {bool} showSearch
 * @property {bool} withAll
 * @property {array} data
 * @property {bool} showLable
 */
const propTypes = {
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  showSearch: PropTypes.bool,
  withAll: PropTypes.bool,
  data: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  showLable: PropTypes.bool,
};
/**
 * 展示组件
 * @export
 * @class Partner
 * @extends {React.Component}
 */
class Partner extends Component {
  constructor(props) {
    super(props);
    this.handleChange = (v) => {
      this.props.onChange && this.props.onChange(v, 'partner');
    };
  }
  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        <div style={{ display: 'inline-block', marginLeft: '5px', marginRight: '5px', fontSize: '12px' }}>{this.props.showLable ? '合作方：' : ''}</div>
        <Select
          multiple={this.props.multiple}
          showSearch={this.props.showSearch}
          showAll={this.props.withAll}
          data={map(this.props.data, item => pickBy(item, v => !isArray(v)))}
          onChange={this.handleChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

Partner.propTypes = propTypes;

export default Partner;
