import React, {Component} from 'react';


class CreateAccount extends Component{

  render(){
    return(
      <div>
        <h3>Let's start by creating your account</h3>
        <section className="createAccount leftSection">
        <form>
          <label for="company_name">Company Name:</label>
          <input
            type="text"
            placeholder="Company Name"
            className="createAccount_companyName"
            >
          </input>
          <label for="company_address">Company Address:</label>
          <input
            type="text"
            placeholder="Company Address"
            className="createAccount_companyAddress"
            >
          </input>
          <label for="company_email">E-mail Address:</label>
          <input
            type="text"
            placeholder="Company email"
            className="createAccount_companyEmail"
            >
          </input>
        </form>
        </section>
        <section className="createAccount rightSection">
        <form>
          <label for="accountType">Account Type:</label>
          <input
            type="option"
            placeholder="Account Type"
            className="createAccount_companyType"
            >
          </input>
          <label for="company_address">About the Company:</label>
          <input
            type="text"
            className="createAccount_aboutCompany"
            >
          </input>
        </form>
        </section>
      </div>
    )
  }
}

export default CreateAccount;
