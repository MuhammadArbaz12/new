import React from 'react'
import "../Constant/Hero.css"
import Heading from './Heading/Heading'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const Faqs = () => {
    return (
        <>
            <Heading Heading={"FAQ’s"} />

            <div className="faqs-container">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        What is Swift Invents?
                    </AccordionSummary>
                    <AccordionDetails>
                        Swift Invents is an e-commerce website offering a wide range of products, including fashion items for men and women, car parts, engine oil, and software services through our Swift Techs division.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        What types of fashion products do you offer?
                    </AccordionSummary>
                    <AccordionDetails>
                        We offer a variety of fashion items for men and women, including clothing, accessories, and footwear.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Can I return or exchange a fashion item?
                    </AccordionSummary>
                    <AccordionDetails>
                        Yes, you can return or exchange a fashion item within 30 days of delivery. See our return and exchange policy for details.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        What software services do you offer?
                    </AccordionSummary>
                    <AccordionDetails>
                        Our Swift Techs division offers a range of software services, including web design, development, and maintenance, as well as software consulting and solutions.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        What payment methods do you accept?
                    </AccordionSummary>
                    <AccordionDetails>
                        We accept major credit cards, including Visa, Mastercard, and American Express, as well as PayPal.
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default Faqs
