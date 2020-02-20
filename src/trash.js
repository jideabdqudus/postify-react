import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super (props);
        this.addPost=this.addPost.bind(this);
        this.handlePost=this.handlePost.bind(this);
        this.state={
            posts:'',
            key:''
        }
    }
    handlePost(e){
        this.setState({
                posts:e.target.value,
                key:Date.now()  
        })

    }

    addPost(e){
        e.preventDefault();
        const newPost = this.state.posts;
        console.log(newPost)
    }
    
    render(){
        return(
            <div>
                <h1>Postify</h1>
                <form onSubmit={this.addPost}>
                    <input 
                        type="text" 
                        value={this.state.posts} 
                        onChange={this.handlePost}
                    />
                    <button
                        type="submit"
                    >
                    Add
                    </button>
                </form>
            </div>      
        )
    }
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