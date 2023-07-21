import React from 'react'
import Work from './Work'

import './MyWorks.sass'
import matrix from './../../res/img/matrix.svg'
import todo from './../../res/img/todo.png'
import classroom from './../../res/img/classroom.svg'
import electronix from './../../res/img/electronix.svg'
import paint from './../../res/img/paint.svg'
import mad3d from './../../res/img/mad3d.ico'

const MyWorks = (props) => {

  const works_set = [
    {
      class: 'c',
      projects: []
    },
    {
      class: 'c++',
      projects: [
        {
          name: 'matrix determinant solver',
          link: 'https://github.com/vjkaal/matrix_determinant_solver',
          img: matrix
        },
        {
          name: 'todo list application',
          link: 'https://github.com/vjkaal/todo_cpp',
          img: todo
        }
      ]
    },
    {
      class: 'java',
      projects: []
    },
    {
      class: 'python',
      projects: [
        {
          name: 'Google Classroom Automation',
          link: 'https://github.com/vjkaal/Google-Classroom-Automation',
          img: classroom
        }
      ]
    },
    {
      class: 'js',
      projects: [
        {
          name: 'mad3dstudio',
          link: 'https://www.mad3dstudio.com',
          img: mad3d
        },
        {
          name: 'electronix',
          link: 'https://github.com/vjkaal/electronix',
          img: electronix
        },
        {
          name: 'DrawIt',
          link: 'https://github.com/vjkaal/DrawIt',
          img: paint
        }
      ]
    },
    {
      class: 'react',
      projects: []
    }
  ]

  return (
    <div className='myWorks-container'>
      {works_set.map((work, index)=>{
        if(work.class === props.cc) return <Work key={index} class={work.class} projects={work.projects} />
      })}
    </div>
  )
}

export default MyWorks
