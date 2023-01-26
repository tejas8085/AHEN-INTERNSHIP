import React,{Fragment,useState} from 'react'
import "../About/About.css";
// import Member1 from '../images/ahenlogo.jpg';
// import Member2 from '../images/ahenlogo.jpg';
// import Member3 from '../images/ahenlogo.jpg';

// import img from './images/ahenbg.jpg';

const About = () => {
const [ toggleTab, setToggleTab] = useState(1)
const toggleState = (index) =>{
setToggleTab(index)
}
return (
<Fragment>

<section className="about">

<div className="row">

{/* <div className="column">
<div className="about-img"></div>
</div> */}

<div className="column">

<div className="tabs">

<div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
onClick = {() => toggleState(1)}
>
<h2>ABOUT US </h2>
</div>

<div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
onClick = {() => toggleState(2)}
>
<h2>OUR TEAM</h2>
</div>

<div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
onClick = {() => toggleState(3)}
>
<h2>SERVICES</h2>
</div>

</div>

<div className="tab-content">

{/* About Content */}

<div className={toggleTab === 1 ?"content active-content":"content"}>
<h3>WHO WE ARE</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
Eveniet nostrum laborum porro pariatur minima tenetur.
Adipisci obcaecati placeat ex veritatis est delectus sunt,
quam doloribus nemo sed perferendis ipsa corporis?
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Eveniet nostrum laborum porro pariatur minima tenetur.
Adipisci obcaecati placeat ex veritatis est delectus sunt,
quam doloribus nemo sed perferendis ipsa corporis?</p>
<h3>Lorem ipsum dolor sit amet. 
</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quae accusantium totam mollitia facilis debitis porro sunt repellat eveniet dignissimos.</p>
</div>

{/* team Content */}

<div className={toggleTab === 2 ?"content active-content":"content"}>
<h2>OUR TEAM</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
Eveniet nostrum laborum porro pariatur minima tenetur.
Adipisci obcaecati placeat ex veritatis est delectus sunt,
quam doloribus nemo sed perferendis ipsa corporis?</p>


</div>
{/* services Content */}

<div className={toggleTab === 3 ?"content active-content":"content"}>

<div className="ser-column">
<h3>driving licennse</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
</div>

<div className="ser-column">
<h3> driving School</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
</div>

<div className="ser-column">
<h3>abcdchs</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
</div>

</div>

</div>

</div>

</div>

</section>

</Fragment>
)
}

export default About  