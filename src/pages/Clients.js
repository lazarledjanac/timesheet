import React from "react";
import Layout from "../layout/Layout";
import ClientItem from "../components/ClientItem";
import CreateClientForm from "../components/CreateClientForm";
import LetterButtonsContainer from "../components/LetterButtonsContainer";

function Clients() {
  return (
    <Layout>
      <h2>
        <i class="ico clients"></i>Clients
      </h2>
      <div class="grey-box-wrap reports">
        <a href="#new-member" class="link new-member-popup">
          Create new client
        </a>
        <div class="search-page">
          <input type="search" name="search-clients" class="in-search" />
        </div>
      </div>
      <CreateClientForm />
      <LetterButtonsContainer />
      <div class="accordion-wrap clients">
        <ClientItem name={"ADAM Software NV"} />
        <ClientItem name={"Clockwork"} />
        <ClientItem name={"Emperor Design"} />
      </div>
      <div class="pagination">
        <ul>
          <li>
            <a href="javascript:;">1</a>
          </li>
          <li>
            <a href="javascript:;">2</a>
          </li>
          <li>
            <a href="javascript:;">3</a>
          </li>
          <li class="last">
            <a href="javascript:;">Next</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default Clients;
