import { useState, useEffect } from "react";
import "./App.css";
import { Home, DeliveryInProgress, ConfirmSubmitRequest } from "./pages";
import { Route, Routes } from "react-router-dom";
import DeliveryDetails from "./pages/DeliveryDetails";
import DeliveryStatus from "./pages/DeliveryStatus";
import axios from "axios";
import { PhoneNumberProvider } from "./contexts/NumberContext";
import { PaymentMethodProvider } from "./contexts/PaymentContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [personDetailsInput, setpersonDetailsInput] = useState({});

  useEffect(() => {
    // setpersonDetailsInput(personDetails);
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const data = response.data.results[0];
        setpersonDetailsInput({
          firstName: data.name.first || "Davut",
          lastName: data.name.last || "Dağlaroğlu",
          photo: data.picture.large || "https://randomuser.me/api/portraits/med/men/43.jpg",
          sex: data.gender || "male",
          phoneNumber: data.phone || "+2349023600083",
          email: data.email || "davutdaglarouglu@gmail.com",
          vinNo: generateVinNo(),
          dob: new Date(data.dob.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          state: data.location.state || "Lagos",
          lga: data.location.city || "Kosofe",
          code: generateRandomNumber(),
          address: `${data.location.street.name}, ${data.location.street.number}` || "4819 Tunalı Hilmi Cd",
          pickupLocation: `${data.location.street.name}, ${data.location.street.number}` || "PVC-Pipe Logistics Office",
        });
      })
      .catch((error) => console.log(error));
  }, []);

  // Generates a random unique 10-character VIN number
  function generateVinNo() {
    const chars = "0123456789";
    let vin = "";
    while (vin.length < 10) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      if (vin.indexOf(randomChar) === -1) {
        vin += randomChar;
      }
    }
    return vin;
  }

  // function to get Delimition code
  function generateRandomNumber() {
    const firstTwo = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");
    const secondTwo = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");
    const thirdTwo = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");
    const lastThree = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    return `${firstTwo}-${secondTwo}-${thirdTwo}-${lastThree}`;
  }

  return (
    <PhoneNumberProvider>
      <PaymentMethodProvider>
        <div className="font-poppins">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/track"
              element={<DeliveryInProgress person={personDetailsInput} />}
            />
            <Route
              path="/details"
              element={<DeliveryDetails person={personDetailsInput} />}
            />
            <Route
              path="/confirm"
              element={<ConfirmSubmitRequest person={personDetailsInput} />}
            />
            <Route path="/status" element={<DeliveryStatus />} />
          </Routes>
          <ToastContainer />
        </div>
      </PaymentMethodProvider>
    </PhoneNumberProvider>
  );
}

export default App;

