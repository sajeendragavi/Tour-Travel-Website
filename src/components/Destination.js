
import DestinationImg1 from "../Assests/the-madu-ganga-mangrove.jpg"
import DestinationImg2 from "../Assests/turtle.jpg"
import DestinationImg3 from "../Assests/Mask-Museum.jpg"
import DestinationImg4 from "../Assests/Galle-Fort.jpg"
 
import "./DestinationStyle.css"
import DestinationData from "./DestinationData"

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>

            <DestinationData

                className="first-des"
                heading = "Madu Ganga & Turtle Conservation Tour"
                text = "Explore the breathtaking beauty of Madu Ganga, a serene river safari through lush mangroves, home to diverse wildlife and ancient temples. Glide through scenic waterways, visit small islands, and witness the traditional cinnamon peeling process.

After the river safari,visit a sea turtle conservation center, where you can learn about Sri Lanka’s efforts to protect these endangered creatures. Get up close with different turtle species and even release baby turtles into the ocean.

A perfect blend of nature and conservation, this tour offers an unforgettable experience!"
            
            img1 = {DestinationImg1}
            img2 = {DestinationImg2}

            />

<DestinationData

                className = "first-des-reverse"
                heading = "Galle Heritage & Ambalangoda Mask Museum Tour"
                text = "Discover the rich history and vibrant culture of Sri Lanka with a visit to the historic Galle Fort, a UNESCO World Heritage Site. Stroll through charming colonial streets, explore ancient ramparts, and admire breathtaking ocean views.

Then, immerse yourself in the artistic heritage of Ambalangoda at the famous Mask Museum. Learn about Sri Lanka’s traditional mask-making craft, used in folklore and rituals for centuries.

This tour offers a perfect mix of history, culture, and craftsmanship for an unforgettable experience!"
            
            img1 = {DestinationImg3}
            img2 = {DestinationImg4}

            />

        </div>


    )
}

export default Destination;