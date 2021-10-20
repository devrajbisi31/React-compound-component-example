import React from "react";
import Accordion from "./components/Accordion";
import faqData from "./faqs.json";
function App() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>
              <div style={{ padding: "20px" }}>{item.body}</div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
    </Accordion>
  );
}

export default App;
