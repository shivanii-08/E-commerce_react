import { useSelector } from "react-redux";
// import CARDDATA from "../Reducer/reducer";
export default function Productdetails() {
    const myData = useSelector((state) => state.CARDDATA)
    return (
        <>
            <div className="container">
                <div className="row">
                    {myData.map((user) => {
                        <div>
                            <h1>{user.cardData.id}</h1>
                        </div>
                    })
                    }
                </div>
            </div>
        </>
    )
}