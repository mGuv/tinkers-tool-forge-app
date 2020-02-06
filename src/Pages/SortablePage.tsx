import React from 'react';

interface SortablePageProps<T> {
  columnNames: (keyof T)[]
  data: T[]
}

interface SortablePageState<T> {
  lastSort: keyof T
  reverse: boolean
}

class SortablePage<T> extends React.PureComponent<SortablePageProps<T>, SortablePageState<T>> {
  constructor(props: SortablePageProps<T>) {
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
      <table>
          <thead>
            <tr>
                { this.props.columnNames.map(key => <th onClick={()=>this.sortBy(key)}>{key}</th>) }
            </tr>
          </thead>
          <tbody>
              { sortedData.map(row => <tr>{this.props.columnNames.map(key => <td>{row[key]}</td>)}</tr>) }
          </tbody>
      </table>
    )
  }
}

export default SortablePage;