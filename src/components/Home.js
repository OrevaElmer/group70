import React from "react"

export default function Home(){
    return(
        <>
        <section id="hero">
            <div id="hero-container">
            <h4>For your simple life pleasures,</h4>
            <h1>GROUP 70</h1>
            <h3>RESTUARANT</h3>
            <h4> got you covered</h4>
            </div>
        </section> 


        <section className="myRow">
            <div className="service-container">
                <div className="myCol4">
                    <div className="service-image">
                        <img src={ require("./img/breakfast-icon.png")} alt="breakfast-icon"/>
                    </div>
                    <div className="service-desc">
                        <h4>BREAKFAST</h4>
                        <p>Breakfast is served between 07:00am and 10:00am. <br/><br/>Our breakfast includes Bread Sandwich with a hot beverage, Akara and Pap, Instant noodles and egg, Moi-Moi with custard or pap, Cereal, Okpa and so forth.</p>
                    </div>
                </div>
                <div className="myCol4">
                    <div className="service-image">
                        <img src={require("./img/lunch-icon.png")} alt="lunch-icon"/>
                    </div>
                    <div className="service-desc">
                        <h4>LUNCH</h4>
                        <p>Lunch is served between 5.00pm and 7.00pm. <br/><br/>
                        Our lunch menu includes Rice and stew, Jollof rice and chicken, Boiled potato and tomato egg stew, Pounded yam with Egusi soup and so forth.</p>
                    </div>
                </div>
                <div className="myCol4">
                    <div className="service-image">
                        <img src={require("./img/dinner-icon.png")} alt="breakfast-icon"/>
                    </div>
                    <div className="service-desc">
                        <h4>DINNER</h4>
                        <p>Dinner is served between 5.00pm and 7.00pm. <br/><br/> 
                        Our lunch menu includes Fufu and egusi soup, Jollof rice, White rice and Sauce or stew, Edikaikong and Swallow, Porridge Yam and so forth</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="myRow">
            <div id="hotdish">
                <h1>Our Most Sort out dishes</h1>
                <hr/>
                <div className="hotdish-container">
                <div className="myCol3">
                    <img src={require("./img/hot-dishes/burger.jpg")} alt=""/>
                </div>
                <div className="myCol3">
                    <img src={require("./img/hot-dishes/fried-rice.jpg")} alt=""/>
                </div>
                <div className="myCol3">
                    <img src={require("./img/hot-dishes/jollof-rice.jpg")} alt=""/>
                </div>
                <div className="myCol3">
                    <img src={require("./img/hot-dishes/potato-chip.jpg")} alt=""/>
                </div>

                </div>
            </div>
        </section>

        <section className="myRow">
            <div id="staff">
                <h1>Our Friendly Staff</h1>
                <hr/>
                <div className="staff-container">
                    <div className="myCol3">
                        <div className="staff-image">
                            <img src={require("./img/staff/main-chef.jpg")} alt=""/>
                        </div>
                        <div className="staff-desc">
                            <h3> STEPHEN ROBERTS </h3>
                            <h5> Main Chef</h5>
                            <p> Controlling and directing the food preparation process and any other relative activities. Constructing menus with new or existing culinary creations ensuring the variety and quality of the servings. Approving and “polishing” dishes before they reach the customer.</p>
                        </div>
                    </div>
                    <div className="myCol3">
                        <div className="staff-image">
                            <img src={require("./img/staff/kitchen-manager.jpg")} alt=""/>
                        </div>
                        <div className="staff-desc">
                            <h3> LAURA MENDEZ </h3>
                            <h5> Main Chef</h5>
                            <p> Controlling and directing the food preparation process and any other relative activities. Constructing menus with new or existing culinary creations ensuring the variety and quality of the servings. Approving and “polishing” dishes before they reach the customer.</p>
                        </div>
                    </div>
                    <div className="myCol3">
                        <div className="staff-image">
                            <img src={require("./img/staff/pastry-chef.jpg")} alt=""/>
                        </div>
                        <div className="staff-desc">
                            <h3> ADAM ROBINSON </h3>
                            <h5> Pastry Chef</h5>
                            <p>Our Pastry Chef bakes various desserts in a kitchen within a restaurant or bakery. Their main duties include following recipes to create pastries, developing new and unique recipes to feature on the menu and keeping stock of the kitchen inventory.</p>
                        </div>
                    </div>
                    <div className="myCol3">
                        <div className="staff-image">
                            <img src={require("./img/staff/server.jpg")} alt=""/>
                        </div>
                        <div className="staff-desc">
                            <h3> CYNTHIA GRAY </h3>
                            <h5>Server</h5>
                            <p> OUr Server's attend to diners before, during, and after their meals by helping them place and pay for their orders. They also ensure the timely delivery of food and beverages by checking on their tables periodically throughout the service time.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}