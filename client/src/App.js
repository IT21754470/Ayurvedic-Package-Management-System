
// App.js
// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TreatmentPage from "./components/TreatmentPage";
import CustomerTreatments from "./components/CustomerTreatments";
import TreatmentDetailsModal from "./components/TreatmentDetailsModal";
import ConfirmationBox from "./components/ConfirmationBox";
import Layout from "./components/Layout"; // Import the Layout component
import SuccessPage from "./components/SuccessPage";



function App() {
  return (
    <Router>
   
       
      <Layout> {/* Use the Layout component */}
        <Switch>
          <Route path="/add">
            <TreatmentPage />
          </Route>
          <Route path="/customer-treatments">
            <CustomerTreatments />
          </Route>
          <Route path="/confirmation">
            <ConfirmationBox />
          </Route>
          <Route path="/success"> {/* Route for the success page */}
            <SuccessPage />
          </Route>


          <Route exact path="/" component={TreatmentDetailsModal} />
        </Switch>
      </Layout>
  
    </Router>
  );
}

export default App;
