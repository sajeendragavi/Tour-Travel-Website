import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../Assests/ninearch.jpg"
import Trip2 from "../Assests/surfing-sri-lanka-surf.jpg"
import Trip3 from "../Assests/pictre elephant.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google maps.</p>

            <div className="tripcard">
                <TripData
                image = {Trip1}
                heading = "Nine Arches Scenic Tour"
                text = "Experience the breathtaking beauty of the iconic Nine Arches Bridge in Ella. Surrounded by lush green hills and tea plantations, this architectural marvel offers stunning views, especially as the train passes over the bridge. A perfect spot for photography and nature lovers!"
                />

<TripData
                image = {Trip2}
                heading = "Mirissa Surf Adventure"
                text = "Ride the waves at Mirissa, one of Sri Lanka’s top surfing spots! Whether you're a beginner or an experienced surfer, enjoy the warm waters, golden beaches, and perfect surf breaks in a tropical paradise."
                />

<TripData
                image = {Trip3}
                heading = "Elephant Safari Expedition"
                text = "Embark on an exciting elephant safari through Sri Lanka’s lush national parks. Witness majestic elephants roaming freely in their natural habitat, along with other wildlife, for an unforgettable wildlife adventure!"
                />


            </div>

        </div>
    )
}

export default Trip;