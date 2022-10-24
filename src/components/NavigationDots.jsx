import React from "react";

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["Home", "About", "Work", "Skills", "Testimonials", "Contact"].map(
        (item, index) => (
          <a
            href={`#${item.toLowerCase()}`}
            key={item + index}
            className="app__navigation-dot"
            style={
              active == item.toLowerCase() ? { backgroundColor: "#311BAC" } : {}
            }
          />
        )
      )}
    </div>
  );
}

export default NavigationDots;
