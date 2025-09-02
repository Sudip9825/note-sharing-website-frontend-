import React from 'react'
import './Catagories.css'
import subject_1 from '../../assets/program-1.png'
import subject_2 from '../../assets/program-2.png'
import subject_3 from '../../assets/program-3.png'
import subject_4 from '../../assets/program-4.png' // New image for Mathematics
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import program_icon_4 from '../../assets/program-icon-3.png' // New icon for Mathematics
import { Link as RouterLink } from 'react-router-dom';

const Catagories = () => {
  return (
    <div className='catagories'>
      <RouterLink to="/subject/mathematics" className="catagory-link">
        <div className='catagory'>
          <img src={subject_4} alt="" />
          <div className='caption'>
              <img src={program_icon_4} alt="" />
              <p>Mathematics Notes</p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/subject/c" className="catagory-link">
        <div className='catagory'>
          <img src={subject_1} alt="" />
          <div className='caption'>
              <img src={program_icon_1} alt="" />
              <p>C Programming Notes</p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/subject/cpp" className="catagory-link">
        <div className='catagory'>
          <img src={subject_2} alt="" />
          <div className='caption'>
              <img src={program_icon_2} alt="" />
              <p>C++ Programming Notes</p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/subject/java" className="catagory-link">
        <div className='catagory'>
          <img src={subject_3} alt="" />
          <div className='caption'>
              <img src={program_icon_3} alt="" />
              <p>Java Programming Notes</p>
          </div>
        </div>
      </RouterLink>
    </div>
  )
}

export default Catagories
