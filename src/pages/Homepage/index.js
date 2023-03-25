import React from "react";
import Directory from "../../components/Directory";
const Homepage = (props) =>{
    const {currentUser} = props;
    return(
        <section>
            <Directory currentUser={currentUser}/>
        </section>
    )
}
export default Homepage;