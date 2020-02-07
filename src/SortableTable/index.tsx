import React from 'react';

import styles from './styles.module.css';

interface SortableTableProps<T> {
  columnNames: (keyof T)[]
  data: T[]
}

interface SortableTableState<T> {
  lastSort: keyof T
  reverse: boolean
}

function Rows<T>({rows, columnNames}: {rows: T[], columnNames: (keyof T)[]}) {
  let r = rows.map(row => {
    let rowKey = row[columnNames[0]] as unknown as string
    return (
      <tr key={rowKey}>
        {columnNames.map(key => 
          <td key={key as string}>{row[key]}</td>
        )}
      </tr>
    )
  })
  return <>{r}</>;
}

function SortingIndicator({reverse = false}) {
  if (!reverse) {
    return (<div>^</div>)
  }
  else
  {
    return (<div>v</div>)
  }
}

class SortableTable<T> extends React.PureComponent<SortableTableProps<T>, SortableTableState<T>> {
  constructor(props: SortableTableProps<T>) {
    super(props);
    this.state = {
      lastSort: props.columnNames[0],
      reverse: false
    }
  }

  sortBy(key: keyof T) {
    this.setState({
      lastSort: key,
      reverse: this.state.lastSort === key ? !this.state.reverse : false
    })
  }

  render() {
    let sortedData = this.props.data.sort((a: T,b: T) => {
      let s = a[this.state.lastSort] < b[this.state.lastSort] ? -1 : 1;
      if (!this.state.reverse)
        return s
      else
        return -s;
    });

    return (
      <table className={styles.table}>
          <thead>
            <tr>
                { this.props.columnNames.map(key => 
                  <th onClick={()=>this.sortBy(key)} key={key as string}>
                    <div className={styles.columnHeader} >
                      {key}
                      {this.state.lastSort === key && <SortingIndicator reverse={this.state.reverse}/>}
                    </div>
                  </th>) }
            </tr>
          </thead>
          <tbody>
            <Rows rows={sortedData} columnNames={this.props.columnNames} />
          </tbody>
      </table>
    )
  }
}

export default SortableTable;