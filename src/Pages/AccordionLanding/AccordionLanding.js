import Accordion from "../../Components/Accordion/Accordion";

const items = [
    { id: 1, title: "First Accordion Item", message: "Hello this it's hidden message from first accordion" },
    { id: 2, title: "Second Accordion Item", message: "Hello this it's hidden message from second accordion" },
    { id: 3, title: "Third Accordion Item", message: "Hello this it's hidden message from third accordion" },

];



const AccordionLanding = () => 
{
   

return (
    <>
    <h1>Example Accordion:</h1>
    <p>You can change color</p>
    <Accordion accordionItems ={items}/>
    </>
)

}

export default AccordionLanding;