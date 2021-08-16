import React from 'react';
import ReactDOM from 'react-dom';

class EmploymentComponent extends React.Component{
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

   componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(
       result=>{
         this.setState({posts:result});
       }
     )
   }
  render(){   
    return(
      <div>
        <h2>posts</h2>
        <table> 
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
      
            {this.state.posts.map(post=>(
              <tr>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const element=<EmploymentComponent></EmploymentComponent>
ReactDOM.render(element,document.getElementById("root"));