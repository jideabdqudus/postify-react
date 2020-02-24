import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{
    constructor(props){
        super (props);
        this.addPost=this.addPost.bind(this);
        this.handleDeleteAll=this.handleDeleteAll.bind(this);
        this.handlePost=this.handlePost.bind(this);
        this.handleDeleteOne=this.handleDeleteOne.bind(this);
        this.state={
            posts:'',
            key: new Date(),
            msgs: []
        }
    }
    
    handleDeleteOne(key){
        const filter =this.state.msgs.filter(msg=>msg.key!==key);
        this.setState({
            msgs:filter
        })
    }
    handlePost(e){
        this.setState({
                posts:e.target.value
        })

    }

    handleDeleteAll(){
        this.setState({
            msgs:[]
        })
    }

    addPost(e){
        e.preventDefault();
        const newPost = this.state.posts;
        console.log(newPost)
        this.setState({msgs :  this.state.msgs.concat(this.state.posts)})
    }
    render(){
        const subtitle = 'Write something you would like to share'
        return(
            <div>
                    <Header subitle = {subtitle}/>
                    <form onSubmit={this.addPost}>
                        <input 
                            type="text" 
                            value={this.state.posts} 
                            onChange={this.handlePost}
                        />
                        <button type="submit">Add</button>
                </form>
                {
                    this.state.msgs.map((msg)=>
                    
                    <div><h1 key={this.state.key}>{msg}</h1><button onClick={this.handleDeleteOne()}>Delete</button> </div>)
                }
                <Delete
                msgs={this.state.msgs} 
                handleDeleteAll={this.handleDeleteAll}
                />
        </div>
            
        )
    }
}
 

















const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
};

Header.defaultProps={
    title:'Postify'
}

    

  const Delete =(props)=>{
      return(
          <div>
            <button onClick ={props.handleDeleteAll}>Delete All</button>
          </div>
      )
  }














// const Header =(props)=>{
//     return(
//      <h1>Postify</h1>
//     ) 
//  }

// class Postify extends React.Component{

//     constructor(props){ 
//         super(props);
//         this.state={
//             name: '',
//             email: ''
//         }
//         this.handleFormSubmitted=this.handleFormSubmitted.bind(this);
//         this.onChange = this.onChange.bind(this);
//     }

//     handleFormSubmitted=(event)=>{
//         event.preventDefault();
//         console.log(event.target.value);
//         this.setState({
//             posts:event.value
//         })
//     }
    
//     onChange = (event) => {
//         this.setState((_prev) => {
//             _prev.name = event.target.value;
//         });
//     }

//     render(){
//         return( 
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <form onSubmit={this.handleFormSubmitted}>
//                     <input name="name" onChange={() => this.onChange}/>
//                     <button onClick={this.onInput}>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }


ReactDOM.render(<App/>, document.getElementById('root'));