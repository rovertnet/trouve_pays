import React from 'react'
import Navigation from '../composants/Navigation'
import Logo from '../composants/Logo'
import "./about.css"
import Footers from '../composants/Footer'

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <div>
        <h1 id='h1' >A propos</h1>
        <div className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ea, rerum. Quo veniam maxime molestiae aliquam aperiam. 
          Aut nostrum cum mollitia pariatur doloremque, 
          dolorum ea error quas praesentium, 
          illum beatae! Incidunt.

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Quo, voluptates suscipit. 
          Rem sunt amet, 
          voluptatem quia nesciunt eum. 
          Maxime accusantium saepe id quo similique debitis 
          veritatis fuga ratione itaque sapiente?

          <br /><br />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Reprehenderit nostrum voluptate, ratione qui repudiandae 
          dolorum ad quae quaerat itaque asperiores quidem illum? 
          Asperiores dolorem exercitationem at cumque ipsum optio, 
          quibusdam ut repellendus consectetur, in nemo necessitatibus quia, 
          esse officia obcaecati fugit perferendis aperiam dolores. 
          Est, unde voluptatum! Unde qui vero adipisci consequuntur 
          et itaque commodi nemo officia eos sint laborum amet fugit dolorem nesciunt, 
          assumenda consequatur modi dolores exercitationem ad maxime. 
          Voluptatum exercitationem nam, quae molestias dignissimos, 
          tempore odio blanditiis eos eius ut iure labore numquam! Minus optio veniam debitis officia! Tenetur, 
          inventore magni! Nesciunt non culpa ratione ut nostrum.
        </div>
      </div>

     <Footers />

    </div>
  )
}

export default About