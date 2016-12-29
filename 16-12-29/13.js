let Board = React.createClass({
    getInitialState(){
        return {ary: []}
    },
    aaa(){
        var a = this.refs.mtText.value;
        this.state.ary.push(a);
        this.setState({ary: this.state.ary})
    },
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>珠峰留言板</h1>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.ary.map(function (item, index) {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="panel-footer">
                    <input type="text" className="form-control" ref="mtText"/>
                    <button className="btn btn-primary" onClick={this.aaa}>留言</button>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Board/>, document.querySelector('#container'));

