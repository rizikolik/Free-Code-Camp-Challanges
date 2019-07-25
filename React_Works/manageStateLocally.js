class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange=this.handleChange.bind(this)
    this.submitMessage=this.submitMessage.bind(this)
  }
handleChange(e){
  this.setState({
    input:e.target.value
  })
}
submitMessage(){
  const message=this.state.input;
  this.setState({
    input:"",
    messages:this.state.messages.concat(message)
  })
}

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
  <input value={this.state.input} onChange={this.handleChange} />
  <button onClick={this.submitMessage}>ADD MESSAGE</button>
  <ul>
{this.state.messages.map((message)=>{
  return (<li>message</li>)
})}

  </ul>
      </div>
    );
  }
};