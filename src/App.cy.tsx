import React from 'react'
import App from './App'

describe('<App />', () => {
  // beforeEach(() => {
  //   cy.intercept({
  //     method: "Get",
  //     url: `user`,
  //   },
  //     {
  //       statusCode: 200,
  //       fixture: "data.json",
  //     });
  // });

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)

    // cy.get("table:first > thead > tr:first > th").should(($cols) => {
    //   expect($cols).to.have.length(7);
    //   expect($cols[0]).to.have.text("Report Name");
    //   expect($cols[1]).to.have.text("Product Line");
    //   expect($cols[2]).to.have.text("Solution Family");
    //   expect($cols[3]).to.have.text("Report Group");
    //   expect($cols[4]).to.have.text("Latest Refresh Date/Time");
    //   expect($cols[5]).to.have.text("Last Published Date/Time");
    //   expect($cols[6]).to.have.text("Report Author");
    // });
  })
})