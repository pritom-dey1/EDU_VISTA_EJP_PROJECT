import AllCourses from '@/Components/Courses/Alcourses'
import AllCoursesHero from '@/Components/Courses/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
        <AllCoursesHero />
        <AllCourses />
    </div>
  )
}

export default page