import {useState} from 'react';

const Home = () => { 

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const addBlogHandler = () => {
        setBlogs( (prevValue) => {
            return [
            ...prevValue,            
            {title: 'React top tips', body: 'lorem ipsum...', author: 'luigi', id: 4 }
        ]
    })
    }    

    return ( 
        <div>
             {blogs.map( blog =>                
                <div key ={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <p>{blog.author}</p>                    
                </div>
            )}  
            <button onClick={addBlogHandler}>Add blog</button> 
        </div>
     );
}
 
export default Home;