import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    const { rowKeyProperty } = this.props;
    return item[rowKeyProperty] + (column.path || column.key);
  };

  render() {
    const { data, columns, rowKeyProperty } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item[rowKeyProperty]}>
            {columns.map((column, idx) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  rowKeyProperty: "_id"
};

export default TableBody;
