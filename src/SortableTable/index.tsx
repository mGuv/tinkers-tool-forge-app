import React from 'react';

import styles from './styles.module.css';

interface SortableTableProps<T> {
  columnInfo: ([keyof T, boolean] | keyof T)[]
  data: T[]
}

interface SortableTableState<T> {
  lastSort: keyof T
  reverse: boolean
}

function SortingIndicator({reverse = false}) {
  if (!reverse) {
    return (<i className="fas fa-angle-up"></i>)
  }
  else
  {
    return (<i className="fas fa-angle-down"></i>)
  }
}

class SortableTable<T> extends React.PureComponent<SortableTableProps<T>, SortableTableState<T>> {
  constructor(props: SortableTableProps<T>) {
    super(props);
    this.state = {
      lastSort: props.columnInfo[0] instanceof Array ? props.columnInfo[0][0] : props.columnInfo[0],
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

    let columns = this.props.columnInfo.map(k => k instanceof Array ? k : [k, true] as [keyof T, boolean]);

    return (
      <div className={styles.table} style={{gridTemplateColumns: `repeat(${this.props.columnInfo.length}, 1fr)` }}>
        { columns.map(key => {
          if (key[1]) {
            return (
              <div onClick={()=>this.sortBy(key[0])} key={key[0] as string} className={`${styles.tableHeaderCell} ${styles.sortableTableHeaderCell}`}>
                {key}{this.state.lastSort === key[0] && <SortingIndicator reverse={this.state.reverse}/>}
              </div>
            )
          }
          else {
            return (
              <div key={key[0] as string} className={styles.tableHeaderCell}>{key}</div>
            )
          }
          })
        }
        {
          sortedData.map(data => 
              columns.map(columnName =>
                <div className={styles.tableCell} key={columnName[0] as string} title={data[columnName[0]] as unknown as string}>
                  {data[columnName[0]]}
                </div>)
          )
        }
      </div>
    )
  }
}

export default SortableTable;