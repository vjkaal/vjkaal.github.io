import React from 'react'
import {Profile} from './Profile';
import { Quotes } from './Quotes';
import './css/IndexPage.css';

export const Index = () => {
  return (
    <div className="IndexPage">
      <Profile/>
      <Quotes/>
    </div>

  )
}
