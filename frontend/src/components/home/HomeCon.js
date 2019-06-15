export default class HomeCon extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
    }
  }
  componentDidMount(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange =  () => {
      if(xhr.status === 200 && xhr.readyState === 4){
        const {name,password} = JSON.parse(xhr.response).data
        this.setState({name,password})
      } else {

      }
    }
    xhr.open('get','/api/getuserifo')
    xhr.send();
  }
  render() {
    return (
      <ul>
        <li>name: {this.state.name}</li>
        <li>password: {this.state.password}</li>
      </ul>
    )  
  }
}