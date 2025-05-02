import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"
/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
    console.log(data)
    return (
        <>
            <Header />
            <main className="container">
               {data.map((d) =>
                <Entry
                    key = {d.id}
                    img={{ 
                        src: d.img.src, 
                        alt: d.img.src 
                        }} 
                    title = {d.title}
                    country ={d.country}
                    gooogleMapLink = {d.googleMapsLink}
                    dates={d.dates}
                    text={d.text}
                />)}
            </main>
        </>
    )
}