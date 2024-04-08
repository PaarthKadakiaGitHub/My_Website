import React, { Component } from 'react';
import projectStyles from './Project.module.css';
import styled from 'styled-components'

import bugtracker from './bugtracker.png'
import django from './django.png'
import mywebsite from './mywebsite.png'
import { github } from "../../assets";


class Project extends Component {
  render() {
    let i = 0;
    const numbers = [{id: -1, name: 'Bug Tracker', content: "Simple ASP.NET website created to track and store bugs from projects I've built. Levels of authorization and authentication are involved so multiple people can be registered to track their individual bugs. MVC architecture used connected to an SQL database and supports CRUD operations.", image: bugtracker,
    source: "https://github.com/PaarthKadakiaGitHub/BugTracker",
    tags: [
      {
        name: "ASP.NET Core 6 MVC",
        color: "blue-text-gradient",
      },
      {
        name: "Microsoft SQL",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      }
    ]}, 
    {id:0, name: 'Social Media Website', content: 'Created an instagram like social media platform which has user login and signup to post pictures and see pictures of other friends that they follow. There also is a recommendation bar for other PKMedia users. You can like and comment under other user posts and the user who posted updating the database to all users. ', image: django,
    source: "https://github.com/PaarthKadakiaGitHub/Social-Media-App",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }
    ]}
    , 
    {id: 1, name: 'My Website',content: 'A react based website utilizing lots of javascript libraries that create for an immersive experience. GSAP libraries are added to create the load in animation when seeing the website and Tilt libraries are used for the smooth load in animation of the page elements and threeJS for the spinning globe', image: mywebsite,
    source: "https://github.com/PaarthKadakiaGitHub/Paarth_Website",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }
    ]}];
    return (
      <body className={projectStyles.body}>
        <div >
          <div className={projectStyles.h3} id='project'>Projects</div>
        </div>
      <div className={projectStyles.container}>


        {numbers.map((num) => (
          <div
            key={num.id}
            className={projectStyles.card}
            style={{ '--i': num.id, '--j': num.id + 1 }}
          >
            <div className={projectStyles.content}>
              <button onClick={() => window.open(num.source, "_blank")}>
              <div><img
                src={github}
                alt='source code'
                className={`${projectStyles.image2}`}
              /></div>
              <div className={projectStyles.circle}></div></button>
              <div ><img className={projectStyles.image} src={num.image}></img></div> 
              <h2 className={projectStyles.h2}>{num.name}</h2>
              <p className={projectStyles.p}>
                {num.content}
                </p>
                <p>
                  &nbsp;
                </p>
            {num.tags.map((tag) => (
            <p
              {...i++}
              key={num.id + i}
              className={ `${projectStyles.p1} text-[14px] ${tag.color}`}
            >
              #{tag.name}&nbsp;
            </p>))}
                
            </div>
          </div>
        ))}

      </div>
      </body>

    );
  }
}

export default Project;