import React from 'react'
import Work from './Work'

const MyWorks = () => {

  const works_set = [
    {
      class: 'python',
      projects: [
        {
          name: 'Google Classroom Automation',
          link: 'https://github.com/vjkaal/Google-Classroom-Automation'
        }
      ]
    },
    {
      class: 'c++',
      projects: [
        {
          name: 'matrix determinant solver',
          link: 'https://github.com/vjkaal/matrix_determinant_solver'
        },
        {
          name: 'todo list application',
          link: 'https://github.com/vjkaal/todo_cpp'
        }
      ]
    },
    {
      class: 'html-css-js',
      projects: [
        {
          name: 'mad3dstudio',
          link: 'https://www.mad3dstudio.com'
        },
        {
          name: 'electronix',
          link: 'https://github.com/vjkaal/electronix'
        },
        {
          name: 'DrawIt',
          link: 'https://github.com/vjkaal/DrawIt'
        }
      ]
    }
  ]

  return (
    <div>
      {works_set.map((work, index)=>{
        return <Work key={index} class={work.class} projects={work.projects} />
      })}
    </div>
  )
}

export default MyWorks
