import React, { useState } from "react";
import "./ConferenceEvent.css";
import TotalCost from "./TotalCost";
const ConferenceEvent = () => {
    const [showItems, setShowItems] = useState(false);
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const handleToggleItems = () => {
        console.log("handleToggleItems called");
        setShowItems(!showItems);
    };

  
    const handleAddToCart = (index) => {
        
    };

    const handleRemoveFromCart = (index) => {
       
    };
    const handleIncrementAvQuantity = (index) => {
    };

    const handleDecrementAvQuantity = (index) => {
    };

    const handleMealSelection = (index) => {
       
    };


    const calculateTotalCost = (section) => {
       
    };
    const getItemsFromTotalCost = () => {
        const items = [];
    };

    const items = getItemsFromTotalCost();

    const ItemsDisplay = ({ items }) => {

    };
   
    const navigateToProducts = (idType) => {
 
    }
    return (
        <>
            <navbar className="navbar_event_conference">
                <div className="company_logo">Conference Expense Planner</div>
                <div className="left_navbar">
                    <div className="nav_links">
                        <a href="#venue" onClick={() => navigateToProducts("#venue")} >Venue</a>
                        <a href="#addons" onClick={() => navigateToProducts('#addons')}>Add-ons</a>
                        <a href="#meals" onClick={() => navigateToProducts('#meals')}>Meals</a>
                    </div>
                    <button className="details_button" onClick={() => setShowItems(!showItems)}>
                        Show Details
                    </button>
                </div>
            </navbar>
            <div className="main_container">
                {!showItems
                    ?
                    (
                        <div className="items-infromation">
                            <div id="venue" className="venue_container container_main">
                                <div className="text">

                                    <h1>Gather Your Venue Requirements</h1>
                                </div>
                                <div className="venue_selection">
                                  
                                </div>
                                <div className="total_cost">Total Cost:</div>
                            </div>

                            {/*Necessary Add-ons*/}
                            <div id="addons" className="venue_container container_main">


                                <div className="text">

                                    <h1>Necessary Add-ons:</h1>

                                </div>
                                <div className="venue_selection">

                                </div>
                                <div className="total_cost">Total Cost:</div>

                            </div>

                            {/* Meal Section */}

                            <div id="meals" className="venue_container container_main">

                                <div className="text">

                                    <h1>Include Meals For The Event</h1>
                                </div>

                                <div className="input-container venue_selection">

                                </div>
                                <div className="meal_selection">

                                </div>
                                <div className="total_cost">Total Cost: </div>


                            </div>
                        </div>
                    ) : (
                        <div className="total_amount_detail">
                            <TotalCost totalCosts={totalCosts} handleClick={handleToggleItems} ItemsDisplay={() => <ItemsDisplay items={items} />} />
                        </div>
                    )
                }




            </div>
        </>

    );
};

export default ConferenceEvent;
