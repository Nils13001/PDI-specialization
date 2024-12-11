import React from 'react'
import Card from '../Components/Card'

const AboutPage = () => {
  return (
    <div>
      <table>
        <tr>
          <td><Card name={"ABC"} email={"abc@domain.com"} contact={"98706544XX"}/></td>
          <td><Card name={"XYZ"} email={"xyz@domain.com"} contact={"81106544XX"}/></td>
          <td><Card name={"IJK"} email={"ijk@domain.com"} contact={"97065894XX"}/></td>
        </tr>
      </table>
      
    </div>
  )
}

export default AboutPage