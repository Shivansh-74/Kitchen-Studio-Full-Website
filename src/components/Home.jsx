import Button from "../Reuable.jsx/Button";
import kitchen2 from '../static/kitechen2.jpg'
import kitchen3 from '../static/kitchen3.jpg'
import kitchen4 from '../static/kitchen4.jpeg'
import Card from "../Reuable.jsx/Card";
import img1 from '../static/1993.png'
import img2 from '../static/2000.png'
import Misnory from "../Reuable.jsx/Misnory";
import Contact from "./Contact";
import Test from "../Reuable.jsx/Test";
export default function Home() {
  return (
    <div>
    <div
    className=" home flex justify-center items-center"
    style={{
      backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6076b67bdeae82145e1916da/64c99d01-a54c-4814-afb8-9dd318915950/Web+8+door+semi+open+%C2%A9+ZACandZAC.jpg?format=1500w')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "90vh",
      width: "100%",
    }}
  >
    <div className="md:w-[35%] w-[90%] mt-5">
    <h1 className="md:text-2xl text-1xl text-white text-center py-2 ">You Dreame It We Design It</h1>
    <h1 className="md:text-5xl text-4xl  text-white text-center">Custom Kitchen</h1>
    <h1 className="md:text-5xl text-4xl text-white text-center">Made in India</h1>
    <div className="text-center py-4">
    <Button text="Book Now"/>
    </div>
    </div>

  </div>
  <div className="cards md:grid grid-cols-4 py-10 md:w-[98%] w-[100%] flex flex-col justify-center items-center">
  <div className="content col-span-2 flex flex-col items-center">
  <h1 className="w-[80%] text-3xl text-blue text-center py-16">GLOBALLY FAMOUS</h1>
  <p className="w-[80%] text-center pb-10">Globally-renowned for creating the statement kitchen, our kitchens have been loved by our customers for the last 40 years. Whether you prefer traditional or contemporary, you can be sure that with us your kitchen is the very best in British Luxury interior design.</p>
  <Button text="Explore"/>
  </div>
  <img src={kitchen2} alt=""  className="col-span-2 md:p-1 p-5"/>
  </div>

 <hr />
 
 <div className="cards md:grid grid-cols-4 py-10 md:w-[98%] w-[100%] flex flex-col justify-center items-center">
 <img src={kitchen3} alt=""  className="col-span-2 p-4"/>
  <div className="content col-span-2 flex flex-col items-center">
  <h1 className="w-[80%] text-3xl text-blue text-center md:py-16 py-6">THE ORIGINAL STATEMENT KITCHEN</h1>
  <p className="w-[80%] text-center pb-10">Globally-renowned for creating the statement kitchen, our kitchens have been loved by our customers for the last 40 years. Whether you prefer traditional or contemporary, you can be sure that with us your kitchen is the very best in British Luxury interior design.</p>
  <Button text="Explore"/>
  </div>
  </div>

<hr />

<div className="cards md:grid grid-cols-4 md:py-10 py-5 md:w-[98%] w-[100%] flex flex-col justify-center items-center">
<div className="content col-span-2 flex flex-col items-center">
<h1 className="w-[80%] text-3xl text-blue text-center py-16"> WORK LIKE PROFESSIONALS</h1>
<p className="w-[80%] text-center md:pb-10 pb-4">Globally-renowned for creating the statement kitchen, our kitchens have been loved by our customers for the last 40 years. Whether you prefer traditional or contemporary, you can be sure that with us your kitchen is the very best in British Luxury interior design.</p>
<Button text="Explore"/>
</div>
<img src={kitchen4} alt=""  className="col-span-2 md:p-1 p-5"/>
</div>


<div className="w-[100%] flex md:flex-row flex-col md:gap-2 gap-[30px] py-5 md:h-[350px] h-[700px] bg-gray-100 justify-center items-center">
<div className="flex flex-col justify-center items-center font-bold w-[230px]  h-[200px]"><h1 className="text-6xl font-bold">5+</h1><p>Experince</p></div>
<div className="flex flex-col justify-center items-center font-bold w-[230px]  h-[200px]"><h1 className="text-6xl font-bold">200
+</h1>Completed Projects
</div>
<div className="flex flex-col justify-center items-center font-bold w-[230px]  h-[200px]"><h1 className="text-6xl font-bold">5
k+</h1><p>Designs</p></div>
<div className="flex flex-col justify-center items-center font-bold w-[230px]  h-[200px]"><h1 className="text-6xl font-bold">
50
k+</h1><p>Sq Feet Realised
</p></div>
</div>


<div>
<h1 className="text-3xl font-semibold text-center py-5">Our Services</h1>
<div className="flex gap-10 justify-center py-5 md:flex-row flex-col  items-center">
<Card src={img1} head="Utensils" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo "/>
<Card src={img2} head="Wide Area" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo "/>
<Card src="https://saanviavs.com/wp-content/uploads/2023/08/Designing-Your-Dream-Modular-Kitchen.jpg" head="Best Lights" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo "/>
</div>
</div>







<div
className="home w-full h-[400px] bg-cover bg-center flex flex-col justify-center items-center"
style={{
  backgroundImage: `url('https://wurfelkuche.wordpress.com/wp-content/uploads/2022/08/google-ads-w600px-x-w314px_p2.jpg?w=1024')`,
}}
>
<h1 className="text-gray-200 md:text-2xl text-1xl">You dream It, we design It</h1>
<h1 className="md:text-5xl text-4xl font-bold text-center text-white py-5">We can build you <br />the kitchen of your dreams</h1>
<div>
<Button text='Book Apointment'/>
</div>
</div>


<Test/>



  </div>
  )
}
// https://www.clivechristianfurniture.com/rooms/statement-kitchens?gad_source=1&gclid=EAIaIQobChMIm_ny8pLNiQMVdF0PAh3soyH0EAMYASAAEgKxePD_BwE