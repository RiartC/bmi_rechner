import React, { useState } from "react";
import "./App.css";

function App() {
    // State für das Gewicht und die Größe
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    // BMI berechnen
    const calculateBmi = () => {
        if (weight && height) {
            // Größe in Meter umwandeln
            const heightInMeters = height / 100;
            const calculatedBmi = weight / (heightInMeters * heightInMeters);
            setBmi(calculatedBmi.toFixed(2));

            // BMI-Kategorie bestimmen
            if (calculatedBmi < 18.5) {
                setCategory("Untergewicht");
            } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
                setCategory("Normalgewicht");
            } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
                setCategory("Übergewicht");
            } else {
                setCategory("Adipositas");
            }
        } else {
            setBmi(null);
            setCategory("");
        }
    };

    return (
        <div className="App">
            <h1>BMI Rechner</h1>

            <div className="input-container">
                <div>
                    <label>Gewicht (kg):</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Gewicht in kg"
                    />
                </div>
                <div>
                    <label>Größe (cm):</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Größe in cm"
                    />
                </div>
            </div>

            <button onClick={calculateBmi}>Berechnen</button>

            {bmi && (
                <div className="result">
                    <h2>Dein BMI: {bmi}</h2>
                    <p>Kategorie: {category}</p>
                </div>
            )}
        </div>
    );
}

export default App;
