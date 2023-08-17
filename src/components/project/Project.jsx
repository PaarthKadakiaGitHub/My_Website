import React, { Component } from 'react';
import projectStyles from './Project.module.css';
import styled from 'styled-components'

import bugtracker from './bugtracker.png'
import django from './django.png'

class Project extends Component {
  render() {
    const numbers = [{id: -1, content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi cumque rem quisquam officia distinctio provident, iusto quidem sequi. Corporis numquam architecto praesentium dolores quae quidem voluptatum dolor maiores cupiditate alias, aliquid amet tempore cumque quas, sunt molestiae eaque dolore rerum saepe facilis! Ex dolore ", image: bugtracker,
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
    ]}, 
    {id:0, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi cumque rem quisquam officia distinctio provident, iusto quidem sequi. Corporis numquam architecto praesentium dolores quae quidem voluptatum dolor maiores cupiditate alias, aliquid amet tempore cumque quas, sunt molestiae eaque dolore rerum saepe facilis! Ex dolore', image: django,
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
    {id: 1, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi cumque rem quisquam officia distinctio provident, iusto quidem sequi. Corporis numquam architecto praesentium dolores quae quidem voluptatum dolor maiores cupiditate alias, aliquid amet tempore cumque quas, sunt molestiae eaque dolore rerum saepe facilis! Ex dolore', image: bugtracker,
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
    const tags = [['ye', 'ya', 'yo'], ['ho', 'ha' ,'hi'], ['ka', 'ki', 'ko']]
    console.log(tags[1][0])
    return (
      <body className={projectStyles.body}>
        <div >
          <div className={projectStyles.h3}>Projects</div>
        </div>
      <div className={projectStyles.container}>


        {numbers.map((num) => (
          <div
            key={num.id}
            className={projectStyles.card}
            style={{ '--i': num.id, '--j': num.id + 1 }}
          >
            <div className={projectStyles.content}>
              <div ><img className={projectStyles.image} src={num.image}></img></div> 
              <h2 className={projectStyles.h2}>Card {num.id + 2}</h2>
              <p className={projectStyles.p}>
                {num.content}
                </p>
                <p>
                  &nbsp;
                </p>
            {num.tags.map((tag) => (
            <p
              // key={tag[]}
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