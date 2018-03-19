import React from 'react';

// Style
import './about.css'

const About = (props) => {

    const developer = [
        { name: 'GitHub', url: 'https://www.github.com/ricardocanelas' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/canelas' }
    ];

    return (
        <article className="about">
            <div className="col col-left">
                <h1>About</h1>

                <p>This App allows you to select and categorize books you are currently reading, want to read,
                    or have read. You will be able to change a book status anytime, as well as add new titles
                    to your collection or remove items from your library. It also includes a search function
                    to add additional books.</p>

                <h3>Search Terms</h3>

                <p>For searching books, only some specific words are allowed. Here is the complete list:</p>

                <p>'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball',
                    'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes',
                    'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
                    'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
                    'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
                    'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King',
                    'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez',
                    'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry',
                    'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire',
                    'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time',
                    'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'</p>
            </div>

            <div className="col col-right">
                <h2>Project</h2>

                <p>This project is my implementation of the MyReads app which is the final assessment project for the
                    Udacity's React Fundamentals course, part of the <a href="https://udacity.com/course/nd019" target="_blank" rel="noopener noreferrer">
                    React Nanodegree Program</a>.
                </p>

                <p>You can fork or see the code in <a href="https://ricardocanelas.github.io/myreads" target="_blank" rel="noopener noreferrer">
                https://ricardocanelas.github.io/myreads</a></p>

                <h2>Developer</h2>

                <p>I am Brazilian/Portuguese. I am a Full Stack Web Developer with
                    over few years of professional experience. I also have a Bachelor's degree in Information Systems.
                    I am a multi-disciplinary creator of useful, curious and beautiful things.</p>

                <p>For more information, feel free to check any of these online profiles:</p>

                <ul>
                {developer.map((profile, index) => (
                    <li key={index}>
                        <a href={profile.url} target="_blank" rel="noopener noreferrer">
                            {profile.name}
                        </a>
                    </li>
                ))}
                </ul>
            </div>
        </article>
    )
}

export default About;