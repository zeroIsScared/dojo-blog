import {useState} from 'react';

const Home = () => { 

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    // eslint-disable-next-line no-unused-vars
    const [newBlog, setNewBlog] = useState({
        title: '',
        body: '', 
        author: '',
        id: 0,
    });

    const inputHandler = (event) => {
        const {name, value} = event.target;

        // eslint-disable-next-line no-const-assign
        setNewBlog  ( (prev) => {

            if (name === 'title') {                
                return {
                    ...prev, 
                    title: value,
                    id: blogs.length+1,
                }
    
            } else if (name === 'body') {
                return {
                    ...prev, 
                    body: value,
                }
            }else if (name === 'author') {
                return {
                    ...prev, 
                    author: value,
                }
            }
           
        })        
       
    }        
            
    const addBlogHandler = () => {

        setBlogs(   [
            ...blogs,
            newBlog
        ]
            
        )
    }    

    return ( 
        <div>
            <div>
                <input onChange={inputHandler} type="text" name = 'title' placeholder='write the title of your article'/> <br/>
                <input onChange={inputHandler}  type="text" name = 'body' placeholder='write your article here'/> <br/>
                <input  onChange={inputHandler} type='text' name = 'author' placeholder='write your name here'/>  <br/>
                <button onChange={inputHandler}   onClick={addBlogHandler}>Add blog</button> 
            </div>           

            {blogs.map( blog =>                
                <div key ={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <p>{blog.author}</p>                    
                </div>
            )}  
           
        </div>
    );
}
 
export default Home;