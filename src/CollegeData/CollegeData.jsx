import { useEffect, useState } from "react";
import CollegeGalleryCard from "../CollegeGalleryCard/CollegeGalleryCard";



const CollegeData = () => {

    const [CollegeData, setCollegeData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/college_card')
            .then(res => res.json())
            .then(data => {
                setCollegeData(data);
            })
    }, [])

    return (
        <div className="bg-gray-100  ">
            <h2 className="text-4xl font-bold text-center mb-9"> Our New </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10 mx-20 ">
                {CollegeData.slice(0, 3).map((College) => (
                    <CollegeGalleryCard key={College._id} College={College} />
                ))}
            </div>

        </div>
    )
}
export default CollegeData;