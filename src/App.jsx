import { Post } from "./components/Post"
import { Header } from './components/Header'
import './global.css';
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/carloseduardob94.png',
      name: 'Carlos Eduardo',
      role: 'Software Developer NodeJs'
    },
    content: [
     { type: 'paragraph', content: 'Fala Galeraa 👋'},
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. O aprendizado é contínuo. 🚀'},
     { type: 'link', content: 'https://github.com/carloseduardob94'}, 
    ],
    publishedAt: new Date('2023-07-24 21:12:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
     { type: 'paragraph', content: 'Esse projeto está show. Components, estados, comunicação entre components, muita coisa legal. 👏'},
     { type: 'link', content: 'https://github.com/carloseduardob94'}, 
    ],
    publishedAt: new Date('2023-07-26 10:12:00')
  },
]

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App